// OBJECT 
const pessoa = new Object({
    nome: 'Vitor'
})

console.log(pessoa)



// MÉTODOS DE OBJECT
const carro = {
    marca: 'Marca',
    rodas: 4,
    init(valor) {
        this.marca = valor
        return this
    },
    acelerar() {
        return this.marca + ' acelerou'
    },
    buzinar() {
        return this.marca + ' buzinou'
    }
}

const honda = Object.create(carro).init('Honda')
console.log(honda.acelerar())

const ferrari = Object.create(carro).init('Ferrari')
console.log(ferrari.acelerar())