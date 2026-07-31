const nome = "Yasmin"; //Texto -> string
const idade = 16; //Número inteiro ou quebrado -> number
const programador = true; //Verdadeiro ou falso -> boolean

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof programador);


console.log("\n")
//----------------------------------------------------------------------


// String
const nome1 = "Yasmin";
const idade1 = 16;
const cidade = "Santa Rita";
const altura = 1.55;
const tatuagem = true;

// Forma 1 - interpolação de string
console.log(`Meu nome é ${nome1}, tenho ${idade1} anos e ${altura}m de altura. \nVivo na cidade de ${cidade} e tatuagem = ${tatuagem}\n`)

// Forma 2 - concatenação de string
console.log("Meu nome é: " + nome1 + ", tenho " + idade1 + " anos, e " + altura + "m de altura. \nVivo na cidade de " + cidade + " e se eu tenho uma tatuagem? " + tatuagem + ", eu tenho\n")


console.log("\n")
//----------------------------------------------------------------------


// Number
const altura1 = 1.75;
const temperatura = -10;;
console.log(typeof altura1);
console.log(typeof temperatura);


console.log("\n")
//----------------------------------------------------------------------


// Boolean

const idade2 = 16
let maiorIdade = true

if (idade2 >= 18) {
    console.log("Maior de idade")
}
else {
    maiorIdade = false;
    console.log("Menor de idade");
    console.log(maiorIdade)
}

console.log(maiorIdade)


console.log("\n")
//----------------------------------------------------------------------


// Undefined e null (indefinido e inexistente)

let nome2;
console.log(nome2);

// Undefined -> a variável existe mas não foi definida

nome2 = "Elton"
console.log(nome2)
console.log(typeof nome2)

let usuario = null
console.log(usuario)

// Null -> o valor não existe