'use strict';


const ul = document.querySelector('ul');
const fragment = document.createDocumentFragment();

const lanches = ["Lanche 1", "Lanche 2", "Lanche 3", "Lanche 4"];

lanches.forEach(elemenet =>{
    const li = document.createElement('li');
    li.textContent = elemenet
    fragment.append(li)
})

console.log(fragment);
ul.append(fragment);