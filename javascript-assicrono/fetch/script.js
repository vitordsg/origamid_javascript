// FETCH API / RESPONSE / JSON
const cep = fetch('https://viacep.com.br/ws/11360020/json')

cep.then(r =>  r.json())
.then(body => {
    console.log(body.bairro)
    const conteudo = document.querySelector('.conteudo')
    conteudo.innerText = body.bairro
    
})


const corBackground = fetch('./style.css')

corBackground.then(r => r.text())
.then(body => {
    console.log(body)
    const cor = document.querySelector('.conteudo')
    const style = document.createElement('style')
    style.innerHTML = body
    cor.appendChild(style)
})
