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





// OBJECT.ASSIGN()
const funcaoAutomovel = {
    acelerar() {
        return 'Acelerou'
    },
    
    buzinar() {
        return 'Buzinar'
    },
}

const moto1 = {
    rodas: 2,
    capacete: true
}

Object.assign(moto1, funcaoAutomovel)
console.log(moto1)






// OBJECT.DEFINEPROPERTIES()
const moto2 = {}


Object.defineProperties(moto2, {
    rodas: {
        value: 2,
        configurable: false, // impede deletar e mudança de valor
        writable: false, // impede mudança de valor
        enumerable: false // torna numerável
    },

    capa: {
        value: true,
        configurable: false, // impede deletar e mudança de valor
        writable: false, // impede mudança de valor
        enumerable: false // torna numerável
    }
})

console.log(moto2)






// GET E SET
const moto3 = {
    capacete3: true
}

Object.defineProperties(moto3,{
    rodas: {
        enumerable: true,
        get() {
            // return 2
            return this._rodas
        },

        set(valor) {
            this._rodas = valor * 4 + ' Total Rodas'
        }
    }
})







// OBJECT.GETOWNPROPERTYDESCRIPTORS(OBJ)
Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade








// OBJECT.KEYS(OBJ), OBJECT.VALUES(OBJ) OBJECT.ENTRIES(OBJ)
console.log(Object.keys(moto3))
// (2) ['capacete3, 'rodas']
console.log(Object.values(moto3))
// (2) [true, undefined]
console.log(Object.entries(moto3))
// (2) ['capacete3', true]
// (2) ['rodas', undefined]







// OBJECT.GETOWNPROPERTYNAMES(OBJ)
Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]








// OBJECT.GETPROTOTYPEOF() E OBJECT.IS()
const frutas = ['Banana']

console.log(Object.getPrototypeOf(frutas))
console.log(Array.prototype)

const frutas1 = ['Banana', 'Uva']
const frutas2 = ['Banana', 'Uva']

const novaFrutas = frutas1

novaFrutas[0] = 'Pêra'

console.log(Object.is(frutas1, novaFrutas))









// OBJECT.FREEZE(), OBJECT.SEAL(), OBJECT.PREVENTEXTENSIONS()
const carro2 = {
    marca: 'Porsche',
    ano: 2020
}

Object.freeze(carro2)
Object.seal(carro2)
//Object.preventExtensions(carro2)

carro2.marca = 'Ford'
carro2.portas = 2


console.log(carro2)
console.log(Object.isFrozen(carro2))
// console.log(Object.isSealed(carro2))
// console.log(Object.isExtensible(carro2))







// PROPRIEDADES E MÉTODOS DO PROTÓTIPO
const fruta = ['Banana', 'Uva']
fruta.constructor // Array

const frase = 'Teste de frase'
frase.constructor // String





// {}.HASOWNPROPERTY('PROP') E {}.PROPERTYISENUMERABLE('PROP')
// console.log(Array.hasOwnProperty('map'))
// console.log(Array.prototype.hasOwnProperty('map'))
// console.log(Array.prototype.propertyIsEnumerable('map'))
// console.log(window.propertyIsEnumerable('innerHeight'))






//{}.ISPROTOTYPEOF(VALOR)
// console.log(Array.prototype.isPrototypeOf(fruta))








//{}.TOSTRING()
const frutas3 = ['Banana', 'Uva']
frutas3.toString() // Banana, Uva
typeof frutas3 // object
console.log(Object.prototype.toString.call(frutas3)) // [object Array]