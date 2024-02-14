const stringArray = ['A', 'C', 'D', 'W', 'L', 'B'];

console.log(stringArray.sort())

console.log(stringArray.reverse());

const numberArray = [10,20,30,40,50,10000,1,55,15];

console.log(numberArray.sort((a,b) => a - b));

const objArray = [
    {
        nome : 'B'
    },
    {
        nome : 'C'
    },
    {
        nome : 'A'
    },
    {
        nome : 'D'
    }
]

console.log(objArray.sort((a , b)=> a.nome.localeCompare(b.nome)));  //Ordenar por ordem alfabetica
console.log(objArray.sort((a , b)=> a.nome.localeCompare(b.nome)).reverse());  //Ordenar por ordem alfabetica
