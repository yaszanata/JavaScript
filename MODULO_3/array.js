const frutas = ["maça", "banana", "laranja", "uva", "abacaxi", "pera"];

//acessando elementos do array:
console.log(frutas[3]);
console.log("-----------------------")

//contando elementos do array
console.log(frutas.length); // --> 6
console.log("-----------------------")

//acessando o último elemento:
console.log(frutas[frutas.length - 1]); // --> [6 - 1] --> [5]
console.log("-----------------------")

//mudando elementos:
frutas[1] = "morango";
console.log(frutas);

console.log("-----------------------")

//adicionando elementos:
//no início:
frutas.unshift("cereja");
console.log(frutas);

console.log("-----------------------")

//no final:
frutas.push("manga");
console.log(frutas);

console.log("-----------------------")

//deletando elementos:
//o último:
frutas.pop();
console.log(frutas);

console.log("-----------------------")

//o primeiro:
frutas.shift();
console.log(frutas);

console.log("-----------------------")

//vendo qual elemento saiu:
const item_removido = frutas.pop();
console.log(item_removido);

console.log("-----------------------")

//varrendo o array:
//FOR OF
for (const fruta of frutas) {
    console.log(fruta);
};

console.log("-----------------------")

//FOR EACH 
//executa uma função para acada elemento do array
//o que eu quero fazer com cada elemento?
frutas.forEach((fruta) => {
    console.log(fruta);
});

console.log("-----------------------")

//mudando a primeira dos elementos para maiúscula:
frutas.forEach((fruta) => {
    const primeira_letra_maiúscula = fruta.charAt(0).toUpperCase() + fruta.slice(1);
    //pega a fruta, olha o primeiro elemento [0], transforma em maiúscula (toUpperCase), 
    //e a partir da 2° letra [1] ele deixa igual/não mexe (slice)
    console.log(primeira_letra_maiúscula);
});

console.log("-----------------------")

const numeros = [1, 2, 3, 4, 5, 6];

//map - cria um novo array com elementos modificados
//como eu quero transformar cada elemento?
const numeros_dobrados = numeros.map((numero) => {
    return numero / 2;
});
console.log(numeros_dobrados);

console.log("-----------------------")

//filter - cria um array novo com os elementos que atendem a uma condição:
//quais elementos eu quero manter?
const maiores_que_3 = numeros.filter((numero) => {
    return numero > 3;
});
console.log(maiores_que_3)

console.log("-----------------------")

//find - procura um elemento que satisfaça uma condição:
//ele mostra o primeiro número que atende a condição
const numerof = numeros.find((n) => n > 4);
console.log(numerof);

// filter X find
// find: retorna o primeiro elemento
// filter: reyorna vários elementos

console.log("-----------------------")

//some -verifica se pelo menos um elementos atende a uma condição
//retorna true ou falso
const maior_que_5 = numeros.some(n => n > 5);
console.log(maior_que_5);

console.log("-----------------------")

//every - verifica se todos os elementos atendem a uma condição:
//retorna true ou false
const todos_maiores_que_0 = numeros.every(n => n > 0);
console.log(todos_maiores_que_0);

console.log("-----------------------")

//reduce - reduz o array a um único valor, aplicando uma função a cada elemento
const soma = numeros.reduce((total, numero) => {
    return total + numero;
}, 0); // 0 - valor em que ele vai começar

console.log(soma);

const produtos = [
    { nome: "Produto 1", disponivel: true },
    { nome: "Produto 2", disponivel: false },
    { nome: "Produto 3", disponivel: true },
    { nome: "Produto 4", disponivel: true }
]

console.log("-------------------------")
//for of
const produtos_disponiveis = [];
for (const produto of produtos) {
    if (produto.disponivel) {
        produtos_disponiveis.push(produto.nome);
    }
};
console.log(produtos_disponiveis)

console.log("-------------------------")

//map e filter
const produto_disponivel = produtos
    .filter((produto) => produto.disponivel)
    .map((produto) => produto.nome);

console.log(produto_disponivel);