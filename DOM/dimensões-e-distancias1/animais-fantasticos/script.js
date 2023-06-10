// HEIGHT E WIDTH
const listaAnimais = document.querySelector('.animais-lista')

const heigth = listaAnimais.scrollHeight
console.log(heigth)



// OFFSETTOP E OFFSETLEFT
const animaisTop = listaAnimais.offsetTop
console.log(animaisTop)

const primeiroh2 = document.querySelector('h2')
const h2left = primeiroh2.offsetLeft
console.log(h2left)



// GETBOUNDINGCLIENTRECT()
const h2rect = primeiroh2.getBoundingClientRect()

console.log(h2rect.top)

if(h2rect.top < 0 ){
    console.log('Passou do elemento')
}




// WINDOW
console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerHeight,
    window.outerWidth,
    window.pageYOffset
    
)




// MATCHMEDIA();
const small = window.matchMedia('(max-width: 600px)').matches

if(small) {
    console.log('Usuario mobile')
}
else {
    console.log('Usuario desktop')
}