const pedidos = [
    {
        id : 145,
        nome : 'Eu',
        alimento : 'Sandubão de Bacon',
        bebida : 'Suco de Limão',
    },
    {
        id : 152,
        nome : 'Nois',
        alimento : 'Sandubão Vegano',
        bebida : 'Suco de Laranja',
    },
    {
        id : 29,
        nome : 'Voz',
        alimento : 'Coxinha',
        bebida : 'Suco de Uva',
    },
    {
        id : 33,
        nome : 'Ele',
        alimento : 'Sandubão de Picanha',
        bebida : 'Refrigerante',
    },
    {
        id : 55,
        nome : 'Eles',
        alimento : 'Pizza',
        bebida : 'Refrigerante',
    },
];


const findId = pedidos.find(elemto => {
    return elemto.id === 29;
})

console.log(findId)