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

myArrayObj.forEach((item,index )=> {
    if (item.nome === 'Nois'){
        return console.log(`Eu sou ${item.nome}`);
    };
    console.log(item, index)
});