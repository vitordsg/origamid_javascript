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
    let condicao = true

    if(condicao) {
        setTimeout(() => {
            resolve({nome: 'Vitor Santos', idade: 24})
        }, 1000);
    }

    else {
     reject(Error('Ocorreu um erro, tente novamente'))
    }
})

//promesa1.then(resolution1 => console.log(resolution1))




// THEN().THEN().CATCH()
// const retorno = promesa1

// .then(resolution1 => {
//     resolution1.profissao = 'Developer'
//     return resolution1
// })
// .then(resolution1 => {
//     console.log(resolution1) 

// }, rejeitada => {
//     console.log(rejeitada)
// }).finally(() => {
//     console.log('Acabou')
// })

// console.log(retorno)




// PROMISE.ALL()
const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuário logado')
    }, 1000)
})

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados Carregados')
    }, 1500)
})

const carregouTudo = Promise.all([login, dados])

carregouTudo.then((resolucao) => {
    console.log(resolucao)
})




// PROMISE.RACE()
const carregouTudo2 = Promise.race([login, dados])

carregouTudo2.then((resolucao) => {
    console.log(resolucao)
})