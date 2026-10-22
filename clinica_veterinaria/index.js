const fs = require("fs/promises");
const { buscar_atendimentos } = require("./atendimento");
const { buscar_servicos } = require("./servicos");

module.import = {
    buscar_atendimentos,
    buscar_servicos
}

async function fechar_conta(atendimento_id) {
    try {
        //atendimento
        console.log("Buscando atendimento...");
        const atendimento = await buscar_atendimentos(atendimento_id);
        console.log(atendimento);
        console.log("-------------------------");


        //serviço
        console.log("Buscando serviço...");
        for (const item of atendimento.itens) {
            const servico = await buscar_servicos(item.servico_id);
            console.log('* ' + item.quantidade, 'X ' + servico.nome, 'R$' + servico.valor);
        }
        console.log("-------------------------");

        //total geral
        let total_geral = 0;

        //array para os serviços
        const itens_conta = [];

        for (const item of atendimento.itens) {
            const servico = await buscar_servicos(item.servico_id);
            const sub_total = servico.valor * item.quantidade;

            itens_conta.push({
                servico: servico.nome,
                quantidade: item.quantidade,
                valor_unitario: servico.valor,
                subtotal: sub_total,
            });

            total_geral += sub_total
        }

        console.log("O total a se pagar é R$ " + total_geral);
        console.log("Comanda gerada com suceso!");
        console.log("-------------------------");

        //contruindo a comanda
        const comanda = {
            lugar: "Clínica Veterinária",
            cliente: {
                id: atendimento.id,
                nome: atendimento.nome_tutor,
                pet: atendimento.nome_animal
            },
            itens: itens_conta,
            total_pagar: "O total a se pagar é R$ " + total_geral
        }
        await fs.writeFile("comanda_cliente.json", JSON.stringify(comanda, null, 2), "utf-8")
    }
    catch (erro) {
        console.error("Erro ao fechar a conta.", erro);
    }

}

fechar_conta(4);