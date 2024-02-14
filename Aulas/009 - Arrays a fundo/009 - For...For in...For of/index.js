const myArray = [1,2,3,4,5,6];
const myArrayObj = [
    {
        nome : 'Eu',
        sobrenome: 'Tu',
    },
    {
        nome : 'Nois',
        sobrenome: 'Vois',
    },
    {
        nome : 'Ele',
        sobrenome: 'Eles',
    },
];



// for ([inicialização]; [condição]; [expressão final])
/**for (let i = 0; i < myArrayObj.length; i++){
    console.log(myArrayObj[i].nome, myArrayObj[i].sobrenome);
};
**/

/**for(let item of myArrayObj){
    console.log(item.nome, item.sobrenome)
};
**/

const obj = {nome: 'Victor', sobrenome:'Eu'};

for (let i in obj){
    console.log(i)
}