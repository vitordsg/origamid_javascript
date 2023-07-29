// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const li = document.querySelectorAll('li')

for(const item of li) {
    item.classList.add('ativo')
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for(const windowKey in window) {
    console.log(windowKey + ': ' + window[windowKey])
}