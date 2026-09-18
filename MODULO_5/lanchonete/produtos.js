
const produtos = [
    {
        id: 1,
        nome: "Mc Lanche Feliz",
        valor: 25
    },
    {
        id: 2,
        nome: "Batata-frita",
        valor: 18
    },
    {
        id: 3,
        nome: "Refrigerante",
        valor: 7
    },
    {
        id: 4,
        nome: "Quarteirão",
        valor: 30
    },
    {
        id: 5,
        nome: "Big Mc",
        valor: 43
    }
];

async function buscar_produtos(id) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const produto = produtos.find(produto => produto.id === id);

            if (produto) {
                resolve(produto);
            }
            else {
                reject("Usuário não encontrado");
            }

        }, 1000);

    });


};

module.exports = {
    buscar_produtos
};