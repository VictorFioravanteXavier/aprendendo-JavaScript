const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{nome:'Nike'},{nome:'Adidas'},],
    secret: 65415614561,
    n: 684654,
    link: {a: 'a', b: { c: 'c'}}
}

console.log(Tenis.hasOwnProperty('tamanho'))

if (Tenis.hasOwnProperty('tamanho') === true){
    console.log('Existe tenis')
}else{
    console.log('Não Existe tenis')
}


console.log('tamano' in Tenis)