// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
    nome: 'Vitor',
    sobrenome: 'Santos',
    idade: 24,
    cidade: 'São Vicente',
    mostrarNome() {
       return console.log(`Meu nome é ${this.nome} ${this.sobrenome}`)
    }
}

console.log(dadosPessoais.mostrarNome())
// Crie um método no objeto anterior, que mostre o seu nome completo


// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

  carro.preco = 3000
  console.log(carro.preco)

  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
var cachorro = {
    raça: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latido (sexo) {
        if (sexo === 'homem' || sexo === 'Homem') {
            return console.log(`Cachorro da raça ${this.raça} da cor ${this.cor} com idade de ${this.idade}, Late ao ver um Homem!`)
        }
        else {
            return console.log('Não late')
        }
    }
}
  