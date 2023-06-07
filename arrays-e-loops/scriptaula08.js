// ARRAY
var videosGames = ['Switch', 'PS4', 'Xbox']

//MÉTODOS E PROPRIEDADES DE UMA ARRAY
videosGames.pop() // Remove o ultimo item e retorna ele
videosGames.push('3DS') // Adiciona ao final da array
videosGames.length // 3



// FOR LOOP
//for (var numero = 0; numero <= 10; numero++) {
//    console.log(numero)
//}


// WHILE LOOP
var i = 1
while (i < 20) {
    console.log(i)
    i++
}



// ARRAYS E LOOPS // BREAK
var videosGames2 = ['Switch', 'PS4', 'Xbox', '3DS']

for (var item = 0; item < videosGames2.length; item++) {
    console.log(videosGames2[item])
    if (videosGames2[item] === 'PS4') {
        break
    }
}



// FOREACH
var frutas = ['Banana', 'Pera', 'Uva', 'Maçã', 'Abacaxi',]

frutas.forEach(function(fruta, index) {
    console.log(fruta, index)
})




// NÃO SE CONFUNDA COM A SINTAXE
var numero2 = 0
var maximo = 20
for (;numero2 < maximo;) {
    console.log(numero2)
    numero2++
}