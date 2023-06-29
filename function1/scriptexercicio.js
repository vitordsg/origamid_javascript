// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p')

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    //console.log(item.innerText)
    return acumulador + item.innerText.length
}, 0)

console.log(totalCaracteres)
console.log(paragrafos)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function novosElementos(tag, classe, conteudo){
    const elemento = document.createElement(tag)
    classe ? elemento.classList.add(classe) : null
    conteudo ? elemento.innerHTML = conteudo : null

    return elemento
}

console.log(novosElementos('h1', 'teste', 'Esse e o conteudo novo'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico


const h1Titulos = novosElementos.bind(null, 'h1', 'titulo')

const cursoJS = h1Titulos('Curso de Javascript')
const cursoHTML = h1Titulos('Curso de HTML')
const cursoCSS = h1Titulos('Curso de CSS')

console.log(cursoJS, cursoHTML)
console.log(cursoCSS)