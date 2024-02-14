let arr = [
    {nome: 'Eu', tel: '(99) 9999-9999'},
    {nome: 'Tu', tel: '(99) 9999-9999'},
    {nome: 'Nois', tel: '(99) 9999-9999'},
    {nome: 'Voz', tel: '(99) 9999-9999'},
    {nome: 'Elez', tel: '(99) 9999-9999'},
]

console.table(arr)

//const newarr = arr.slice(0,3);
//console.table(newarr)

//const newarr2 = arr.slice(2,4);
//console.table(newarr2)


arr.splice(3,1);
console.table(arr)