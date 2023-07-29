// DESTRUCTURING
const carro = {
    marca: 'Honda',
    ano: 2018
}


const {marca, ano, portas} = carro

console.log(marca, ano, portas)



// DESTRUCTURING OBJECTS / NESTING

const cliente = {
    nome: 'Vitor',
    compras: {
        digitais: {
            livros: ['Livro 1', 'Livro 2'],
            videos: ['Video JS', 'Video HTML']
        },

        fisicas: {
            cadernos: ['Caderno 1']
        }
    }
}

//console.log(cliente.compras.digitais.livros)
//console.log(cliente.compras.digitais.videos)

const {digitais, fisicas, digitais: {livros, videos}} = cliente.compras

console.log(livros)




// NOME DAS VARIÁVEIS

const cliente2 = {
    nome: 'Vitor',
    comrpas: 10,
    email: 'vitor@gmail.com'
}

const {nome: nomeVitor, email = 'email@gmail.com'} = cliente2

console.log(email)




// DESTRUCTURING ARRAYS
const frutas = ['Banana', 'Uva', 'Abacaxi']

const [primeira, segunda, terceira] = frutas
console.log(terceira)





// DECLARAÇÃO DE VARIÁVEIS
const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3']
console.log(primeiro, segundo, terceiro)





// ARGUMENTO DESESTRUTURADO
function handlekeyboard({key, keyCode}) {
    console.log(key, keyCode)
}


document.addEventListener('keyup', handlekeyboard)