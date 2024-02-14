const pedidos = [
    {
        id : 145,
        nome : 'Eu',
        alimento : 'Sandubão de Bacon',
        bebida : 'Suco de Limão',
        preco : 100,
    },
    {
        id : 152,
        nome : 'Nois',
        alimento : 'Sandubão Vegano',
        bebida : 'Suco de Laranja',
        preco : 59,
    },
    {
        id : 29,
        nome : 'Voz',
        alimento : 'Coxinha',
        bebida : 'Suco de Uva',
        preco : 33,
    },
    {
        id : 33,
        nome : 'Ele',
        alimento : 'Sandubão de Picanha',
        bebida : 'Refrigerante',
        preco : 79,
    },
    {
        id : 55,
        nome : 'Eles',
        alimento : 'Pizza',
        bebida : 'Refrigerante',
        preco : 47,
    },
];

const balancete = pedidos.reduce((total, element) => {
    return total + element.preco;
}, 0)

console.log(balancete)