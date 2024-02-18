'use strict';

const btn = document.querySelector('button');
const body = document.querySelector('body');

btn.addEventListener('mousedown', (event) => {
    body.style.backgroundColor = 'red';
});

btn.addEventListener('mouseleave', (event) => {
    body.style.backgroundColor = '#FFF';
});