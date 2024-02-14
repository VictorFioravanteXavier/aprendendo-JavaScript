let tenis = {
    tamanho: 45,
    estoque: true,
};

let link = { link: { a:'a', b: { c:'c' }, }, } 

function cloneObj(obj) {
    return JSON.parse(JSON.stringify(obj));;
}


let clone1 = cloneObj(tenis);
clone1.estoque = false;

console.log(1, clone1);
console.log(2, tenis);

let mesclar1 = Object.assign(
    cloneObj(tenis),
    cloneObj(link)
)

let mesclar2 = {
    ...cloneObj(tenis), 
    ...cloneObj(link)
};

clone1.estoque = false;
mesclar1.link.a = 'ABC';

console.log(3, clone1);
console.log(4, tenis);
console.log(5, mesclar1);
console.log(6, mesclar2);
