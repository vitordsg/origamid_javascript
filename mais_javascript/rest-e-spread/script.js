// PARÂMETROS   /  ARGUMENTS  / PARÂMETRO REST
function perimetroForma(lado, totalLados,...listaArgumentos) {
    //console.log(listaArgumentos)
    //console.log(arguments)
    return lado * totalLados
}

perimetroForma(10, 4, 30, 40, 'Oi', 'Teste') // 40




// UNICO REST
function anunciarGanhadores(premio,...ganhadores) {
    ganhadores.forEach(ganhador => {
        console.log(ganhador + ' ganhou um ' + premio)
    })
}

const ganhadores = ['Maria', 'Bia', 'Ana', 'Neto','Oliver']

anunciarGanhadores('Carro',...ganhadores)





// OPERADOR SPREAD
const frutas = ['Banana', 'Uva', 'Morango']
const legumens = ['Cenoura', 'Batata']

const comidas = [...frutas, 'Pizza', 'Chocolate', ...legumens]
console.log(comidas)





// SPREAD ARGUMENT
const numeroMaximo = Math.max(4,5,20,10,30,2,33,5)
console.log(numeroMaximo)

const listaNumeros = [1,3,5,6,7,8,10,15,18,20]
const numeroMaximoSpread = Math.max(...listaNumeros)
console.log(numeroMaximoSpread)




// TRANSFORMAR EM ARRAY
const btns = document.querySelectorAll('button')

const btnsArray = [...btns]
console.log(btns)
console.log(btnsArray)