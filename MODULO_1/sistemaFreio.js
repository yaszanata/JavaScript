let temperatura = 380;
const freioPressionado = true;

const alertaPerigo = temperatura >= 400;
console.log(alertaPerigo);

const usoIntenso = temperatura > 300 && freioPressionado;
console.log(usoIntenso);

const freioSeguro = temperatura < 400 && temperatura >= 50;
console.log(freioSeguro);

const alertaPainel = temperatura > 400 || temperatura < 0;
console.log(alertaPainel);

const estadoInativo = (!(freioPressionado));
console.log(estadoInativo)
