'use strict';

const menu = document.querySelector('.menu')

menu?.addEventListener('click', (event) => {
    const { target } = event;
    
    switch (target.getAttribute('class')) {
        case 'home':
            console.log('clicado em home')
            break;
        
        case 'sobre':
            console.log('clicado em sobre')
            break;
    
        case 'contato':
            console.log('clicado em contato')
            break;
    
        default:
            break;
    }
})