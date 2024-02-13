let palavra = "aleatorio".toLowerCase();
console.log(palavra);

let letrasContadas = new Set();

for (let i = 0;  i < palavra.length; i++) {
    if (letrasContadas.has(palavra[i])) {
        continue; 
    }

    let cont = 0;
    for (let j = 0; j < palavra.length; j++) {
        if (palavra[i] === palavra[j]) {
            cont += 1;
        }
    }

    console.log(`${palavra[i]} = ${cont}`);
    letrasContadas.add(palavra[i]);
}