"use strict";
const h1 = document.querySelector("h1"); // tag html

const classP = document.querySelector('.paragrafo');
const  Strong = classP.querySelector('strong')

const classP_strong = document.querySelector(".paragrafo strong")

const idP = document.querySelector('#paragrafo') // chama o id retratado


console.log(h1);
console.log(classP);
console.log(Strong);
console.log(classP_strong)
console.log(idP);

let timer = 0;
const title = document.querySelector('title');
setInterval(() => {
    title.innerText = timer;
    timer++;
},1000);
