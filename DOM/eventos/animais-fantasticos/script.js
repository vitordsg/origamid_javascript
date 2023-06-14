// ADDEVENTLISTENER // CALLBACK
const img = document.querySelector('img')

function callBack(event) {
    console.log(event)
}

// img.addEventListener('click', callBack)



// PROPRIEDADES DO EVENT

const animaisLista = document.querySelector('.animais-lista')

function callbackLista(event) {
    console.log(event.currentTarget)
    console.log(event.target)
    console.log(event.type)
}

// animaisLista.addEventListener('click' , callbackLista)




// EVENT.PREVENTDEFAULT()   // THIS
const linkExterno = document.querySelector('a[href^="http"]')

function handleLinkExterno (event){
    event.preventDefault()
    //console.log(event)
    console.log(this.getAttribute('href'))
    console.log(event.currentTarget)
}

linkExterno.addEventListener('click' , handleLinkExterno)



// DIFERENTES EVENTOS
const h1 = document.querySelector('h1')

function handleEvent(event){
    console.log(event.type, event)
}

// h1.addEventListener('click' , handleEvent)
// h1.addEventListener('mouseenter', handleEvent)
// h1.addEventListener('mousemove', handleEvent)

// window.addEventListener('scroll', handleEvent)
// window.addEventListener('resize', handleEvent)


// KEYBOARD
function handleKeyboard (event) {
    if(event.key === 'a'){
        document.body.classList.toggle('azul')
    }
}

window.addEventListener('keydown', handleKeyboard)


// FOREACH E EVENTOS
const imgs = document.querySelectorAll('img')

function handleImg (event) {
    console.log(event.currentTarget.getAttribute('src'))
}

imgs.forEach((img) => {
    img.addEventListener('click' , handleImg)
})