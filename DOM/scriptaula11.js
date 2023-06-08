// window.alert('isso mesmo')

const href = window.location.href

console.log(href)

if(href === 'http://127.0.0.1:5500/DOM/index.html') {
    console.log('É Igual')
}

const h1Selecionado = document.querySelector('h1')
const h1Classes = h1Selecionado.classList

function callBackh1 () {
    console.log('Cliclou em ', h1Selecionado.innerText)
}

h1Selecionado.addEventListener('click', callBackh1)
