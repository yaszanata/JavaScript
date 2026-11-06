//#region imports
import express from "express";
import { listar_todos, salvar_todos } from "./MANIPULADOR/manipulador_arquivo.js";

const app = express(); //criação da instância do express
const PORT = 3000;
app.use(express.json()); //convertendo de maneira mais direta - middleware

//#endregion

//#region lógica

//GET - boas vindas
app.get("/", (req, res) => {
    res.send("Bem-vindo à API da nossa clínica veterinária")
});

//GET - atendimentos
app.get("/atendimentos", async (req, res) => {
    try {
        //o que eu quero que aconteça:
        const cadastros = await listar_todos();
        return res.status(200).json(cadastros);
    }
    catch (error) {
        //se der errado:
        console.log("Erro ao listar atendimentos", error);
        return res.status(500).json({ error: "Não foi possível leer os cadastros" });

    }
});


//DELETE /atendimentos /:id
app.delete("/atendimentos/:id", async (req, res) => {

    try {
        //recuperar ID enviado na url e converter para Number
        const id = Number(req.params.id);

        //leio os dados cadastrados
        const dados = await listar_todos();

        //Mantém apenas os itens com id diferente
        const dados_atualizados = dados.filter((atendimento) => atendimento.id !== id);

        //verificar se deletou
        if (dados_atualizados.length === dados.length) {
            return res.status(404).json({ erro: "Atendimento não deletado" })
        }

        //Salvar a lista nova
        await salvar_todos(dados_atualizados);

        //Mensagem de resposta
        return res.status(200).json({ mensagem: "Atendimento excluído com sucesso" });

    }

    catch (error) {
        console.log("Erro ao deletar cadastro", error);
        return res.status(500).json({ error: "Não foi possível deletar cadastro" })
    }

});

//POST - Novo cadastro
app.post("/atendimentosPost", async (req, res) => {

    try {
        //dados novo cadastro:
        const {
            id,
            pet,
            raca,
            idade,
            tutor,
            diaAtendimento,
            valorGasto
        } = req.body;

        //valida campos obrigatórios - se algum estiver null
        if (!id || !pet || !raca || !idade || !tutor || !diaAtendimento || !valorGasto) {
            return res.status(400).json({ erro: "Todos os campos são obrigatórios" })
        }

        //Criar objeto para salvar o novo cadastro:
        const novo_cadastro = {
            id: Number(id),
            pet: pet,
            raca: raca,
            idade: Number(idade),
            tutor: tutor,
            diaAtendimento: diaAtendimento,
            valorGasto: Number(valorGasto)
        };

        //carregar a lista, colocar dentro da lista e salvar
        const cadastros = await listar_todos();
        cadastros.push(novo_cadastro);

        await salvar_todos(cadastros);
        return res.status(201).json({ mensagem: "Cadastro realizado com sucesso" })
    }

    catch (error) {
        console.log("Erro ao salvar cadastro", error);
        return res.status(500).json({ error: "Não foi possível salvar o cadastro" })
    }
});

//PUT - alterar um cadastro /atendimentos/:id
app.put("/atendimentos/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);

        //leio os dados cadastrados
        const dados = await listar_todos();

        const atendimento_existente = dados.find((atendimento) => atendimento.id === id);

        //verificar se encontrou o atendimento
        if (!atendimento_existente) {
            return res.status(404).json({ erro: "Atendimento não encontrado" })
        };

        const {
            pet,
            raca,
            idade,
            tutor,
            diaAtendimento,
            valorGasto
        } = req.body;

        if (!pet || !raca || !idade || !tutor || !diaAtendimento || !valorGasto) {
            return res.status(400).json({ erro: "Todos os campos são obrigatórios" })
        };

        const atendimento_atualizado = {
            id: Number(id),
            pet: pet,
            raca: raca,
            idade: Number(idade),
            tutor: tutor,
            diaAtendimento: diaAtendimento,
            valorGasto: Number(valorGasto)
        };

        //substituir o atendimento existente pelo atualizado
        const dados_atualizados = dados.map((atendimento) => atendimento.id === id ? atendimento_atualizado : atendimento);

        //salvar a lista:
        await salvar_todos(dados);
        return res.status(200).json({ mensagem: "Atendimento alterado com sucesso" })
    }

    catch (error) {
        console.log("Erro ao alterar cadastro", error);
        return res.status(500).json({ error: "Não foi possível alterar e salvar o cadastro" })
    }
});


//Se não encontrei nenhuma rota - sempre vai ter
app.use((req, res) => {
    res.status(404).json({ erro: "Rota não encontrada" });
});

//#endregion

//#region funções auxiliares
app.listen(PORT, () => {
    console.log("Está rodando na porta: ", PORT);
});


//#endregion
