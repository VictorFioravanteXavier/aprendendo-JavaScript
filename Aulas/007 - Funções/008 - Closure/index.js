function QualSeuNome(name){
    const msg = `O seu nome é:`;
    function SeuNome(){
        return `${msg} ${name} `
    }
    return SeuNome();
}

console.log(QualSeuNome('Victor'))


function Calculadora(num1, num2){
    const msg = 'Resultado:';
    const Soma = () => {
        return  `${msg} ${num1 + num2}`; 
    }
    const Subitracao = () => {
        return  `${msg} ${num1 - num2}`; 
    }
    const Multiplicacao = () => {
        return  `${msg} ${num1 * num2}`; 
    }
    const Divizao = () => {
        return  `${msg} ${num1 / num2}`; 
    }

    return{
        soma: Soma(),
        subtracao: Subitracao(),
        multiplicacao: Multiplicacao(),
        divisao: Divizao(),
    }
}

console.log(Calculadora(10,5).Multiplicacao)