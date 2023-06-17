// CONSTRUCTOR FUNCTIONS
function redesSociais(nomeAtribuido, anoAtribuido){
    this.nome = nomeAtribuido
    this.ano = anoAtribuido
}

const facebook = new redesSociais('facebook', 2007)
const instagram = new redesSociais('instagram', 2010)

function Carro(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida
    this.preco = precoAtribuido

}

const honda = new Carro('Honda', 3000)
const fiat = new Carro('Fiat', 4000)



// NEW KEYWORD

//const honda = new Carro();

// 1 Cria um novo objeto
// honda = {};

// 2 Define o protótipo
// honda.prototype = Carro.prototype;

// 3 Aponta a variável this para o objeto
// this = honda;

// 4 Executa a função, substituindo this pelo objeto
// honda.marca = 'Marca';
// honda.preco = 0;

// 5 Retorna o novo objeto
// return honda = {
  // marca: 'Marca',
 // preco: 0,
// }



// THIS KEYWORD
function Carro2(marca, precoInicial) {
    this.taxa = 1.2
    const precoFinal = precoInicial * this.taxa
    console.log(this)
    this.marca = marca
    console.log(this)
    this.preco = precoFinal
    console.log(this)
}

const mazda = new Carro2('Mazda', 5000)

