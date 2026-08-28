//#region  para com meçar um problema 

//Já fizemos coisas assim 
const numero1 = 10;
const numero2 = 20;

const resultado = numero1 + numero2;

console.log(resultado);

//e para vários números? O que fazer?

const resultado1 = 10 + 20;
const resultado2 = 30 + 50;
const resultado3 = 100 + 200;

//#endregion

//#region função simples
//dá para fazer uma função que melhorar a ideia 

function somar() {
    const resultado = 10 + 20;

    console.log(resultado);
}

//precisamos chamar a função para funcionar fora do bloco de
//  execução ==> somar();

//#endregion

//#region função com parametros

//Agora podemos deixar nossa função reutilizável.
function somar(numero1, numero2) {
    console.log(numero1 + numero2);
}

somar(10, 20);

somar(50, 30);

somar(100, 200);

//paramentros são as variáveis que a função recebe  ==> numero1, numero2
//Argumentos são os valores enviados quando chamamos a função. ==> somar(10, 20);

//#endregion

//#region Retorno

//isso exibe as coisas, mas não entrega o resultado para quem chamou a função.
function somar(numero1, numero2) {
    console.log(numero1 + numero2);
}

/*agora a gente começa a pegar os dados e retornar para que outras partes do programa 
continuem os scrips a partir do que resultado da função  

o retorno ajuda a gente a deixar coisa complexas menores e de melhor entendimento
*/
function somar(numero1, numero2) {
    return numero1 + numero2; // Palavra reservada  e //armazena o resultado 
}

//Podemos armazenar o resultado em uma variável
//const resultado = somar(10, 20);
console.log(resultado);

//por fim 

/*
    console.log() é como mostrar o resultado em uma tela.

    return é como entregar o resultado para outra parte do programa utilizar.
*/

//Exemplo para fechar o contexto
function calcularDesconto(valor, desconto) {
    return valor - desconto;
}

const valorFinal = calcularDesconto(100, 20);

console.log(valorFinal);

//Montando de outra forma

const valorComDesconto = calcularDesconto(100, 20);
const valorComImposto = valorComDesconto * 1.1;

console.log(valorComImposto);


//#endregion

//#region Funções sem parametro 

//Funções mais simples que são chamadas e fazem algo

function mostrarMensagem() {
    console.log("Bem-vindo ao sistema!");
}
mostrarMensagem();

function quandoClickar() {
    console.log("Obrigado por comprar em nossa loja");
}
quandoClickar();
//#endregion

//#region Arrow functions 

//São só um jeito diferente de declarar as funções, não vamos nos preocupar agora, mais é bom saber o que está rolando.

//função tradicional 
function somar(numero1, numero2) {
    return numero1 + numero2;
}

//Arrow function 
const somar = (numero1, numero2) => {
    return numero1 + numero2;
};

//tradicional
function saudacao(nome) {
    return `Olá, ${nome}`;
}

//Arrow function 
const saudacao = (nome) => {
    return `Olá, ${nome}`;
};
//#endregion

//#region Exemplo prático - sistema

/*
    Relembrando o conceito de objeto 
    No desenvolvimento backend com JavaScript (como no Node.js), um objeto é uma 
    estrutura de dados mutável que armazena pares de chave-valor. 
    Ele representa entidades do mundo real ou do sistema, 
    como usuários, requisições HTTP e conexões com bancos de dados.

    -const pessoa [] - array
    -const pessoa {} - objeto 

*/


//Cadastro de usuário 
function criarUsuario(nome, idade) {
    return {
        //chave: valor
        nome: nome,
        idade: idade
    };
}

const usuario = criarUsuario("Gerson", 35);

console.log(usuario);

//simplificando a funções - nome e declação precisam ser o mesmo, é case sensitive.
//nos vamos usar assim.
function criarUsuario(idade, nome) {
    return {
        nome,
        idade
    };
}


//#endregion 
