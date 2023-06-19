// // STRING
// const comida = 'Pizza'
// const agua = new String('Agua')




// // STR.LENGTH
// console.log(agua.length)

//  const frase = 'A Melhor comida'

//  console.log(frase[frase.length - 1])





//  // STR.CHARAT(N)
//  const linguagem = 'Javascript'

//  console.log(linguagem.charAt(0)) // J
//  console.log(linguagem.charAt(3)) // A
//  console.log(linguagem.charAt(linguagem.length - 1))  // t




// STR.CONCAT(STR2, STR3, ...)
const frase = 'A melhor linguagem é '
const linguagem = 'Javascript'

const fraseFinal = frase.concat(linguagem, "!", " Nice")




// STR.INCLUDES(SEARCH, POSITION)
const fruta = "Banana"
const listaFrutas = 'Melancia, Banana, Laranja'

console.log(listaFrutas.includes(fruta, 14))





// STR.ENDSWITH(SEARCH) E STR.STARTSWITH(SEARCH)
console.log(fruta.startsWith('Ba'))
console.log(fruta.endsWith('na'))




// STR.SLICE(START, END)
const transacao1 = 'Depósito de cliente'
const transacao2 = 'Depósito do fornecedor'
const transacao3 = 'Taxa de camisas'

console.log(transacao1.slice(0,3))
console.log(transacao2.slice(-5))
console.log(transacao3.slice(0, -1))




// STR.SUBSTRING(START, END)
const linguagem2 = 'Javascript'

console.log(linguagem2.substring(4))
console.log(linguagem2.substring(3))



// STR.INDEXOF(SEARCH) E STR.LASTINDEXOF(SEARCH)
const instrumento = 'Guitarra'

console.log(instrumento.indexOf('t'))
console.log(instrumento.lastIndexOf('a'))




// STR.PADSTART(N, STR) E STR.PADEND(N, STR)
const preco = 'R$99,00'

console.log(preco.padStart(20,'.'))
console.log(preco.padEnd(20,'.'))

const listaPreco = ['R$ 99', 'R$ 199', 'R$ 12000']

listaPreco.forEach((item) => {
    console.log(item.padStart(10,'-'))
})