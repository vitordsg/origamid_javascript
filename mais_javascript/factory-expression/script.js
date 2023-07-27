// FACTORY FUNCTION
function createButton(text) {

    function element() {
        const buttonElement = document.createElement('button')
        buttonElement.innerText = text
        return buttonElement
    }


    return {
        text,
        element,
        
    }
}


const btnComprar = createButton('Comprar')
const btnVender = createButton('Vender')


console.log(btnComprar, btnVender)


// MÉTODOS / VARIÁVEIS PRIVADAS

function criarPessoa(nome, sobrenome) {
    const nomeCompleto = `${nome} ${sobrenome}`

    function andar() {
        return `${nomeCompleto} andou`
    }

    function nadar() {
        return `${nomeCompleto} nadou`
    }

    return {
        nome,
        sobrenome,
        andar,
        nadar
    }
}

const nome = criarPessoa('Vitor', 'Santos')

console.log(criarPessoa('Vitor Santos','Gonçalves'))