const promesa = new Promise(function(resolve, reject) {
    //resolve('Vitor Teste')
    reject(Error('Ocorreu um erro, tente novamente'))
})

console.log(promesa)