'use strict';

const container = document.querySelector('.container')
console.log(container.children) // HTML COLLECTION
console.log(container.childNodes) // NodeList

const children = Array.from(container.childNodes);

console.log(children);

children.forEach((res) => {
    console.log(res)
})