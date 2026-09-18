
const usuarios = [
    {
        id: 1,
        nome: "Yasmin",
        telefone: "(19) 9875-4123",
        email: "yas@gmail.com",
        cep: "13676-800"
    },
    {
        id: 2,
        nome: "Helena",
        telefone: "(19) 4563-4983",
        email: "lena@gmail.com",
        cep: "13543-890"
    },
    {
        id: 3,
        nome: "Beatriz",
        telefone: "(19) 3476-4122",
        email: "bia@gmail.com",
        cep: "13467-090"
    }
];

//função buscar_usuarios
async function buscar_usuario(id) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const usuario = usuarios.find(usuario => usuario.id === id);

            if (usuario) {
                resolve(usuario);
            }
            else {
                reject("Usuário não encontrado");
            }

        }, 1000);

    });

};

//transformando em modulo:
module.exports = {
    buscar_usuario
};