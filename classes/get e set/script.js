// GET E SET 
const button = {
    get tamanho() {
        return this._numero || 100
    },

    set tamanho(_numero) {
        this._numero = _numero * 200
    }
}




// VALOR ESTÁTICO 
const matematica = {
    get PI() {
        return 3.14
    }
}

console.log(matematica.PI)
matematica.PI = 20
console.log(matematica.PI)



// SET
const frutas = {
    lista: [],
    set nova(fruta) {
        this.lista.push(fruta)
    }
}

frutas.nova = 'Banana'
frutas.nova = 'Uva'




// CLASS
class Button {
    constructor(text, color) {
        this.text = text
        this.color = color
    }

    get element() {
        const type = this._elementType || 'button'
        const buttonElement = document.createElement(type)
        buttonElement.innerText = this.text
        buttonElement.style.color = this.color
        return buttonElement
    }

    set element(type) {
        this._elementType = type
    }
}

const blueButton = new Button('Comprar', 'blue')