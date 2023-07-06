export default function initTooltip() {

}

const tooltips = document.querySelectorAll('[data-tooltip]')

tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
})

function onMouseOver(event) {
    const tooltiBox = criarTooltipBox(this)
    tooltiBox.style.top = event.pageY + 'px'
    tooltiBox.style.left = event.pageX + 'px'

    onMouseLeave.tooltipBox = tooltiBox
    this.addEventListener('mouseleave', onMouseLeave)
}

const onMouseLeave = {
    tooltipBox : '',
    handleEvent() {
        this.tooltipBox.remove()
    }
}

function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text
    document.body.appendChild(tooltipBox)
    return tooltipBox
}