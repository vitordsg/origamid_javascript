// OPERADORES DE ATRIBUIÇÃO
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

var numero = 20
var numero2 = 10
numero += numero2 // numero = numero + numero2 = 30
console.log(numero)



// OPERADOR TERNÁRIO
// Abreviação de condicionais com if e else
var idade = 20
var nãoPossuiDiabete = false

var podeBeber
podeBeber = (idade >= 18 && nãoPossuiDiabete) ? 'Pode beber' : 'Não pode beber'
console.log(podeBeber)


// IF ABREVIADO
var possuFaculdade = true
if(possuFaculdade)
    console.log('Possui faculdade')
else
    console.log('Não possui')


