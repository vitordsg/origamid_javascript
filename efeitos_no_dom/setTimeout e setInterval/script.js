// SETTIMEOUT()
function espera(texto) {
    console.log('Passou de 2')
}

setTimeout(() => {
    console.log('testando')
}, 2000)



// IMEDIATO
setTimeout(() => {
 console.log('Agora')   
});




// LOOPS E SETTIMEOUT
// for(let i = 0; i <= 20; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 300 * i)
// }



// THIS E WINDOW
const btn = document.querySelector('button')

btn.addEventListener('click', handleCLick)

function handleCLick() {
    setTimeout(() => {
        console.log(this)
        this.classList.add('active')
    }, 1000);
}




// SETINTERVAL
// function loop(texto) {
//     console.log(texto)
// }


// let i = 0
// setInterval(() => {
//     console.log(i++)
// }, 1000)



// CLEARINTERVAL

let a = 0
const meuLoop = setInterval(() => {
    console.log(a++)
    if(a > 10)
    clearInterval(meuLoop)
}, 300)