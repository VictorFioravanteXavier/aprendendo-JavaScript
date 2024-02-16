'use strict';

const container = document.querySelector('.container');

container.after('Ola mundo')
container.after('<p>Ola mundo</p>')

container.before('Ola mundo')
container.before('<p>Ola mundo</p>')

const newP = document.createElement('p');
const newP2 = document.createElement('p');
newP.innerText = 'Ola mundo'
container.after(newP)
container.before(newP2)

