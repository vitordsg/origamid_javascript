// NUMEROS
var idade = 2.5
var gols = 1000
var pi = 3.14
var exp = 2e10
console.log(idade, gols, pi, exp)


// OPERADORES ARITMETICOS
var soma = 100 + 50                // 150
var subtracao = 100 - 50            // 50 
var multiplicacao = 100 * 2         // 200
var divisao = 100 / 2             // 50
var expoente = 2 ** 4               // 16
var modulo = 14 % 5                 // 4
console.log(soma, divisao, subtracao, multiplicacao, expoente, modulo)


//OPERADORES ARITMÉTICOS (STRINGS)
var soma2 = '100' + 50  // 10050
var subtracao2 = '100' - 50 // 50
var multiplicacao2 = '100' * '2' // 200
var divisao2 = 'Comprei 10' / 2 // NaN (Not a Number)
console.log(soma2, subtracao2, multiplicacao2, divisao2)


// NAN = NOT A NUMBER
var numero1 = 80
var unidade1 = 'kg'
var peso1 = numero1 + unidade1 // 80kg
var pesoPorDois1 = peso1 / 2 // Nan (Not a Number)
console.log(numero1, unidade1, peso1, pesoPorDois1)


// A ORDEM IMPORTA
// Começa por multiplicação e divisão, depois por soma e subtração.
var total1 = 20 + 5 * 2 // 30
var total2 = (20 + 5) * 2 // 50
var total3 = 20 / 2 * 5 // 50
var total4 = 10 + 10 * 2 + 20 / 2 // 40
console.log(total1, total2, total3, total4)


// OPERADORES ARITMÉTICOS UNÁRIOS
var incremento = 5
console.log(incremento++)  // 6
console.log(incremento)     // 6

var incremento2 = 5
console.log(incremento2--) // 4
console.log(incremento2) // 4



// OPERADORES ARITMÉTICOS UNÁRIOS
// O + e - tenta transformar o valor seguinte em número
var frase = 'Isso e um teste'
+frase // NaN
-frase // NaN

var idade2 = '24'
//+idade2 // 24 (Numero)
//-idade2 // -24 (Numero)
console.log(+idade2 + 5) // 29

var possuiFaculdade = true 
console.log(+possuiFaculdade) // 1


