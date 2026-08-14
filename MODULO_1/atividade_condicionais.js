//#region atividade 1

//Maioridade - Crie uma variável idade e atribua um 
// valor. Em seguida, use uma estrutura condicional para verificar 
// se a idade é maior ou igual a 18. Se for, exiba "Maior de idade",
// caso contrário, exiba "Menor de idade".
console.log("\n---------ATIVIDADE 1----------")
const idade = 17;

if (idade >= 18) {
    console.log("Maior de idade");
}
else {
    console.log("Menor de idade");
}

console.log("------------------------------")
//#endregion

//#region Atividade 2

//Aprovação - Implemente com if/else e com switch case. 
// Crie uma variável nota e atribua um valor.
console.log("\n---------ATIVIDADE 2----------")

console.log("-----------IF/ELSE------------")
//if/else
const nota = 8;
const nota_arredondada = Number(nota.toFixed(2));
console.log(nota_arredondada);


if (nota_arredondada < 5) {
    console.log("Reprovado");
}

if (nota_arredondada >= 5 && nota_arredondada < 7) {
    console.log("Recuperação");
}

else if (nota_arredondada > 7) {
    console.log("Aprovado");
}
console.log("------------------------------")

console.log("\n------------WHILE-------------")
//swith case

const nota1 = 2.7

switch (true) {

    case (nota1 < 5):
        console.log("Reprovado");
        break;

    case (nota1 >= 5 && nota1 < 7):
        console.log("Recuperação");
        break;

    case (nota1 > 7):
        console.log("Aprovado");
        break;

    default:
        console.log("Nota inválida")
}

console.log("------------------------------")
//#endregion

//#region Atividade 3
//Login - Crie uma variável usuario e outra senha. 
//Em seguida, use uma estrutura condicional para verificar se o 
//usuário e a senha são válidos e pode ou não acessar o sistema.

console.log("\n---------ATIVIDADE 3----------")

const senha = 123;
const email = "yas@gmail.com";
const ativo = true;

if (senha === 123 && email === "yas@gmail.com" && ativo) {
    console.log("Usuário autorizado")
}

else {
    console.log("Usuário não autorizado");
}

console.log("------------------------------")
//#endregion

//#region Atividade 4 
//Status do pedido - Crie uma variável statusPedido e
// atribua um valor (pendente, pago, envidado, processando, entregue,
// concluído).

console.log("\n---------ATIVIDADE 4----------")
const status_pedido = 1

switch (status_pedido) {

    case 1:
        console.log("Pendente");
        break;

    case 2:
        console.log("Pago")
        break;

    case 3:
        console.log("Enviado")
        break;

    case 4:
        console.log("Processando")
        break;

    case 5:
        console.log("Entregue")
        break;

    case 6:
        console.log("Enviado")
        break;

    default:
        console.log("Valor inválido")
        break;

}

console.log("------------------------------")
//#endregion

//#region Atividade 5
//Contador - Crie uma algoritmo que com "for" para imprimir
// todos os numeros pares de 1 a 100.

console.log("\n---------ATIVIDADE 5----------")
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0)
        console.log(i);
}

console.log("------------------------------")
//#endregion

//#region Atividade 6
// Refaça o exercicio 5 agora usando for...of e while.

console.log("\n---------ATIVIDADE 6----------")

console.log("-----------FOR...OF-----------")
//for...of
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const n_pares of numeros) {
    if (n_pares % 2 === 0) {
        console.log(n_pares);
    }
}

console.log("------------------------------")
console.log("\n------------WHILE-------------")
//While

let contador = 0

while (contador <= 100) {
    if (contador % 2 === 0)
        console.log(contador);
    contador++;
}

console.log("------------------------------")
//#endregion

//#region Atividade 7
//Crie um array com 10 nomes e exiba cada um dele usando for...of.
console.log("\n---------ATIVIDADE 7----------")
const nomes = ["Yasmin", "Helena", "Bia", "Zanata", "Vithor", "Luís", "Murilo", "Dias", "Olavo", "Miguel"];

for (const nome of nomes) {
    console.log(nome);
}

console.log("------------------------------")
//#endregion

//#region Atividade 8
//Crie um array com 10 nomes e exiba somente os nomes que tem mais 
// de 5 letras usando for...of, if e .length. 
console.log("\n---------ATIVIDADE 8-----------")

const apelidos = ["Yasmin", "Helena", "Bia", "Zanata", "Vithor", "Luís", "Murilo", "Dias", "Olavo", "Miguel"];

for (const apelido of apelidos) {
    if (apelido.length > 5) {
        console.log(apelido);
    }
}

console.log("------------------------------")
//#endregion

//#region Atividade 9
// Dado o array de números, calcule a soma de todos os elementos do array e exiba o resultado no console.
// Dica: você pode usar um loop for ou for...of para percorrer o array e somar os valores.
console.log("\n---------ATIVIDADE 9----------")

const numbers = [10, 20, 30, 40, 50];
let soma = 0

for (const number1 of numbers) {
    soma = soma + number1
}

console.log(soma);

console.log("------------------------------")
//#endregion

//#region Atividade 10
//Desafio do backend :
//Dado o array abaixo, mostre somente o pedidos pagos 
console.log("\n---------ATIVIDADE 10----------")

const pedidos = [
    { cliente: "Ana", valor: 150, pago: true },
    { cliente: "Carlos", valor: 300, pago: false },
    { cliente: "Maria", valor: 500, pago: true },
    { cliente: "João", valor: 200, pago: true },
    { cliente: "Luizinho", valor: 100, pago: true },
    { cliente: "Mel", valor: 243, pago: true },
    { cliente: "ND da VA", valor: 2400, pago: false },
    { cliente: "Ana", valor: 5400, pago: false },
    { cliente: "Lebron ", valor: 1200, pago: true }
];

for (let i = 0; i < pedidos.length; i++) {
    if (pedidos[i].pago === true) {
        console.log(pedidos[i]);
    }
}

console.log("\n----------FOR...OF-----------");

for (let pedido of pedidos) {
    if (pedido.pago === true) {
        console.log(pedido);
    }
}

console.log("-----------------------------");
//#endregion