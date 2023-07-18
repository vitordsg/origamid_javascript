// FETCH API / RESPONSE
const cep = fetch('https://viacep.com.br/ws/11360020/json')

cep.then(r =>  r.json())
.then(body => {
    console.log(body.bairro)
    const conteudo = document.querySelector('.conteudo')
    conteudo.innerText = body.bairro
    
})



// JSON
