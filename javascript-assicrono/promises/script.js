// NEW PROMISE()
const promesa = new Promise((resolve, reject) => {
    let condicao = true

    if(condicao) {
     resolve({nome: 'Vitor', idade: 24})
    }

    else {
     reject(Error('Ocorreu um erro, tente novamente'))
    }
})





// THEN
// promesa.then(function(resolution) {
//     console.log(resolution)
// })

// promesa.then(resolution => console.log(resolution))





// ASSÍCRONO
const promesa1 = new Promise((resolve, reject) => {
    let condicao = false

    if(condicao) {
        setTimeout(() => {
            resolve({nome: 'Vitor Santos', idade: 24})
        }, 1000);
    }

    else {
     reject(Error('Ocorreu um erro, tente novamente'))
    }
})

promesa1.then(resolution1 => console.log(resolution1))




// THEN().THEN()
const retorno = promesa1

.then(resolution1 => {
    resolution1.profissao = 'Developer'
    return resolution1
})
.then(resolution1 => {
    console.log(resolution1) 

}).catch(rejeitada => {
    console.log(rejeitada)
})

console.log(retorno)