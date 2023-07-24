// CONSTRUCTOR FUNCTION
// function Button(text, background) {
//     this.text = text
//     this.background = background
// }

// Button.prototype.element = function() {
//     const buttonElement = document.createElement('button')
//     buttonElement.innerText = this.text
//     buttonElement.style.background = this.background

//     return buttonElement
// }








// // CLASS  // CONSTRUCTOR  //  RETURN  // THIS

class Button {
    constructor(text, background, color) {
        this.text = text
        this.background = background
        this.color = color
    }

    element() {
        const buttonElement = document.createElement('button')
        buttonElement.innerText = this.text
        buttonElement.style.background = this.background
        buttonElement.style.color = this.color
        return buttonElement
    }

    appendTo(target) {
        const targetElement = document.querySelector(target)
        targetElement.appendChild(this.element())
        return targetElement    
    }

    static blueButton(text) {
        return new Button(text, 'blue', 'white')
    }
}

const botaoAzul = Button.blueButton('Comprar ae')

// console.log(blueButton.appendTo('body'))





// PROPRIEDADES

// class Button {
//     constructor(options) {
//         this.options = options
//     }

//     static createButton(text, background) {
//         const buttonElement = document.createElement('button')
//         buttonElement.innerText = text
//         buttonElement.style.background = background
//         return buttonElement
//     }
// }

// const optionsBlue = {
//     backgroundColor: 'blue',
//     color: 'white',
//     text: 'Vem Comprar'

// }


// const blueBotton = new Button(optionsBlue)

// const blueButtonStatic = Button.createButton('Clique', 'blue')

// console.log(blueButtonStatic)