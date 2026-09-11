//callback - é uma função passada para outra função para ser executada posteriormente

/*se você pedir uma operação que demora muito o node não precisa
esperar parado*/

//sincromo - em sincronia
console.log("1");
console.log("2");
console.log("3");

console.log("------------------------------");


//assincromo - sem sincronia
console.log("Início");

// setTimeout(() => {
//     console.log("Processamento terminou")
// }, 2000); //2000 milisegundos

console.log("Fim");

console.log("------------------------------");

//exemplo:
numeros = [1, 2, 3, 4, 6, 7, 90];

numeros.forEach((n) => {
    console.log(n);
});

/* (n) => {
    console.log(n);

--> isso é o callback */

console.log("------------------------------");

//-------------------------------------------
function processar_usuario(nome, callback) {
    console.log("Processando " + nome);
    callback();
};

processar_usuario("Yasmin", () => { //bolinha vermelha - DEPURAÇÃO
    console.log("usuário processado");
});

console.log("------------------------------");

//---------------------------------------------

function buscar_usuario(callback) {
    //simulação de tempo:
    setTimeout(() => {
        //construindo objeto:
        const usuario = {
            id: 1,
            nome: "Yasmin"
        };
        callback(usuario)
    }, 2000);
};

console.log("início da chamada");

buscar_usuario((usuario) => {
    console.log(usuario);
});

console.log("Fim do processo")

//Problema do callback
//se fizermos uma série de operações e usarmos o callback ficará muito complexo
