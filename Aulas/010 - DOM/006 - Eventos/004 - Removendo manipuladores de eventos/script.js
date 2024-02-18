'use strict';

const btn = document.querySelector('button');

const acioarAlert = () => {
    let validador = false
    alert(123)
    validador = true
    if (validador){
        btn.removeEventListener('click', acioarAlert)
    }
}

btn.addEventListener('click', acioarAlert)
