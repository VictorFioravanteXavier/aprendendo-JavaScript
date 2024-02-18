'use strict';

const form = document.forms.namedItem('registration')

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    const name = form.name.value
    
    const newDiv = document.createElement('div')
    newDiv.innerText = name
    form.nextElementSibling.remove()
    form.after(newDiv)
})