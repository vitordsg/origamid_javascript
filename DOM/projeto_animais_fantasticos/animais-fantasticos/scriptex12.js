// Retorne no console todas as imagens do site
const todasImg = document.querySelectorAll('img')
console.log(todasImg)

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imgAnimais = document.querySelectorAll('img[src^="../img/imagem"]')
console.log(imgAnimais)

// Selecione todos os links internos (onde o href começa com #)
const todosLinks = document.querySelectorAll('[href^="#"')
console.log(todosLinks)

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.descricao-animais h2')
console.log(primeiroH2)

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p')
console.log(ultimoP[ultimoP.length - 1])

