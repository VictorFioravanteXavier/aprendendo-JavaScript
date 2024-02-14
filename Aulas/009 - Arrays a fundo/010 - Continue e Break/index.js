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
        nome : 'Ele 0',
        sobrenome: 'Eles',
    },
    {
        nome : 'Ele 1',
        sobrenome: 'Eles',
    },
    {
        nome : 'Ele 2',
        sobrenome: 'Eles',
    },
    {
        nome : 'Ele 3',
        sobrenome: 'Eles',
    },

];

for(let item of myArrayObj){
    if (item.nome === "Nois"){
        console.log(`Esse sou eu ${item.nome}`);  // O Eu tem o sobrenome Tu
        continue;
    };
    if (item.nome === 'Ele 1'){
        console.log('É ele');
        break;
    }; 
    console.log(item)
};