// FUNCTION
const perimentro = new Function('lado', 'return lado * 4')







// PROPRIEDADES
function somar(n1, n2) {
    return n1 + n2
}

somar.length // 2
somar.name // 'somar'

console.log(somar.name)






// FUNCTION.CALL()
function darOi(nome, idade) {
    console.log('Oi para você ' + nome + idade)
}
darOi.call(null, 'Vitor ', 24)



function descricaoCarro(velocidade) {
    console.log(this)
    console.log(this.marca + '' + this.ano + velocidade)
}


descricaoCarro.call({marca: 'Ford ', ano: 2015}, 150)





// THIS
const carros = ['Fiat', 'Ford', 'Ferrari']
const frutas1 = ['Banana', 'Uva', 'Pêra']



carros.forEach.call(frutas1, (item) => {
    console.log(item)
})





// EXEMPLO REAL
function Dom(seletor) {
    this.element = document.querySelector(seletor)
}

Dom.prototype.ativar = function(classe) {
    this.element.classList.add(classe)
}

const li1 = {
    element: document.querySelector('li')
}

//Dom.prototype.ativar.call(li1, 'ativo')

//const ul = new Dom('ul')




//ul.ativar.call(li, 'ativo')
//ul.ativar('ativo')








// ARRAY'S E CALL

const frutas2 = ['Maçã', 'Banana', 'Uva']

Array.prototype.pop.call(frutas2)
frutas2.pop()





// ARRAY-LIKE
const li2 = document.querySelectorAll('li')

const filtro = Array.prototype.filter.call(li2, (item) => {
    return item.classList.contains('ativo')
})

console.log(filtro)

console.log(li2)
