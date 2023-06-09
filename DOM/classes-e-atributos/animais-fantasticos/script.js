// FOREACH
// const imgs = document.querySelectorAll('img')

// imgs.forEach(function(item, index, array){
    //console.log(item, index, array)
// })




// FOREACH E ARRAY
const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos)

//console.log(titulos)
//console.log(titulosArray)

titulosArray.forEach(function(item, index, array){
    //console.log(item, index, array)
})




// ARROW FUNCTION
// const imgs = document.querySelectorAll('img')

// let i = 0
// imgs.forEach((item) =>{
//     console.log(i++)
// })




// let i = 0
// imgs.forEach(function() {
//    console.log(i++)
// })




// sem parâmetro precisa dos parênteses, mesmo vazio
// imgs.forEach(() => console.log(i++))