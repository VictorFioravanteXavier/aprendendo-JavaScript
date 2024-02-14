let tenis = {
    tamanho: 45,
    estoque: true,
};

let link = { link: { a:'a', b: { c:'c' }, }, } 

let clone1 = tenis;

console.log(1, clone1);
console.log(2, tenis);

let mesclar1 = Object.assign(tenis,link)
let mesclar2 = {...tenis, ...link};

clone1.estoque = false;
mesclar1.link.a = 'ABC';

console.log(3, clone1);
console.log(4, tenis);
console.log(5, mesclar1);
console.log(6, mesclar2);
