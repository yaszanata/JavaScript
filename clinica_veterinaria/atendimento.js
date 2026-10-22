/*registros dos atendimentos contendo o nome do paciente/tutor e a lista de procedimentos realizados;*/

const atendimentos = [
    {
        id: 1,
        nome_animal: "Mingau",
        nome_tutor: "Yasmin",
        itens: [
            { servico_id: 1, quantidade: 1 }
        ]
    },

    {
        id: 2,
        nome_animal: "Mel",
        nome_tutor: "Luís",
        itens: [
            { servico_id: 3, quantidade: 1 },
            { servico_id: 4, quantidade: 1 }
        ]
    },

    {
        id: 3,
        nome_animal: "Michainzão",
        nome_tutor: "Terassi",
        itens: [
            { servico_id: 2, quantidade: 1 }
        ]
    },

    {
        id: 4,
        nome_animal: "Belinha",
        nome_tutor: "Lara",
        itens: [
            { servico_id: 1, quantidade: 1 },
            { servico_id: 2, quantidade: 2 }
        ]
    }
];

async function buscar_atendimentos(id) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const atendimento = atendimentos.find(atendimento => atendimento.id === id);

            if (atendimento) {
                resolve(atendimento);
            }
            else {
                reject("Atendimento não encontrado!!");
            }

        }, 1000);
    });
};

module.exports = {
    buscar_atendimentos
}