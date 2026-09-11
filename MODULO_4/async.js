// //no promise temos:
// buscar_usuario().then(usuario => {
//     console.log(usuario);
// });

//async/await - essa função vai funcionar de forma assincrona e vai
//ter um pedaço que va,os precisar esperar

async function buscar_usuario_async() {
    try {
        //aqui é o que eu quero que aconteça
        const usuario = await buscar_usuario();
        console.log(usuario);
    }

    catch (erro) {
        //erro que aconteceu
        console.log(erro)
    }
}