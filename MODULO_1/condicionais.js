//#region teste de idade
const idade = 20;

if (idade >= 18) {
    console.log("Maior de idade");
}

//#endregion

//#region 
const idade1 = 16

if (idade1 >= 18) {
    console.log("Maior de idade");
}

else {
    console.log("menor de idade");
}

//#endregion

//#region if ou else
const nota = 6.99;
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
//#endregion condições compostas

//#region condições compostas (swith case)

//login:
const senha = 20;
const email = "ddd@gmail.com";
const ativo = true;

if (senha === 18 && email === "ddd@gmail.com" && ativo) {
    console.log("Usuário autorizado")
}

else {
    console.log("Usuário não autorizado");
}

//swith case
//--- usar quando temos muita condições para verificar

const dia = 6;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;

    case 2:
        console.log("Segunda-feira");
        break;

    case 3:
        console.log("Terça-feira");
        break;

    case 4:
        console.log("Quarta-feira");
        break;

    case 5:
        console.log("Quinta-feira");
        break;

    case 6:
        console.log("Sexta-feira");
        break;

    case 7:
        console.log("Sábado");
        break;

    default:
        console.log("Dia não encontrado");

}

//#endregion

//#region ternário
//abstração de if / else
//usar quando temos uma condição simples

const idade2 = 20;
let mensagem;

if (idade >= 18) {
    mensagem = "Maior";
}

else {
    mensagem = "Menor"
}

//com o operador ternario:

const mensagem1 = idade2 >= 18 ? "Maior" : "Menor";
//constante = condição ? valor se if (true) : valor se else

console.log(mensagem1);

//#endregion

//#region While

let contador = 1

while (contador <= 6) {
    console.log(contador);
    contador++;
}
//#endregion

//#region For
//for (iniciação; condição; incremento)

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//for ... of
const frutas = ["Morango", "Banana", "Maçã", "Ameixa", "Uva"];

for (const fruta of frutas) {
    console.log(fruta);
}

//tradicional:
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//#endregion
