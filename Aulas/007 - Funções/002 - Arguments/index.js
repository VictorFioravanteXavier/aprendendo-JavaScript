function soma(n1, n2) {
    if(typeof n1 === 'number' && typeof n2 === 'number'){
        return n1 + n2; 
    };
    return 'Erro: Os valores devem ser do tipo Numero';
};

console.log(soma(1, 3)) //Resultado: 8

