// Crie uma função para verificar se um valor é Truthy
function verificarValor(valor) {
    if(valor) {
        return true
    }

    else {
        return false
    }
}
console.log(verificarValor(''))

//function isTruthy(valor2){
    //return !!valor2
//}



// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetoQuadrado(lado) {
    perimetro = lado * 4
    return perimetro
}
console.log(perimetoQuadrado(2))



// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    nome = 'Vitor dos '
    sobrenome = 'Santos Gonçalves'
    return ` ${nome}${sobrenome}`
}

console.log(nomeCompleto())

// function nomeCompleto(nome, sobrenome) {
    // return ` ${nome}${sobrenome}`
// }



// Crie uma função que verifica se um número é par
function verificarImparPar(numero) {
    var resultado = numero % 2
    if (resultado === 0) {
       return console.log('Par')
    }
    else {
       return console.log('Impar')
    }
}

verificarImparPar()



// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDados(dado) {
    return typeof dado
}

console.log(tipoDeDados())




// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
function meuNome() {
   return console.log('Vitor dos Santos Gonçalves')
}

addEventListener('scroll', meuNome)




// Corrija o erro abaixo
var totalPaises = 193;

 function precisoVisitar(paisesVisitados) {
     
     return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
   }
   function jaVisitei(paisesVisitados) {
    
     return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
   }

   console.log(precisoVisitar(20))
   console.log(jaVisitei(20))
  