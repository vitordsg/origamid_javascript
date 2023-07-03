// FUNÇÃO
function areaQuadrado(lado) {
    return lado * lado
}
console.log(areaQuadrado(5))


// FUNÇÃO
function pi() {
    return 3.14
}
var total = 5 * pi()
console.log(total)


// FUNÇÃO PARÂMETROS E ARGUMENTOS
function imc(peso, altura) {
    var imc = peso / (altura * altura)
    return imc
}
console.log(imc(80, 1.7))

// FUNÇÃO PARÂMETROS E ARGUMENTOS // PARÊNTESES EXECUTA A FUNÇÃO
function corFavorita(cor) {
    if (cor === 'Azul') {
        return 'Eu gosto do céu'
    }

    else if (cor === 'Verde') {
        return 'Eu gosto de árvores'
    }

    else {
        return 'Eu não gosto de cores'
    }
}


// ARGUMENTOS PODEM SER FUNÇÕES
// Chamadas de Callback, geralmente são funções que ocorrem após algum evento
function mostraConsole() {
    console.log('Oi, testando')
}

addEventListener('click', mostraConsole)



// FUNÇÃO PODE OU NÃO RETORNAR UM VALOR
// Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.
function imc2(peso, altura) {
    var imc = peso / (altura ** 2)
    console.log(imc)
}
imc2(30,1.8) // undefined 

console.log(imc2(120, 1.8)) // retorna o IMC e Undefined




// FUNÇÃO COM VALORES RETORNADOS
// Uma função pode retornar qualquer tipo de dado e até outras funções.
function terceiraIdade(idade) {
    if (typeof idade !== 'number'){
        return 'Por favor, preencha com números'
    }
    else if(idade >= 60) {
        return true
    }
    else {
        return false
    }
}

console.log(terceiraIdade('oi'))



// ESCOPO
// Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
function faltaVisitar(paisesVisitados) {
    var totalPaises = 193
    return `Falta visitar ${totalPaises - paisesVisitados} países`
}


// ESCOPO LEXICO
// Funções conseguem acessar variáveis que foram criadas no contexto pai
var profissao = 'Designer'

function dados() {
    var nome = 'Vitor'
    var idade = 24

    function outrosDados() {
        var endereco = 'São Vicente'
        var idade = 30
        return `${nome}, ${idade}, ${endereco}, ${profissao}`
    }

    return outrosDados()
}

console.log(dados()) // retorna 'Vitor' , '30', São Vicente, Designer
//outrosDados() // retorna um erro


// HOISTING
// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

//imc(80, 1.80); // imc aparece no console

// function imc(peso, altura) {
 // const imc = peso / (altura ** 2);
 // console.log(imc);
// }
