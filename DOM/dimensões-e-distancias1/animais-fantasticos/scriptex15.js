// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img')
const imgTop = img.offsetTop
console.log(imgTop)



// Retorne a soma da largura de todas as imagens
function somarImagens() {
    const imgs = document.querySelectorAll('img')
    let soma = 0
    imgs.forEach((imagem) => {
        soma += imagem.offsetWidth
    })
    console.log(soma)
}

window.onload = function() {
    somarImagens()
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')
links.forEach((link) => {
    linkHeight = link.offsetHeight
    linkWidth = link.offsetWidth
    if(linkHeight >= 48 && linkWidth >= 48){
        console.log(link, 'Possui acessibilidade')
    }
    else {
        console.log('Não possui acessibilidade')
    }
})
console.log(links)


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const mobileSmall = window.matchMedia('(max-width: 720px)').matches
if(mobileSmall) {
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')
}
