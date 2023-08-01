// REGULAR EXPRESSION
const frase = 'Javascript'
// Procura: J
const regexp1 = /J/
const fraseNova = frase.replace(regexp1, 'B')
console.log(fraseNova)
// Bavascript





// LITERAL
// Procura: J seguido de a, v e a
const regexp2 = /Java/
console.log('JavaScript'.replace(regexp2, 'Type'))
// TypeScript




// FLAG:G
// Procura: Todo a
const regexp3 = /a/g
console.log('JavaScript'.replace(regexp3, 'i'))
// JiviScript




// FLAG:I
const regexp4 = /Pe/gi
console.log('Perdeu perdido'.replace(regexp4, 'Ba'))
// Bardeu Bardido




// CHARACTER CLASS
const regexp5 = /[ai]/gi
console.log('JavaScript'.replace(regexp5, 'u'))
// JuvuScrupt





// CHARACTER CLASS E ESPECIAIS
const regexp6 = /[-.]/g
console.log('111.222-333-44'.replace(regexp6, ''))
// 11122233344




