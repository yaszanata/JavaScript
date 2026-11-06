//#region imports
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

//não importa onde será chamado, sempre vai conseguir encontrar o arquivo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const caminho_dados = path.join(__dirname, "..", "BD", "tabela_atendimentos.json");

//#endregion

//#region lógica

//listar todos - lê o arquivo local
export async function listar_todos() {
    const conteudo = await fs.readFile(caminho_dados, "utf-8");
    return JSON.parse(conteudo);
}

//escrever/salvar
//salvar todos - escrever em um arquivo local
export async function salvar_todos(cadastros) {
    await fs.writeFile
        (caminho_dados, JSON.stringify(cadastros, null, 2),
            "utf-8"
        );
}

//#endregion
