//Promises - é uma promessa que teremos resultado no futuro

//Criando uma promise
const promessa = new Promise((resolve, reject) => {
    const sucesso = true;

    if (sucesso /*===true */) {
        resolve("Tudo certo!");
    }

    else {
        reject("Deu errado!");
    }

});

//consumir a promises
promessa
    .then((resultado) => { //then - então - usa-se para: "então isso ou então aquilo"
        console.log(resultado);
    })

    .catch((erro) => {
        console.log(erro)
    });
