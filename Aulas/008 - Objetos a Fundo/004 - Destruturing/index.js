const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [
        {
            nome:'Nike'
        },
        {
            nome:'Adidas'
        },
    ],
    secret: 65415614561,
    n: 684654,
    link: {a: 'a', b: { c: 'c'}}
}

const {tamanho, estoque, marcas = 'Não posssui marca alguma!'} = Tenis;

const { secret : randoNumber, n : avaliacoes} = Tenis;

console.log(randoNumber);

const {link:{a,b:{c}},} = Tenis;

console.log(c);
