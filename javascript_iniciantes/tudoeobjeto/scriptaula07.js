// TUDO É OBJETO
// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.
var nome = 'Vitor'
nome.length // 5
nome.charAt(1) // 'i'
nome.replace('or', 'orz') // 'Vitorz'
nome // 'Vitor'
var nomeMinusculo = nome.toLowerCase()



// NUMEROS
var altura = 1.8

altura.toString() // '1.8'
altura.toFixed() // '2'



// FUNÇÕES
function areaQuadrado(lado) {
    return lado * lado
}

areaQuadrado.toString()
// "function AreaQuadrado(lado) {
//    return lado * lado
// }"
areaQuadrado.length // 1


// ELEMENTOS DOM
var botao = document.querySelector('.btn')
botao.classList.add('azul')
botao.innerText // 'Clique'
botao.addEventListener('click', function() {
    console.log('Clicou')
})