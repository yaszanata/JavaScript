// Servidor para texte 
// 1- Imports*
import http from "http";

// 2- Logica do servidor
// criar o servidor 
// req - request (requisição)
// res - response (resposta)

const servidor = http.createServer((req, res) => {

    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });

    // body - corpo da resposta
    res.end(JSON.stringify({ mensagem: "A minha primeira API com Node.js" }));

    // Mostrar o modo que está sendo utilizado 
    console.log(req.method);

});

// 3- Funções auxiliares;
servidor.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

// servidor de rotas