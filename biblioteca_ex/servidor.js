//#region imports
import express from "express";
import { Livros } from "./livros.js";

const app = express(); //cria uma instância do express
const PORT = 3000; //porta que o servidor vai escutar
app.use(express.json()); //permite que o servidor entenda requisições com corpo (body) com JSON

//#endregion

//#region lógica do servidor 

//get boas vindas
app.get("/", (req, res) => {
    res.json({ mensagem: "Servidor rodando!" });
});

//get para listar os livros
app.get("/livros", (req, res) => {
    res.json(Livros);
});

//buscar pelo id:
app.get("/Livros/:id", (req, res) => {

    //o id precisa ser convertido para n°
    const id = Number(req.params.id);

    const livro = Livros.find((le) => le.id === id);
    if (!livro) {
        return res.status(404).json({ mensagem: "Livro não encontrado!" });
    }
    res.json(livro);
});

//Autores tem seu nome exibido em maiúsculo
app.get("/livros/autor/maiusculo", (req, res) => {
    const resultado = autorMaiusculo(Livros);
    res.json(resultado);
});

//#endregion


//#region funções auxiliares
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

//função para deixar o nome do autor maiúsculo:
export function autorMaiusculo(livro) {
    return Livros.map((livro) => ({
        ...livro,
        autor: livro.autor.toUpperCase()
    }));

}

//#endregion