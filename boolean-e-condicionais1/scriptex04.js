// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idadeVitor = 24
var idadeSilvio = 49

if (idadeVitor > idadeSilvio) {
    console.log('É Maior')

} else if (idadeVitor === idadeSilvio) {
    console.log('É Igual')
}
else {
    console.log('É Menor')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3
console.log(expressao)


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // truthy
var idade = 28; // truthy
var possuiDoutorado = false; // falsy
var empregoFuturo; // falsy
var dinheiroNaConta = 0; // falsy
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
    console.log('Brasil tem mais habitantes')
}

else {
    console.log('Brasil tem menos habitantes')
}


// O que irá aparecer no console?
// FALSE Gato não é igual a gato, retornando o primeiro false mesmo que a segunda comparação seja verdadeira.
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}


// O que irá aparecer no console?
// CÃO está comparando se um dos dois e verdadeiro ou falso, o primeiro e falso e o segundo e verdadeiro, retornando o valor verdadeiro
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}