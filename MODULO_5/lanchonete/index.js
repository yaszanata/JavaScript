//exports e import:
const fs = require("fs/promises");
const { buscar_pedidos } = require("./pedidos");
const { buscar_produtos } = require("./produtos");
const { buscar_usuario } = require("./usuarios");

module.import = {
    buscar_usuario,
    buscar_produtos,
    buscar_pedidos
}

async function fechar_conta(usuario_id) {
    try {
        //usuario
        console.log("Buscando usuário...")
        const usuario = await buscar_usuario(usuario_id);
        console.log(usuario);

        //produto
        console.log("Buscando produto...")
        const produto = await buscar_usuario(usuario_id);
        console.log(produto);

        //pedido
        console.log("Buscando pedido...")
        const pedidos = await buscar_pedidos(usuario_id);

        //total geral
        let total_geral = 0;

        //array para os itens
        const itens_conta = [];

        //varrer os pedidos --> procurar pedidos do cliente
        //varrer os itens (produtos) e add (push) os itens na conta
        //estrutura da comanda

        for (const pedido of pedidos) {
            const produto = await buscar_produtos(pedido.produto_id);
            const sub_total = produto.valor * pedido.quantidade;

            itens_conta.push({
                item: produto.nome,
                quantidade: pedido.quantidade,
                valor_unitario: produto.preco,
                subtotal: sub_total,
            });

            total_geral += sub_total
        }

        //construir nosso arquivo
        const comanda = {
            estabelecimento: "MC Donalds",
            cliente: {
                id: usuario.id,
                nome: usuario.nome
            },
            itens: itens_conta,
            total_pagar: total_geral
        }
        await fs.writeFile("comanda_cliente.json", JSON.stringify(comanda, null, 2), "utf-8")
    }
    catch (erro) {
        console.error("Erro ao fechar a conta.", erro);
    }

}

fechar_conta(2);