const peso = 60;
const altura = 1.75;
const imc = (peso / altura**2).toFixed(2);

if (imc < 17){
    console.log("Muito abaixo do peso (17)")
} else if(imc < 18.5){
    console.log('Abaixo do peso (18.5)');
}else if(imc < 25){
    console.log("Peso normal (25)")
}else if(imc < 30){
    console.log('Acima do peso (30)')
}else if(imc < 35){
    console.log('Obesidade (I) (35)')
}else if(imc < 40){
    console.log('Obesidade (II) (40)')
}