// OUTERHTML, INNERHTML E INNERTEXT
// const h1 = document.querySelector('h1')
// const animaisLista = document.querySelector('.descricao-animais')
// console.log(h1.innerHTML)
// console.log(h1.outerHTML)

// // h1.outerHTML = '<p>Novo Titulo</p>'
// // console.log(animaisLista.innerText)




// // TRASVERSING
// const lista = document.querySelector('.animais-lista')

// lista.parentElement; // pai
// lista.parentElement.parentElement; // pai do pai
// lista.previousElementSibling; // elemento acima
// lista.nextElementSibling; // elemento abaixo

// console.log(lista.previousElementSibling)
// console.log(lista.children[0])
// // console.log(lista.children[lista.children.length - 1])
// console.log(lista.children[--lista.children.length])
// console.log(lista.querySelector('li:last-child'))





// // ELEMENT VS NODE
// console.log(lista.previousSibling)
// lista.previousElementSibling; // elemento acima
// lista.previousSibling; // node acima

// lista.firstChild; // primeiro node child
// lista.childNodes; // todos os node child



// // MANIPULANDO ELEMENTOS
// const animais = document.querySelector('.animais')
// const contato = document.querySelector('.contato')
// const titulo = contato.querySelector('.titulo')
// const mapa = document.querySelector('.mapa')


// contato.replaceChild(lista, titulo)
// //animais.appendChild(titulo)
// //contato.insertBefore(animais, mapa)




// // NOVOS ELEMENTOS
// const novoh1 = document.createElement('h1')
// novoh1.innerText = 'Novo Titulo'
// novoh1.classList.add('titulo')

// mapa.appendChild(novoh1)

// console.log(novoh1)



// CLONAR ELEMENTOS
const h1 = document.querySelector('h1')
const faq = document.querySelector('.faq')

const cloneH1 = h1.cloneNode(true)
cloneH1.classList.add('azul')

faq.appendChild(cloneH1)