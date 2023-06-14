// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const rodape = document.querySelector('.copy')

const menuClone = menu.cloneNode(true)
rodape.appendChild(menuClone)



// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq-lista')
console.log(faq.children[0])

//const faq = document.querySelector('.faq')
//const primeiroDt = faq.querySelector('dt')


// Selecione o DD referente ao primeiro DT
console.log(faq.children[0].nextElementSibling)
//const proximoDD = primeiroDt.nextElementSibling
//console.log(proximoDD)


// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML