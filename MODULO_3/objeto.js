/*
const nome = [] - ARRAY
const nome = {} - OBJETO
const array_de_objeto = [{}, {}, {}] --> mais comum
const objeto_de_objeto = {{}, {}, {}} --> pode acontecer
*/

//#region Construindo 1 objeto:
const aluno = {
    id: 1,
    nome: "Davi",
    idade: 17,
    curso: "Ensino Médio Integrado",
    rm: 87654,
    cadastro_ativo: true,
    email: null,
    hobbie: ["ler", "bola", "xadrez"], //uma lista dentro de um objeto

    //endereco: "Rua 35, Jardim Itália - Santa Rita do Passa Quatro - SP - Brasil - CEP: 13670-000"

    //--transformando em objeto: (objeto dentro de um objeto)
    endereco: {
        rua: 35,
        bairro: "Jardim Itália",
        cidade: "Santa Rita do Passa Quatro",
        estado: "SP",
        pais: "Brasil",
        cep: 13670000
    }
};

console.log(aluno);

//buscando informações específicas:
console.log(aluno.nome);

//se o cadastro ativo = true, exibir: seja bem vindo...
if (aluno.cadastro_ativo === true) {
    console.log("Seja bem-vindo ao nosso sistema, " + aluno.nome)
}
else {
    console.log("Você não pode acessar o nosso sistema!")
}

//como acessar um objeto dentro de outro:
console.log(aluno.endereco.cidade);

//alterando os dados dentro do objeto:
aluno.idade = 18;
console.log(aluno.idade);

aluno.cadastro_ativo = false;
aluno.endereco.bairro = "Vila Rica";

console.log(aluno.cadastro_ativo);
console.log(aluno.endereco.bairro);

//Adicionando propriedade
aluno.cpf = 34567812345
aluno.telefone = "(19)98765-1346"

console.log(aluno);

//Deletando uma propriedade:
delete aluno.curso;
console.log(aluno);

//#endregion

//#region função dentro do objeto:
const filme = {
    titulo: "Jogos Vorazes",
    ano: 2014,
    genero: "distopia",

    apresentar: function () {
        console.log("O melhor filme da atualidade é: " + filme.titulo);
        console.log(`O melhor filme da atualidade é: ${this.titulo}`); //o "this" faz referência ao objeto - só pode dentro do objeto que queremos usar
    }
};

filme.apresentar(); //chamando a função

//#endregion

//#region Desestruturação - Destructuring
//usaremos o objeto aluno, já existente

const { nome, idade, rm } = aluno;
console.log(nome);

//Renomeando com Destructing:
//muda o nome atribuído anteriormente no objeto
const { nome: nome_completo } = aluno;
console.log(nome_completo);

//#endregion

//#region Spread operator - espalhar/colocar
//vamos usar os objeto: aluno, criado anteriormente

const dados_família = {
    nome_mae: "Janaina",
    nome_pai: "Joaquim"
};

// colocar outros objetos em um objeto final:
const usuario = {
    ...aluno,
    ...dados_família,
    data_cadastro: "28/08/2026"
};

console.log(usuario)

//#endregion

//#region Object.keys - Object.values - Object.entries:

//chaves do objeto:
console.log(Object.keys(aluno));
console.log("-----------------------\n")

//valores do objeto:
console.log(Object.values(aluno));
console.log("-----------------------\n")

//relação chave <--> valor- entries:
console.log(Object.entries(aluno));
console.log("-----------------------")

//#endregion

//#region objeto X JSON:
//JSON - somente a estrutura

//objeto --> JSON
const json = JSON.stringify(aluno);  //transforma um objeto em um JSON string
console.log(json);

//JSON --> objeto
const objeto = JSON.parse(json); //converte um objeto do tipo JSON para um objeto
console.log(objeto);
//#endregion