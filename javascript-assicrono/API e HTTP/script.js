// HTTP
// fetch('https://pokeapi.co/api/v2/pokemon/1/')
// .then(response => response.json())
// .then(pokemon => {
//     console.log(pokemon)
// })


// URL E METHOD
const url = 'https://jsonplaceholder.typicode.com/posts/2';
const options = {
    method: 'HEAD',
    // body: '{"title": "Javascript"}',
    // headers: {
    //     "Content-Type": "application/json; charset=utf-8"
    // }
}


fetch(url, options)
.then(response => {
    //console.log(response.headers.forEach(console.log))
})



// CORS

const url2 = 'https://www.google.com';

fetch(url2)
.then(response => response.text())
.then(text => {
    //console.log(text)
})