//#region -  Manipulação básica

const frutas = ["Maçã", "Banana", "Laranja", "Pera", "Limão", "Mexirica"];

/*
    Adicione "Morango" no final.
    Adicione "Abacaxi" no início.
    Remova o último elemento.
    Remova o primeiro elemento.
    Mostre a quantidade de frutas.
*/

frutas.push("Morango");
console.log(frutas);

console.log("----------------------");

frutas.unshift("Abacaxi");
console.log(frutas);

console.log("----------------------");

frutas.pop();
console.log(frutas);

console.log("----------------------");

frutas.shift();
console.log(frutas);

console.log("----------------------");

console.log(frutas.length);

console.log("----------------------");

//#endregion

//#region - forEach

const nomes = [
    "Ana",
    "Carlos",
    "João",
    "Maria",
    "Claudia",
    "Adriana",
    "Cesar",
    "Asafe"
];
//Utilize forEach para mostrar: Olá, Ana! .... .assim por diante 
//#endregion

nomes.forEach((nome) => {
    console.log(`Olá, ${nome}`);
});

console.log("----------------------");

//#region map

const precos = [10, 20, 30, 40, 50, 60, 70, 80];

//Crie um novo array com os preços acrescidos de 10%.

const desconto = precos.map((desconto) => {
    return (desconto * 1.1);

});
console.log(desconto)

console.log("----------------------");

//#endregion

//#region filter
const numeros = [5, 12, 18, 25, 30, 7, 40];

//Crie um novo array somente com números maiores que 20.

const maior_que_20 = numeros.filter((numero) => {
    return numero > 20
});
console.log(maior_que_20)

console.log("----------------------");

//#endregion

//#region find
const listaNumeros = [5, 12, 18, 25, 30];

//Encontre o primeiro número maior que 20.
const numero_maior_20 = listaNumeros.find((listaNumero) => listaNumero > 20);
console.log(numero_maior_20);

console.log("----------------------");

//#endregion

//#region some
const idades = [12, 15, 17, 20, 14];

//Existe alguém maior de idade? Utilize o some para encontrar! 
const maior_idade = idades.some(idade => idade >= 18);
console.log(maior_idade);

console.log("----------------------");


//Usando o array acima codifique respondendo: Todos são maiores de idade?
//every
const todos_maiores_idade = idades.every(idade => idade >= 18);
console.log(todos_maiores_idade);

console.log("-----------------------")

//#endregion

//#region reduce

const valores = [100, 200, 50, 150];

//Calcule o valor total.
const soma = valores.reduce((total, numero) => {
    return total + numero;
}, 0);
console.log(soma)

console.log("-----------------------")
//#endregion