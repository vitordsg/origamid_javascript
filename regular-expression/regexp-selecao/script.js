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






//NEGAR
// Procura: tudo que não estiver entre a e z
const regexp10 = /[^a-z]/g
console.log('Brasil é com z: Brazil'.replace(regexp10, ' '))
//  rasil   com z   razil





//PONTO
// Procura: todas os caracteres menos quebra de linha
const regexp11 = /./g;
console.log('JavaScript é a linguagem.'.replace(regexp10, '0'))
// 0ava0cript000a0linguagem0






//ESCAPAR ESPECIAIS
// Procura: todos os pontos
const regexp12 = /\./g
const regexpAlternativa = /[.]/g
console.log('999.222.222.11'.replace(regexp12, '-'))
// 999-222-222-11






//WORD
// Procura: todos os alfanuméricos
const regexp13 = /\w/g
console.log('Guarda-chuva R$ 23,00'.replace(regexp13, '-'))
// ------------ -$ --,--





//NOT WORD
// Procura: o que não for caracter alfanuméricos
const regexp14 = /\W/g
console.log('Guarda-chuva R$ 23,00.'.replace(regexp14, '-'))
// Guarda-chuva-R--23-00-





//DIGIT
// Procura: todos os dígitos
const regexp15 = /\d/g
console.log('+55 (21) 2222-2222'.replace(regexp15, 'X'))
// +XX (XX) XXXX-XXXX





//NOT DIGIT
// Procura: o que não for dígito
const regexp16 = /\D/g
console.log('+55 (21) 2222-   2222'.replace(regexp16, ''))
// 552122222222





//WHITESPACE
// Procura: espaços em branco
const regexp17 = /\s/g
console.log('+55 (21) 2222-   2222   '.replace(regexp17, ''))
// +55(21)2222-2222







//NOT WHITESPACE
// Procura: o que não for espaço em branco
const regexp18 = /\S/g
console.log('+55 (21) 2222-   2222  '.replace(regexp18, 'X'))
// XXX XXXX XXXXX   XXXX  






//QUANTIFICADOR
// Procura: 4 a's seguidos
const regexp19 = /aaaa/g
const regexpAlt = /a{4}/g // seleção completa

console.log('Vaaaai ali por favor.'.replace(regexpAlt, 'a'))
// Vai ali por favor.







//QUANTIFICADOR MIN E MAX
// Procura: dígitos seguidos de 2 à 3
const regexp20 = /\d{2,3}/g
console.log('222.333.222.42'.replace(regexp20, 'X'))
// X.X.X.X

// Procura: letras seguidos com 1 caracter ou mais
const regexpLetras1 = /\w{1,}/g
console.log('a melhor linguagem é JavaScript'.replace(regexpLetras1, 'X'))
// X X X é X






//MAIS+
// Procura: dígitos em ocorrência de um ou mais
const regexp21 = /\d+/g
console.log('222.333.222.42'.replace(regexp21, 'X'))
// X.X.X.X

// Procura: Começa com d, seguido por uma ou mais letras.
const regexpLetras2 = /d\w+/g
console.log('Dígitos, dados, desenhos, Dito, d'.replace(regexpLetras2, 'X'))
// Dígitos, X, X, Dito, d






//ASTERICO*
// Procura: Começa com d, seguido por zero ou mais letras
const regexp22 = /d\w*/g
console.log('Dígitos, dados, desenhos, Dito, d'.replace(regexp22, 'X'))
// Dígitos, X, X, Dito, X




//OPCIONAL ?
// Procura: Por regex com p opcional
const regexp23 = /regexp?/g
console.log('Qual é o certo, regexp ou regex?'.replace(regexp23, 'Regular Expression'))
// Qual é o certo, Regular Expression ou Regular Expression?





//ALTERNADO |
// Procura: java ou php (case insensitive)
const regexp24 = /java|php/gi
console.log('PHP e Java são linguagens diferentes'.replace(regexp24, 'X'))
// X e X são linguagens diferentes





//WORD BOUNDARY
// Procura: java (case insesitive)
const regexp25 = /java/gi
console.log('Java não é JavaScript'.replace(regexp25, 'X'))
// X não é XScript


// Procura: java (case insesitive)
const regexpBoundary = /\bjava\b/gi
console.log('Java não é JavaScript.'.replace(regexpBoundary, 'X'))
// X não é XScript


// Procura: Dígitos em sequência, que estejam isolados
const regexpDigito = /\b\d+\b/gi
console.log('O Restaurante25 na Rua 3, custa R$ 32,00'.replace(regexpDigito, 'X'))
// O Restaurante25 na Rua X, custa R$ X,X


console.log('11_22 33-44 55é66 77e88'.replace(regexpDigito, 'X'))
// 11_22 X-X XéX 77e88






//NOT WORD BOUNDARY  É o contrário do \b
const regexpDigito2 = /\B\d+\B/gi
console.log('11_22 33-44 55é66 77e88'.replace(regexpDigito2, 'X'))
// 1X_X2 33-44 55é66 7XeX8







//ANCHOR BEGINNING
// Procura: sequência de alfanuméricos no início da linha
const regexp26 = /^\w+/g
console.log(`vitor@origamid.com
contato@origamid.com`.replace(regexp26, 'X'))
// X@origamid.com
// contato@origamid.com






//ANCHOR END
// Procura: sequência de alfanuméricos no final da linha
const regexp27 = /\w+$/g
console.log(`vitor@origamid.com
contato@origamid.com`.replace(regexp27, 'X'))
// vitor@origamid.com
// contato@origamid.X







//FLAG:M
// Procura: sequência de alfanuméricos no final da linha
const regexp28 = /\w+$/gm
console.log(`vitor@origamid.com
contato@origamid.com`.replace(regexp28, 'X'))
// vitor@origamid.X
// contato@origamid.X

// Procura: sequência de alfanuméricos no início da linha
const regexp29 = /^\w+/gm
console.log(`vitor@origamid.com
contato@origamid.com`.replace(regexp29, 'X'))
// X@origamid.com
// X@origamid.com





//LINE FEED\n
const regexp30 = /\n/g
console.log(`vitor@origamid.com\ncontato@origamid.com`.replace(regexp30, '---'))
// vitor@origamid.com---contato@origamid.com

console.log(`vitor@origamid.com
contato@origamid.com`.replace(regexp30, 'X'))
// vitor@origamid.comXcontato@origamid.com




//UNICODE\u
const regexp31 = /\u0040|\u00A9/g
console.log('vitor@origamid.com  ©'.replace(regexp31, '---'))
// vitor---origamid.com  ---