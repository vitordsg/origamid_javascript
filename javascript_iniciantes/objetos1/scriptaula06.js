// OBJETO
var pessoa = {
    nome: 'Vitor',
    idade: 24,
    profissao: 'Estudante',
    possuiFaculdade: true,
}
pessoa.nome // 'Vitor'
pessoa.possuiFaculdade // true
console.log(pessoa.idade)



// METODOS COM ABREVIAÇÃO
var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado
    },

    perimetro(lado) {
        return this.lados * lado
    },

    cinco() {
        return 5
    }
}
console.log(quadrado.area(6))
console.log(quadrado.perimetro(5))




// ORGANIZAR CODIGO
Math.PI // 3.14
Math.random() // NÚMERO ALEATORIO

var pi = Math.PI
console.log(pi) // 3.14



// CRIAR OBJETO
var carro = {}
var onibus = {}
console.log(typeof carro) // OBJETO




// DOT NOTATION GET // PALAVRA-CHAVE THIS
// var height = 120
var menu = {
    width: 600,
    height: 50,
    backgroundColor: '#84E',
    metedadeHeight () {
        return this.height / 2
    },
}

menu.backgroundColor = '#000'
menu.color = 'blue'
menu.esconder = function () {
    console.log('Escondido')
}

var bg = menu.backgroundColor




// PROTÓTIPO E HERANÇA
// hasOwnProperty é um método de Object
var menu2 = {
    width: 700,
}

menu2.hasOwnProperty('width') // true
menu2.hasOwnProperty('height') // false
