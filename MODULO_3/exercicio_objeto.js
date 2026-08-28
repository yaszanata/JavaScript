//#region Atividade 1:
const filme = {
    titulo: "Jogos Vorazes",
    ano: 2014,
    genero: "distopia"
};

//mostar o título:
console.log(filme.titulo)

//alterar o ano:
filme.ano = 2016;

//adicionar o diretor:
filme.diretor = "Francis Lawrence";

//remover o gênero:
delete filme.genero;

//mostrar o objeto final:
console.log(filme)

//#endregion

//#region Atividade 2:
const dados_pessoais = {
    nome: "Guilherme",
    matricula: "20260828",
    curso: "Análise e Desenvolvimento de Sistemas"
};

const dados_contato = {
    email: "guilherme@email.com",
    telefone: "(19) 999999-9999"
};

//mesclando objetos em perfil completo
const perfil_completo = {
    ...dados_pessoais,
    ...dados_contato
};
console.log(perfil_completo);

//adicionando e alterando dados:
const perfil_atualizado = {
    ...dados_pessoais,
    status: "Matriculado"
};

perfil_atualizado.curso = "Engenharia de Software";
console.log(perfil_atualizado);

//#endregion
