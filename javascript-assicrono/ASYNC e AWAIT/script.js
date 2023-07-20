// ASYNC / AWAIT
async function puxarDados() {
    const responseDados = await fetch('./dados.json')
    const jsonDados = await responseDados.json()

    document.body.innerText = jsonDados.aula

    console.log(jsonDados.aula)
}

puxarDados()



// THEN vs ASYNC
function iniciarFetch() {
    fetch('./dados.json')
    .then(dadosResponse => dadosResponse.json())
    .then(dadosJSON => {
        document.body.innerText = dadosJSON.aula2
        console.log(dadosJSON.aula2)
        
    })
}

iniciarFetch()

async function iniciarAsync() {
    const dadosResponse2 = await fetch('./dados.json')
    const dadosJSON2 = await dadosResponse2.json()
    document.body.innerText = dadosJSON2.aula2

    console.log(dadosJSON2.aula2)
}

iniciarAsync()



// TRY / CATCH

async function puxarDados2() {
    try {
    const responseDados = await fetch('./dados.json')
    const jsonDados = await responseDados.json()

    document.body.innerText = jsonDados.aula
    } catch (erro) {
        console.log(erro)
    }
}

puxarDados2()


// INICIAR FETCH AO MESMO TEMPO

async function puxarDados3() {
    const responseDados3 = fetch('./dados.json')
    const responseClientes3 = fetch('./clientes.json')

    
    const jsonDados3 = await (await responseDados3).json()
    const jsonClientes = await (await responseClientes3).json()

    console.log(jsonDados3)
    console.log(jsonClientes)
}

puxarDados3()




// PROMISE
async function asyncSemPromise() {
    // Console não irá esperar.
    await setTimeout(() => { 
        console.log('Depois de 1S')
    }, 1000)
    console.log('Acabou')
}

asyncSemPromise()



async function asyncComPromise() {
    await new Promise(resolve => {
        setTimeout(() => {
        console.log('Depois de 1S acontece')
        resolve()
     }, 1000)
    })
    console.log('Acabou 2')
}

asyncComPromise()