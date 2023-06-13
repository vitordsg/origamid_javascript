// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = document.querySelectorAll('a[href^="#"]')

function handleLinks (event) {
    event.preventDefault()
    links.forEach((link) => {
        link.classList.remove('ativo')
    })
    event.currentTarget.classList.add('ativo')
}

links.forEach((link) => {
    link.addEventListener('click' , handleLinks)
})



// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elementosBody = document.querySelectorAll('body *')

function handleBody (event) {
    //console.log(event.currentTarget)
    //event.currentTarget.remove()
}

elementosBody.forEach((elemento) => {
    elemento.addEventListener('click' , handleBody)
})
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento





// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleTexto(event) {
    console.log(event.key)
    if(event.key === 't' || event.key === 'T'){
        document.documentElement.classList.toggle('textoMaior')
    }
}


window.addEventListener('keydown', handleTexto)
