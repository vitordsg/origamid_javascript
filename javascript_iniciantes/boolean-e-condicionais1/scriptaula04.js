var possuiGraduacao = false
var possuiDoutorado = true

// IF ELSE
if(possuiGraduacao) {
    console.log('É verdadeiro')
}
else if (possuiDoutorado) {
    console.log('Possui Doutorado')
}
 
else {
    console.log('Possui nada')
}

// IF ELSE COM OPERADOR LOGICO DE NEGAÇÃO
var nome = '10kg' / 10
if(nome) {
    console.log(nome)
} 
else {
    console.log('Nome não existe')
}

if (!possuiGraduacao) {
    console.log('Não possui Graduação')
}

// OPERADOR LOGICO DE NEGAÇÃO
var x = 10
console.log(x !== 11)


// OPERADOR LOGICO && 'E'
if((5 - 5) && (5 + 5)) {
    console.log('Verdadeiro')
} 
else {
    console.log('Falso')
}

// OPERADOR LOGICO && 'E'
var condicional = (5 - 10) && (5 + 5)
if(condicional) {
    console.log('Verdadeiro', condicional)
} 
else {
    console.log('Falso')
}


// OPERADOR LOGICO || 'OU'
var condicional2 = (5 - 5) || (5 + 5) || (10 - 2)
console.log(condicional2)



// SWITCH
var corFavorita = 'Verde'

switch (corFavorita) {
    case 'Azul':
        console.log('Olha para o céu')
        break

    case 'Amarelo':
        console.log('Olhe para o Sol')
        break

    case 'Verde':
        console.log('Olhe para floresta')
        break

        default:
            console.log('Feche os olhos')
}


// TRUTHY E FALSY
// Falsy

// if(false)
// if(0) // ou -0
// if(NaN)
// if(null)
// if(undefined)
// if('') // ou "" ou ``


// Truthy

// if(true)
// if(1)
// if(' ')
// if('andre')
// if(-5)
// if({})


// OPERADOR LÓGICO DE NEGAÇÃO !
// Truthy

//if (!true)    // false
//if (!1)      // false
//if (!'')    // true
//if (!undefined) // true
//if (!!' ')    // true
//if (!!'')    // false


// OPERADORES DE COMPARAÇÃO
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

// OPERADORES DE COMPARAÇÃO
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true


// OPERADORES LÓGICOS && 
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

// OPERADORES LÓGICOS ||
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true
