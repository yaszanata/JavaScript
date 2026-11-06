//IMPORTS
import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

//GET - boas vindas
app.get("/", (req, res) => {
    res.send("Bem-vindo à API dos registros da saída dos alunos")
});

//funções auxiliares
app.listen(PORT, () => {
    console.log("Está rodando na porta: ", PORT);
});


