// CLASSLIST
const menu = document.querySelector('.menu')
// console.log(menu.classList)

menu.classList.add('ativo', 'teste')
menu.classList.remove('azul')


if(menu.classList.contains('azul')) {
    menu.classList.add('possui-azul')
}
else {
    menu.classList.add('não-possui-azul')
}

// ADICIONANDO CLASSE ANTIGAMENTE
menu.className += ' vermelho'
console.log(menu.className)



// ATTRIBUTES
const animais = document.querySelector('.animais')
console.log(animais.attributes['data-texto'])



// GETATTRIBUTE E SETATTRIBUTE
const img = document.querySelector('img')
const srcImg = img.getAttribute('alt')

img.setAttribute('alt', 'E Uma raposa')

const possuiAlt = img.hasAttribute('alt')
console.log(possuiAlt)

console.log(srcImg)

