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
promesa.then(function(resolution) {
    console.log(resolution)
})

promesa.then(function(resolution) {
    console.log(resolution)
})