// PROTOTYPE // FUNCAO.PROTOTYPE
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.abraçar = function () {
        return 'Abraçou'
    }

    this.andar = function () {
        return ' Pessoa andou pelo objeto'
    }
}


Pessoa.prototype.andar = function () {
    return this.nome + ' Pessoa Andou'
}

Pessoa.prototype.nadou = function () {
    return this.nome + ' Pessoa Nadou'
}

const Vitor = new Pessoa('Vitor', 24)

console.log(Pessoa.prototype)
console.log(Vitor.prototype)


// CONSTRUTORES NATIVOS
const pais = 'Brasil'
const cidade = new String('Rio')

pais.charAt(0) // B
cidade.charAt(0) // R



// É POSSÍVEL ACESSAR A FUNÇÃO DO PROTÓTIPO
const listaAnimais = ['Cachorro', 'Gato', 'Cavalo']


const lista = document.querySelectorAll('li')

// Transformar em Array

const listaArray1 = Array.prototype.slice.call(lista)



// MÉTODO DO OBJETO VS PROTÓTIPO
const listaArray2 = Array.from(lista)



// APENAS OS MÉTODOS DO PROTÓTIPO SÃO HERDADOS
// [1,2,3].slice(); // existe
// [1,2,3].from(); // não existe





// ENTENDA O QUE ESTÁ SENDO RETORNADO
const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true
    },

    acelerar() {
        return 'Acelerando'
    }
}

Carro // Object
Carro.marca // String
Carro.preco // Number
Carro.acelerar // Function
Carro.acelerar() // Boolean
Carro.marca.charAt() // Function
Carro.marca.charAt(0) // String