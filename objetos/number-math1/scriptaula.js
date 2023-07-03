// NUMBER //NUMBER.ISNAN() E NUMBER.ISINTEGER();
console.log(Number.isNaN(NaN))
console.log(Number.isNaN(2 + 5))

console.log(Number.isInteger(10))
console.log(Number.isInteger(23.6))




//NUMBER.PARSEFLOAT() E NUMBER.PARSEINT()
console.log(parseFloat('32434.463'))
console.log(parseFloat('100.27 reais'))
console.log(parseInt('100.27 reais'))
console.log(parseInt(23.49))




//N.TOFIXED(DECIMAIS)
const preco = 10.32323
console.log(+preco.toFixed())

const carro = 1000.455
console.log(+carro.toFixed(2))

const preco2 = 1499.49
console.log(+preco2.toFixed())



//N.TOSTRING(RADIX)
const preco3 = 2.99
console.log(preco3)
console.log(preco3.toString(10))



//N.TOLOCALESTRING(LANG, OPTIONS);
let valor = 48.49
valor = valor.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})
console.log(valor)



//MATH
Math.PI// 3.14159
Math.E// 2.718
Math.LN10// 2.303
console.log(Math.PI)



//MATH.ABS(), MATH.CEIL(), MATH.FLOOR() E MATH.ROUND()
console.log(Math.abs(-5.5))
console.log(Math.ceil(4.8334))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.8334))
console.log(Math.floor(4.3))
console.log(Math.round(4.8334))
console.log(Math.round(4.3))



//MATH.MAX(), MATH.MIN() E MATH.RANDOM();
Math.max(2,5,6,10,52,16,9,62) // 62
Math.min(2,5,6,10,52,16,9,62) // 2

const aleatorio = Math.floor(Math.random() * 10)
console.log(aleatorio)

const aleatorio2 = Math.floor(Math.random() * (70 - 30 + 1 ) + 30)
console.log(aleatorio2)