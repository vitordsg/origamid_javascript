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
        //console.log(ganhador + ' ganhou um ' + premio)
    })
}

anunciarGanhadores('Carro','Maria', 'Bia', 'Ana', 'Neto')




// OPERADOR SPREAD
const frutas = ['Banana', 'Uva', 'Morango']
const legumens = ['Cenoura', 'Batata']

const comidas = [...frutas, 'Pizza', 'Chocolate', ...legumens]
console.log(comidas)