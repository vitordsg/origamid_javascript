// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// let corTela = document.body.style.background = 'blue'

// setInterval(() => {
//     if(corTela === 'blue') {
//         corTela = document.body.style.background = 'red'
//     }
//     else if (corTela === 'red')
//         corTela = document.body.style.background = 'blue'
// }, 2000)


function mudarClasseCor() {
    document.body.classList.toggle('active')
}
//setInterval(mudarClasseCor, 2000)




// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const tempo = document.querySelector('.tempo')

iniciar.addEventListener('click', iniciarTempo)
pausar.addEventListener('click', pausarTempo)
pausar.addEventListener('dblclick', resetarTempo)

function iniciarTempo() {

}

function pausarTempo() {
    console.log('pausa')
}

function resetarTempo(){
    console.log('resetou')
}