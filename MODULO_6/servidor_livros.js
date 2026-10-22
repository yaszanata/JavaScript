// imports
import http from "http";
//logica
const servidor = http.createServer((req, res) => {
    //headers
    res.setHeader("content-type", "text/html; charset=utf-8");

    //body - logicas das rotas 
    if (req.url === "/") {
        res.end("Página Inicial");
    } else if (req.url === "/livros") {
        // ir no banco de dados , fazer um select na tabela de livros 
        // transformar em json 
        // devolver para o front 
        res.end("Páginas de livros");
    }
    else if (req.url === "/Usuarios") {
        res.end("Página de usuários")
    }

});

//funções auxiliares
servidor.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
