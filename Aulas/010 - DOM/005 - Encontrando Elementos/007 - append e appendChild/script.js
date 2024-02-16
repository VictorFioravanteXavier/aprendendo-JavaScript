'use strict';

const container = document.querySelector('.container');

container.append('Ola, mundo!')
container.append('<p>Ola, mundo!</p>')

const newDiv = document.createElement('div')
newDiv.innerText = 'Ola, mundo!'
container.appendChild(newDiv)