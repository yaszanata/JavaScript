//simulação

//função auxiliar
const esperar = (ms) => new Promise(
    resolve => setTimeout(
        resolve, ms

    ));

//buscar usuario
async function buscar_usuario(Id) {
    await esperar(2000);

    return {
        id: Id, //Vai usar o id que a gnt manda na executar
        nome: "Yasmin",
        cpf: "123.456.670-89"
    }
};

//buscar pedido
async function buscar_pedido(usuario_id) {
    await esperar(3000);

    const todos_pedidos = [
        { id: 1, produto: "X-Tudo" },
        { id: 2, produto: "Coca-Cola" },
        { id: 3, produto: "X-Bacon" }
    ]
    return todos_pedidos.filter(pedido => pedido.id === usuario_id);
}

//Função executar
async function executar() {
    try {
        //buscar usuário
        console.log("Iniciando simulação");
        console.log("Buscando usuário...");
        const usuario = await buscar_usuario(1);
        console.log("Usuário encontrado: ", usuario);

        //buscar pedido
        console.log("Buscando pedidos pelo ID", usuario.id);
        const pedidos = await buscar_pedido(usuario.id);
        console.log("Pedido encontrado: ", pedidos);

        // for (const pedido of pedidos) {
        //     if (pedido.id === usuario.id) {
        //         console.log("Pedido encontrado: ", pedido);
        //     }
        //     else {
        //         console.log("Pedido não encontrado");
        //     }
        // }

    }
    catch (erro) {
        console.log("Deu errado")
    }

}

executar()

