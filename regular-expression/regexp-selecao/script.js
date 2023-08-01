//REGULAR EXPRESSION
const frase = 'Javascript'
// Procura: J
const regexp1 = /J/
const fraseNova = frase.replace(regexp1, 'B')
console.log(fraseNova)
// Bavascript





//LITERAL
// Procura: J seguido de a, v e a
const regexp2 = /Java/
console.log('JavaScript'.replace(regexp2, 'Type'))
// TypeScript





//FLAG:G
// Procura: Todo a
const regexp3 = /a/g
console.log('JavaScript'.replace(regexp3, 'i'))
// JiviScript






//FLAG:I
// Procura: todo PE, Pe, pE e pe
const regexp4 = /Pe/gi
console.log('Perdeu perdido'.replace(regexp4, 'Ba'))
// Bardeu Bardido






//CHARACTER CLASS
// Procura: Todo a, A, i, I
const regexp5 = /[ai]/gi
console.log('JavaScript'.replace(regexp5, 'u'))
// JuvuScrupt






//CHARACTER CLASS E ESPECIAIS
// Procura: - ou .
const regexp6 = /[-.]/g
console.log('111.222-333-44'.replace(regexp6, ''))
// 11122233344






//UM OU OUTRO
// Porcura: B, seguido de r, a
// seguido de s ou z, seguido de i, l
const regexp7 = /Bra[sz]il/g
console.log('Brasil é com z: Brazil'.replace(regexp7, 'Prazer'))
// Prazer é com z: Prazer






//DE A Á Z
// Busca por itens de a á z
const regexp8 = /[a-z]/g
console.log('JavaScript é a linguagem.'.replace(regexp8, '0'))
// J000S00000 é 0 000000000.


// Busca por itens de a á z  e   A á Z
const regexp9 = /[a-zA-Z]/g
console.log('JavaScript é a linguagem.'.replace(regexp9, '1'))
// 1111111111 é 1 111111111.


// Busca por números de 0 á 9
const regexpNumero = /[0-9]/g
console.log('123.333.333-33'.replace(regexpNumero, 'X'))
// XXX.XXX.XXX-XX