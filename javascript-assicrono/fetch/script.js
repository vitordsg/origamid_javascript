// FETCH API
const doc = fetch('./doc.txt')

doc.then(resolucao => {
    return resolucao.text()
}).then((body) => {
    const conteudo = document.querySelector('.conteudo')
    conteudo.innerText = body
})



// RESPONSE