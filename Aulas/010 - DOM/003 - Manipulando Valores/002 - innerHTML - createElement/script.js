'use strict';


const div = document.querySelector('div');
console.log(1, div);

div.innerHTML = '<strong>Esse é meu texto alterado</strong>';
console.log(2, div);

const elemetUL = document.createElement('ul');

[1,2,3].forEach((element) => {
    const elementLI = document.createElement('li')
    elementLI.innerText = element
    elemetUL.appendChild(elementLI);
})

div.appendChild(elemetUL);
console.log(elemetUL);