/* catálogo de procedimentos oferecidos pela clínica (consultas, vacinas, exames) e seus respectivos preços.*/

const servicos = [
    {
        id: 1,
        nome: "Fluidoterapia",
        valor: 180
    },

    {
        id: 2,
        nome: "Vacinação",
        valor: 150
    },

    {
        id: 3,
        nome: "Castração",
        valor: 300
    },

    {
        id: 4,
        nome: "Coleta de exames",
        valor: 100
    },
];

async function buscar_servicos(id) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const servico = servicos.find(servico => servico.id === id);

            if (servico) {
                resolve(servico);
            }
            else {
                reject("Procedimento não encontrado!!");
            }

        }, 1000);
    });
};

module.exports = {
    buscar_servicos
};