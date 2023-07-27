// FACTORY FUNCTION
function createButton(text) {

    function element() {
        const buttonElement = document.createElement('button')
        buttonElement.innerText = text
        return buttonElement
    }

            // ICE FACTORY
    return Object.freeze({
        text,
        element,
        
    }
)}


const btnComprar = createButton('Comprar')
const btnVender = createButton('Vender')

btnComprar.text = 'Novo botão'

//console.log(btnComprar, btnVender)





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




// CONSTRUCTOR FUNCTION / FACTORY FUNCTION
function Pessoa(nome) {
    if(!(this instanceof Pessoa))
        return new Pessoa()
    this.nome = nome
}

Pessoa.prototype.andar = function() {
    return `${this.nome} andou`
}

const human = Pessoa('Vitor')

console.log(human)
