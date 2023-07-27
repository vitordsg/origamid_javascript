// FUNCTION DECLARATION / EXPRESSION

// function somar(a,b) {
//     return a + b
// }

const somar = function(a,b) {
    return a + b
}




// HOISTING

//console.log(somar(4,6))
// console.log(dividir(2,2)) | ERRO


function somar2(a,b) {
    return a + b
}

const dividir = function(a,b) {
    return a / b
}



// ARROW FUNCTION

const somar3 = (a,b) => a + b
const quadrado = a => a * a

console.log(somar3(4,4))
console.log(quadrado(4))


// ESTRUTURA / PREFERÊNCIA

function dividir2(a,b) {
    return a / b
}

const dividir3 = (a,b) => a / b

dividir2(4,2)
dividir3(4,2)



// IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION  ||  IIFE - ARROW FUNCTION

const instrumento = 'Violão';

(() => {
    const instrumento = 'Guitarra'
    console.log(instrumento)
})()

console.log(instrumento)