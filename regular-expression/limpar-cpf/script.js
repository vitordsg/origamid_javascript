const cpfsList = document.querySelectorAll('.cpf li')

const elementsInnerText = ([...elements]) => {
    return elements.map(element => element.innerText)
}


const limparCPF =  (cpf) => {
    return cpf.replace(/\D/g, '')
}


const construirCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
}


const formatarCPFS = (cpfs) => {
    return cpfs.map(limparCPF).map(construirCPF)
}


const substituiCPFS = (cpfsElments) => {
    const cpfs = elementsInnerText(cpfsElments)
    const cpfsFormatados = formatarCPFS(cpfs)

    cpfsElments.forEach((element, index) => {
        element.innerText = cpfsFormatados[index]
    });
}

substituiCPFS(cpfsList)