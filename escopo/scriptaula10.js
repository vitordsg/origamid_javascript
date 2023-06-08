// ESCOPO DE FUNÇÃO
var carro = 'Fusca'
function mostrarCarro() {
    
    console.log(carro)
}

console.log(mostrarCarro()) // Mostra fusca no console
console.log(carro)



// VARIÁVEL GLOBAL (ERRO)
// Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.
// 'use strict' impede isso.



// ESCOPO DE FUNÇÃO (PAI)

//var carro = 'Fusca';

//function mostrarCarro() {
//  var frase = `Meu carro é um ${carro}`;
//  console.log(frase);
//}

// mostrarCarro(); // Meu carro é um Fusca
// console.log(carro);  // Fusca



// ESCOPO DE BLOCO
if (true) {
    let mes = 'Maio'
    console.log(mes)
}
// console.log(mes)



// VAR VAZA O BLOCO
// if(false) {
//    var carro = 'Fusca';
//    console.log(carro);
//  }
//  console.log(carro); // undefined



// {} CRIA UM BLOCO
{
    var carro2 = 'Fusca 2';
    const ano = 2018;
  }
  console.log(carro2); // Carro
  //console.log(ano); // erro ano is not defined
  


// FOR LOOP // FOR LOOP COM LET
var i = 100

for (let i = 0; i < 10; i++) {
    console.log(`Numero ${i}`)
}

console.log(i * 10)


// CONST
const semana = 'Sexta'

console.log(semana)

const data = {
    ano: 2018,
    mes: 'Maio'
}

data.ano = 2019
data.dia = 15



// LET
let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

//let ano2 = 2020; // erro, redeclarou a variável
