// ARRAYS //
const instrumentos = ['Guitarra', 'Baixo', 'Violão']
const precos = [49,99,69,89]
console.log(instrumentos)
console.log(precos)

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) {console.log(nome)}]



// CONSTRUÇÃO DE ARRAYS
const carros = new Array('Ford', 'Fiat', 'Honda')

carros[2] = 'Ferrari'
carros[3] = 'Kia'
carros[15] = 'Porsche'

console.log(carros.length)



// ARRAY.FROM()
const li = document.querySelectorAll('li')
const arrayLi = Array.from(li)
const obj = {
    0: 'Vitor',
    1: 'Santos',
    2: 'Teste',
    length: 3,
}
const objArray = Array.from(obj)

console.log(li)
console.log(arrayLi)



// ARRAY.ISARRAY()
console.log(Array.isArray(li))
console.log(Array.isArray(arrayLi))




// ARRAY.OF(), ARRAY() E NEW ARRAY()
console.log(Array.of(10))
console.log(Array.of(1,2,3,4))
console.log(new Array())
console.log(Array(5))
console.log(Array(1,2,3,4))



// PROPRIEDADES E MÉTODOS DO PROTOTYPE
const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']]

frutas.length // 3
frutas[0].length // 6
frutas[1].length // 4
frutas[2].length // 2

console.log(frutas[2][0].length)




// MÉTODOS MODIFICADORES [].SORT()
const instrumentos2 = ['Guitarra', 'Baixo', 'Violão']
instrumentos2.sort()

const idades = [32,21,33,43,1,12,8]
idades.sort()

console.log(instrumentos2)
console.log(idades)




// [].UNSHIFT() E [].PUSH()
const carros2 = ['Ford', 'Fiat', 'VW']
carros2.unshift('Kia', 'Ferrari')
const novaArray = carros2.push('Honda', 'Jeep')

console.log(carros2)
console.log(novaArray)



// [].SHIFT() E [].POP()
const primeiroCarro = carros2.shift()
console.log(primeiroCarro)

const ultimoCarro = carros2.pop()
console.log(ultimoCarro)



// [].REVERSE()
const timeFutebol = ['Santos', 'São Paulo', 'Corinthians', 'Palmeiras', 'Grêmio', 'Flamengo']
console.log(timeFutebol)
timeFutebol.reverse()
console.log(timeFutebol)




// [].SPLICE()
const dragonBall =  ['Goku', 'Vegeta', 'Brolly', 'Kuririn']
dragonBall.splice(1,0, 'Gohan')
console.log(dragonBall)

dragonBall.splice(3, 2, 'Trunks')
console.log(dragonBall)




// [].COPYWITHIN()
console.log(['item1', 'item2', 'item3', 'item4', 'item5'].copyWithin(2,0,2))
console.log(['item1', 'item2', 'item3', 'item4', 'item5'].copyWithin(-1))




// [].FILL()
console.log(['item1', 'item2', 'item3', 'item4', 'item5'].fill('Maçã', 0 , 2))




// MÉTODOS DE ACESSO [].CONCAT()
const transportes1 = ['Barco', 'Avião']
const transportes2 = ['Carro', 'Helicoptero']
const Transportes = transportes1.concat(transportes2)

console.log(Transportes)

const maisTransportes = [].concat(transportes1, transportes2, 'Onibus', 'Van')
console.log(maisTransportes)




// [].INCLUDES(), [].INDEXOF() E [].LASTINDEXOF()
const linguagens = ['html', 'css', 'js', 'php', 'python', 'js']
console.log(linguagens.includes('css'))
console.log(linguagens.includes('rbuy'))
console.log(linguagens.indexOf('html'))
console.log(linguagens.indexOf('python'))
console.log(linguagens.lastIndexOf('js'))




//[].JOIN()
let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2')
htmlString = htmlString.join('h5')

console.log(htmlString)




// [].SLICE()
const linguagens2 = ['html', 'css', 'js', 'php', 'python', 'js']
console.log(linguagens2.slice(3))
console.log(linguagens2.slice(1,4))

const cloneLinguagens2 = linguagens.slice()
linguagens2.pop()

console.log(linguagens2)
console.log(cloneLinguagens2)