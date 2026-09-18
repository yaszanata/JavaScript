
const pedidos = [
    {
        id: 1,
        usuario_id: 1,
        produto_id: 1,
        quantidade: 2,
    },
    {
        id: 2,
        usuario_id: 1,
        produto_id: 2,
        quantidade: 1
    },
    {
        id: 3,
        usuario_id: 2,
        produto_id: 4,
        quantidade: 6

    }
];
async function buscar_pedidos(usuario_id) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const pedido_usuario = pedidos.filter(pedido => pedido.usuario_id === usuario_id);

            if (pedido_usuario.length > 0) {
                resolve(pedido_usuario)
            }
            else {
                reject("Não existe pedido para esse usuário!")
            }

        }, 2000);

    });

}

module.exports = {
    buscar_pedidos
}

