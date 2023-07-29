// ITERABLE
const frutas = ['Banana', 'Morango', 'Uva']
const frase = 'Isso é Javascript'

// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(({headers}) => console.log(headers))



// FOR...OF
for(const fruta of frutas) {
    console.log(fruta)
}

// for(const char of frase) {
//     console.log(char)
// }





// SPREAD E FOR...OF
const buttons = document.querySelectorAll('button')

for(const btn of buttons) {
    btn.style.color = 'blue'
}

console.log(...buttons)







// APENAS ITERÁVEIS
const carro = {
    marca: 'Honda',
    ano: 2019
}

Object.defineProperties(carro, {
    rodas: {
        value: 4,
        enumerable: true
    }
})

// ERRO, NÃO E ITERÁVEL
// for(const chave of carro) {
//     console.log(chave)
// }


// FOR...IN
for(const key in carro) {
    console.log(key, carro[key])
}




// ARRAYS E FOR...IN
for(const f in frutas) {
    console.log(frutas[f])
}





// CHAVE E VALOR
const btnUnico = document.querySelector('button')
const btnStyles = getComputedStyle(btnUnico)

for(const style in btnStyles) {
    console.log(`${style}: ${btnStyles[style]}`)
}






// DO/WHILE

let i = 0
do {
    console.log(i++)
} while(i <= 5)