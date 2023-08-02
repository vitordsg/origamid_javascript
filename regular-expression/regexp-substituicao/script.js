// REFERÊNCIA DA SELEÇÃO
// Procura: Java
const regexp = /Java/g
console.log('PHP e Java são linguagens diferentes'.replace(regexp, '--$&Script'))
// PHP e --JavaScript são linguagens diferentes    $& será igual a Java




// GRUPO DE CAPTURA
// Procura: sequência alfanumérico, seguida de @, seguido de alfanumérico ou . 
const regexp1 = /(\w+)@[\w.]+/g
console.log('vitor@email.com.br'.replace(regexp1, '$1@gmail.com'))
// vitor@gmail.com





// MAIS DE UM GRUPO
// Procura: sequência alfanumérica, seguida de , seguido de espaço de sequência alfanumérica
const regexp2 = /(\w+),\s(\w+)/g
console.log('Santos, Vitor'.replace(regexp2, '$2 $1'))
// Vitor Santos





// MAIS DO QUE CAPTURA APENAS
// Procura: qualquer sequência de ta
const regexp3 = /(ta)+/gi
console.log('Tatata, tata, ta'.replace(regexp3, 'Pá'))
// Pá, Pá, Pá




// IGNORAR CAPTURA
// Procura: qualquer sequência de ta
const regexp4 = /(?:ta)+/gi
console.log('Tatata, tata, ta'.replace(regexp4, 'Pá'))
// Pa, pa, pa






// POSITIVE LOOKAHEAD
// Procura: dígitos em sequência, que possuirem px, sem selecionar o px
const regexp5 = /\d(?=px)/g
console.log('2em, 4px, 5%, 2px, 1px'.replace(regexp5, 'X'))
// 2em, Xpx, 5%, Xpx, Xpx






// NEGATIVE LOOKAHEAD
// Procura: dígitos que não possuirem px sem selecionar o restante
const regexp6 = /\d(?!px)/g
console.log('2em, 4px, 5%, 5px, 1px'.replace(regexp6, 'X'))
// Xem, 4px, X%, 5px, 1px






// POSITIVE LOOKBEHIND
// Procura: dígitos que possuirem R$ na frente dos mesmos
const regexp7 = /(?<=R\$)[\d]+/g
console.log('R$99, 100, 200, R$20'.replace(regexp7, 'X'))
// R$X, 100, 200, R$X