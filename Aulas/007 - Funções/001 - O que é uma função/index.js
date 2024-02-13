//1 - Functions Declaration:
function isValidDeclaration() {
    const soma = 1 + 2;

    if (soma === 3) {
        return true;
    }
    return false;
}

//console.log(isValid())

//2 - Functions Exprecion
const isValidExprecion = function() {
    return false;
}

//console.log(isValid())

//3 - Arrow Functions

const isValidArrow = () => 2*2;

console.log(isValidArrow());
