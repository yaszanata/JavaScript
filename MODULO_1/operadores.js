//#region Start Operadores
//Exemplo de operadores de comparação

const idade = 20;

console.log(idade >= 18);
//#endregion

//#region Operadores matemáticos
console.log("\n")

const a = 8;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); //resto da divisão
//#endregion

//#region Operadores de comparação
console.log("\n")

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);   //Comparação de valor
console.log(a === b);  //Comparação de vaolr e tipo
console.log(a !== b);  //Diferente 
//#endregion

//#region Exercício  
console.log("\n")

const idade1 = 20;
const idade2 = 25;

console.log(idade1 > idade2);
console.log(idade1 < idade2);
console.log(idade1 >= idade2);
console.log(idade1 <= idade2);
console.log(idade1 == idade2);
console.log(idade1 === idade2);
console.log(idade1 !== idade2);
//#endregion

//#region Operadores lógicos
console.log("\n")

const idade3 = 17;
const idade4 = 25;

//Operador lógico AND
console.log(idade3 > 18 && idade4 > 18);

//Operador lógico OR
console.log(idade3 > 18 || idade4 > 18);

//Operador lógico NOT
console.log(!(idade3 > 18)); //inverte o valor da expressão

//#endregion 

//#region Combinando operadores
console.log("\n")

const idade5 = 25;
const matriculaAtiva = false;

const podeComprar = idade5 >= 18 || matriculaAtiva;

console.log(podeComprar);
//#endregion

//#region Operadores de incremento e decremento
console.log("\n")

let numero = 10;

console.log(numero++); //10 - na primeira ez ele pega o numero e depois começa a adicionar
console.log(numero); //11
console.log(++numero); //12

console.log(numero--); //12
console.log(numero); //11
console.log(--numero); //10
//#endregion

//#region Exercício 1 - Comparação
console.log("\n")

const x = 5;
const y = 10;

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y);
console.log(x === y);
console.log(x !== y);
//#endregion

//#region Exercício 2 - == vs ===
console.log("\n")

console.log(10 == "10")
console.log(10 === "10")
console.log(true == 1)
console.log(true === 1)
console.log(null == undefined)
console.log(null === undefined)
//#endregion

//#region Exercício 3 - Sistema de acesso - Desafio
console.log("\n")

const dataNascimento = new Date("2009-08-26");
const ativo = true;

//transformando 18 anos em milisegundos:
const dezoito_anos_milisegundos = 18 * 365.25 * 24 * 60 * 60 * 1000;

//comparando milisegundos com milisegundos
const podeAcessar = (new Date() - dataNascimento) >= dezoito_anos_milisegundos && ativo;

console.log(podeAcessar);
//#endregion