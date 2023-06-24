//[].FOREACH()
// const carros = ['Ford', 'Fiat', 'Honda']

// carros.forEach((item, index, array) => {
//     //array[index] = 'Teste'
//     console.log(item.toUpperCase(), index, array)
// })

// console.log(carros)




//ARROW FUNCTION
const li = document.querySelectorAll('li')

li.forEach((item, index) => {item.classList.add('ativo' + index)})





//[].MAP()
// const carros2 = ['Subaru', 'Ferrari', 'Lexus']

// const novaArray = carros2.map((item, index, array) => {
//     return item.toUpperCase()
// })

// console.log(novaArray)
// console.log(carros2)

// const numeros = [2,4,6,8,10]
// console.log(numeros)

// const numeros2 = numeros.map(n => n * 2)
// console.log(numeros2)






// [].MAP() COM OBJETOS
// const aulas = [
//     {
//         nome: 'HTML 1',
//         min: 15
//     },

//     {
//         nome: 'HTML 2',
//         min: 10
//     },

//     {
//         nome: 'CSS 1',
//         min: 20
//     },

//     {
//         nome: 'JS 1',
//         min: 25
//     },
// ]

// const tempoAulas = aulas.map(item => item.min)

// const nomeAulas = aula => aula.nome

// const nomeAulas2 = function(aula) {
//     return aula.nome
// }

// const arrayNomeAulas = aulas.map(nomeAulas)


// console.log(arrayNomeAulas)
// console.log(tempoAulas)




//[].REDUCE()
// const aulas = [10, 25, 30]

// const reduceAulas = aulas.reduce((acumulador, item) => {
//     return acumulador + item
// }, 0)

// const reduceAulas2 = aulas.reduce((acc, cur) => acc + cur, 100)

// console.log(reduceAulas)
// console.log(reduceAulas2)





// MAIOR VALOR COM [].REDUCE()
const numeros = [10, 4, 22, 14, 16, 30, 32]

const maiorNumero = numeros.reduce((anterior, atual) => anterior > atual ? anterior : atual, 0)

//console.log(maiorNumero)




// PODEMOS RETORNAR OUTROS VALORES
const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },

    {
        nome: 'HTML 2',
        min: 10
    },

    {
        nome: 'CSS 1',
        min: 20
    },

    {
        nome: 'JS 1',
        min: 25
    },
]

const listaAulas = aulas.reduce((acumulador, aula, index) => {
    acumulador[index] = aula.nome
    return acumulador
}, {})





// [].REDUCERIGHT()
const frutas = ['Banana', 'Pêra', 'Uva','']

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta)
//console.log(frutasRight)

const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta)
//console.log(frutasLeft)





//[].SOME()
const temUva = frutas.some((item) => {
    return item === 'Uva'
})

//console.log(temUva)



function maiorQue30(numero) {
    return numero > 30
}

const numeros2 = [10, 4, 22, 14, 16, 30, 32]

const maiorTem = numeros2.some(maiorQue30)
//console.log(maiorTem)




//[].EVERY()
const every = frutas.every((fruta) => {
    return fruta
})
console.log(every)

const maiorQue3 = numeros2.every(())