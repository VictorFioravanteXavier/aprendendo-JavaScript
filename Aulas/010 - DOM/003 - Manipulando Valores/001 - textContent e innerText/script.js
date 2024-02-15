'use strict';

const p = document.querySelector('p');

console.log(p.textContent);
console.log(p.innerText);

p.textContent = 'Hello World!';
p.innerText = 'Word Hello';