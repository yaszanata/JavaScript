//imports 
import http from "http";
import { Livros } from "./livros.js";


//logica
const servidor = http.createServer((req, res) => {

    // get / - api da blibioteca
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "application/json" });

        res.end(JSON.stringify({
            mensagem: "Você está na API da Biblioteca da loucura "
        }));
        return;

    } else if (req.url === "/livros") {
        // get livros 
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(Livros))
        return;
    }


    // rota que não existe 
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({
        erro: "Rota não encontrada."
    }));

});

//funções auxiliares
servidor.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");

});