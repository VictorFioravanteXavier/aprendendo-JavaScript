function Name(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => {
        return `${this.nome} ${this.sobrenome}`
    }
}

const dener = new Name('Dener', "Troquatte");
const victor = new Name('Victor')

console.log(dener.nomeCompleto())
console.log(victor.nome)


function Calculadora(){
    this.soma = (v1, v2) => {
        return `${v1+v2}`
    };
    this.subitracao = (v1, v2) => {
        return `${v1 - v2}`;
    };

}

const calculo1 = new Calculadora();

console.log(calculo1.soma(10, 10));
console.log(calculo1.subitracao(10, 10))