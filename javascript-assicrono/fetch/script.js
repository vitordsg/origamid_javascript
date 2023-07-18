// FETCH API / RESPONSE / JSON
const cep = fetch('https://viacep.com.br/ws/11360020/json')

cep.then(r =>  r.json())
.then(body => {
    //console.log(body.bairro)
    const conteudo = document.querySelector('.conteudo')
    conteudo.innerText = body.bairro
    
})


const corBackground = fetch('./style.css')

corBackground.then(r => r.text())
.then(body => {
    //console.log(body)
    const cor = document.querySelector('.conteudo')
    const style = document.createElement('style')
    style.innerHTML = body
    cor.appendChild(style)
})





// HTML E .TEXT()

const sobre = fetch('./sobre.html')
const div = document.createElement('div')


sobre.then(r => r.text())
.then(body => {
    div.innerHTML = body
    const titulo = div.querySelector('h1')
    document.querySelector('h1').innerText = titulo.innerText
    //console.log(titulo)
})




// BLOB()

const imagem = fetch('./imagem.jpg')

imagem.then(r => r.blob())
.then(body => {
    const blobURL = URL.createObjectURL(body)
    const imagemDom = document.querySelector('img')
    imagemDom.src = blobURL
})




// CLONE()

const cep2 = fetch('https://viacep.com.br/ws/11360020/json')

cep2.then(r => {
    const r2 = r.clone() 
    r.text().then((text) => {
        //console.log(text)
    })
    r2.json().then((json) => {
        //console.log(json)
    })
    //console.log(r)
})
.then(body => {
    //console.log(body)
})




// HEADERS
cep2.then(response => {
    console.log(response)
    response.headers.forEach(console.log)
})



// STATUS E OK

const imagem2 = fetch('https://viacep.com.br/ws/11360020/json')

imagem2.then(response => {
    console.log(response.type)
    if(response.status === 404) {
        console.log('Página não existe')
    }
})