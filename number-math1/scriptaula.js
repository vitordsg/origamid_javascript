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



//STR.REPEAT(N)
const frase2 = 'Ta'
console.log(frase2.repeat(10))




// STR.REPLACE(REGEXP|SUBSTR, NEWSTR|FUNCTION)
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias'

listaItens = listaItens.replace(/[ ]+/g, ', ')
console.log(listaItens)

let preco2 = 'R$ 1200,43'
preco2 = preco2.replace(',', '.')
console.log(preco2)




// STR.SPLIT(PADRAO)
const arrayLista = listaItens.split(', ')
console.log(arrayLista)

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>'
const htmlArray = htmlText.split('div')
const novoHtml = htmlArray.join('section')

console.log(htmlText)
console.log(htmlArray)
console.log(novoHtml)

const frutasArray = ['Banana', 'Melancia', 'Laranja']






// STR.TOLOWERCASE() E STR.TOUPPERCASE()
const sexo1 = 'Feminino'
const sexo2 = 'feminino'
const sexo3 = 'FEMININO'

console.log(sexo1.toLocaleLowerCase() === 'feminino')
console.log(sexo3.toLocaleUpperCase() === 'FEMININO')





// STR.TRIM(), STR.TRIMSTART(), STR.TRIMEND()
const valor = '  R$ 23.00  '
console.log(valor.trim()) // 'R$ 23.00'
console.log(valor.trimStart()) // 'R$ 23.00   '
console.log(valor.trimEnd()) // '  R$ 23.00'