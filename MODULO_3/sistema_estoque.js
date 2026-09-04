/*
    estoque = [
        [1,"Volante",10,"Prateleira 01"],
        [2,"Pedal",5,"Prateleira 02"],
        [3,"Câmbio",50,"Prateleira 03"],
        [4,"Calota",100,"Prateleira 02"],
        [id, nome, quantidade, localização]
]

*/
// ==========================================
// TRANSFORMANDO EM ARRAY DE OBJETO
// ==========================================

const estoque = [
    {
        id: 1,
        nome: "Volante",
        quantidade: 10,
        localizacao: "Prateleira 1"
    },
    {
        id: 2,
        nome: "Pedal",
        quantidade: 5,
        localizacao: "Prateleira 2"
    },
    {
        id: 3,
        nome: "Câmbio",
        quantidade: 50,
        localizacao: "Prateleira 3"
    },
    {
        id: 4,
        nome: "Calota",
        quantidade: 100,
        localizacao: "Prateleira 2"
    }
]

// ==========================================
// TRANSFORMANDO EM OBJETO DE OBJETOS 
// ==========================================


// ==========================================
// CADASTRAR PRODUTO
// ==========================================

function cadastrarProduto(nome, quantidade, localizacao) {
    const novo_produto = {
        id: estoque.length + 1,
        nome: nome,
        quantidade: quantidade,
        localizacao: localizacao
    };

    estoque.push(novo_produto);

    console.log("Cadastro realizado com sucesso!")
}

// ==========================================
// LISTAR ESTOQUE
// ==========================================

function listarEstoque() {
    for (const produto of estoque) {
        console.log(
            `ID: ${produto.id}\n` +
            `Nome: ${produto.nome}\n` +
            `Quantidade: ${produto.quantidade}\n` +
            `Localização: ${produto.localizacao}\n`
        )
    }
}


// ==========================================
// BUSCAR PRODUTO
// ==========================================

function buscarProduto(id_buscado) {
    for (const produto of estoque) {
        if (produto.id === id_buscado) {
            console.log("Produto encontrado!");
            console.log(
                `ID: ${produto.id}\n` +
                `Nome: ${produto.nome}\n` +
                `Quantidade: ${produto.quantidade}\n` +
                `Localização: ${produto.localizacao}\n`
            )

            return produto;

        }
    }
    console.log("Produto não encontrado!");
}


// ==========================================
// ATUALIZAR QUANTIDADE
// ==========================================

function atualizarQuantidade(id_buscado, nova_qnt) {
    for (produto of estoque) {
        if (produto.id === id_buscado) {
            produto.quantidade = nova_qnt;
            console.log("Quantidade Atualizada!");
            return;
        }

    }

    console.log("Produto não encontrado!");
}


// ==========================================
// DELETAR PRODUTO
// ==========================================

function deletarProduto() {

}


// ==========================================
// TESTANDO O SISTEMA
// ==========================================

console.log("Cadastrando produto ------------")
cadastrarProduto("Motor", 13, "Prateleira 2")

console.log("\nListando os produtos -------------")
listarEstoque()

console.log("\nBuscando Produto --------------")
buscarProduto(3)

console.log("\nAtualizando Quantidade --------------")
atualizarQuantidade(3)


