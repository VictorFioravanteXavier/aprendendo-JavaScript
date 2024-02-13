const velocidade = 75;
const warn = 85;

const condicao = velocidade >= warn ? console.log("Recebeu uma multa.") : console.log("Continua andado!");


if (velocidade >= warn){
    console.log("Recebeu uma multa.")
} else{
    console.log("Continua andado!")
}