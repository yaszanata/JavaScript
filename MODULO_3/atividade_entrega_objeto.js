//Atividade 1 - Sistema de aluno
const aluno = {
    nome: "Carlos",
    idade: 22,
    curso: "Análise e Desenvolvimento de Sistemas",

    endereco: {
        cidade: "São José dos Campos",
        estado: "SP"
    },

    ativo: true,

    apresentar() {
        console.log(`Aluno: ${this.nome}`);
    }
};

//1 - Motrar: Nome, Idade, Curso, Cidade, Estado
console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.curso);
console.log(aluno.endereco.cidade);
console.log(aluno.endereco.estado);

//2 - Alterar a cidade
aluno.endereco.cidade = "Santa Rita do Passa Quatro";
console.log(aluno.endereco.cidade);

//3 - Adicionar email
aluno.email = "carlos@gmail.com";
console.log(aluno.email);

//4 - Use o destructuring de alguma forma
const { nome: novo_nome } = aluno;
console.log(novo_nome);

//5 - Criar uma cópia utilizando spread para alunoAtualizado
const aluno_atualizado = {
    ...aluno
};
console.log(aluno_atualizado);

//6 - Transformar o objeto em JSON
const json = JSON.stringify(aluno);
console.log(json);

//7 - Voltar de JSON para objeto
const objeto = JSON.parse(json);
console.log(objeto);

//Atividade 2 -----------------------------------

const usuario = {
    id: 1,
    nome: "Claudia Raia",
    email: "claudia@email.com",
    idade: 25,
    endereco: {
        cidade: "São Paulo",
        estado: "SP",
        numero: 145
    }
};


//Como acessar o nome?
console.log(usuario.nome);

//Como acessar a cidade?
console.log(usuario.endereco.cidade);

//Como alterar a idade?
usuario.idade = 15;
console.log(usuario.idade);

//Como adicionar telefone?
usuario.telefone = "(19) 99999-9999";
console.log(usuario.telefone);

//Como remover o email?
delete usuario.email;
console.log(usuario);

//Como criar uma cópia do usuário?
const novo_usuario = {
    ...usuario
};
console.log(novo_usuario);

//Como extrair somente nome e cidade?
console.log(usuario.nome);
console.log(usuario.endereco.cidade);

//Como transformar o objeto em JSON?
const json2 = JSON.stringify(usuario);
console.log(json2);

//Como transformar o JSON novamente em objeto
const objeto2 = JSON.parse(json2);
console.log(objeto2);