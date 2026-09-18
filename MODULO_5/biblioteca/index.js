//criar arquivo (livros)
const fs = require("fs/promises");

async function criar_arquivo() {

    const livros = [
        {
            id: 1,
            titulo: "Jantar Secreto",
            autor: "Raphael Montes"
        },
        {
            id: 2,
            titulo: "Dom Casmurro",
            autor: "Machado de Assis"
        }
    ];

    await fs.writeFile("livros.json", JSON.stringify(livros, null, 2));

    console.log("Dados salvos com sucesso!");
}

//listar arquivo (livro)
async function listar_livros() {
    //ler o arquivo:
    const dados = await fs.readFile("livros.json", "utf-8") //utf-o --> converte texto em binário

    //transformar para objeto
    const livros = JSON.parse(dados);

    //exibir 
    console.log(livros);
}

//adicionar livro
async function adicionar_livros() {
    //ler o arquivo
    const dados = await fs.readFile("livros.json", "utf-8");

    //tranformar em objeto (parse)
    const livros = JSON.parse(dados);

    //add o livro no final (push)
    livros.push({
        id: 3,
        titulo: "Jogos Vorazes",
        autor: "Suzzane Collins"
    });

    //retransformar em JSON
    await fs.writeFile("livros.json", JSON.stringify(livros, null, 2));

    //mostrar que a ação foi concluída
    console.log("Livro adicionado com sucesso!");
}

//alterar livros
async function alterar_livros(id) {

    //ler o arquivo
    const dados = await fs.readFile("livros.json", "utf-8");

    //transformar em objeto (JASON --> OBJETO)
    const livros = JSON.parse(dados);

    //descobrir o livro
    const livro = livros.find((livro) => livro.id === id);

    //lógica - se não existir
    if (!livro) {
        console.log("Livro não encontrado")
        return;
    }

    //alterar
    livro.autor = "Yasmin";

    //retransformar (OBJETO --> JSON)
    await fs.writeFile("livros.json", JSON.stringify(livros, null, 2));

    //mostrar mensagem:
    console.log("Informação alterada com sucesso!")
}

//deletar livros
async function deletar_livros(id) {

    //ler arquivo
    const dados = await fs.readFile("livros.json", "utf-8");

    //transformar arquivo
    const livros = JSON.parse(dados);

    //lógica - se a lista estiver vazia
    if (!livros) {
        console.log("Livro não encontrado");
        return;
    }

    //procurar o arquivo e deletar livro
    const livros_atualizados = livros.filter((livro) => livro.id !== id);

    if (livros_atualizados.length === livros.length) {
        console.log("Livro ", id, " não encontrado!");
        return;
    }

    //retransformar em objeto
    await fs.writeFile("livros.json", JSON.stringify(livros_atualizados, null, 2));

    //mensagem
    console.log("Livro deletado com sucesso!");
}



//função executar
async function executar() {

    await criar_arquivo();

    await listar_livros();

    await adicionar_livros();

    await alterar_livros(1);

    await deletar_livros(3);
}

//chamando o início (endpoint)
executar();
