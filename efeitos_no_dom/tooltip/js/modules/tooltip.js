export default function initTooltip() {
    const tooltips = document.querySelectorAll('[data-tooltip]')

    tooltips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver)
    })

    function onMouseOver(event) {
        const tooltiBox = criarTooltipBox(this)

        onMouseMove.tooltiBox = tooltiBox
        this.addEventListener('mousemove', onMouseMove)

        onMouseLeave.tooltipBox = tooltiBox
        onMouseLeave.element = this
        this.addEventListener('mouseleave', onMouseLeave)
    }

    const onMouseLeave = {
        handleEvent() {
            this.tooltipBox.remove()
            this.element.removeEventListener('mouseleave', onMouseLeave)
            this.element.removeEventListener('mousemove', onMouseMove)
        }
    }

    const onMouseMove = {
        handleEvent(event) {
            this.tooltiBox.style.top = event.pageY + 15 + 'px'
            this.tooltiBox.style.left = event.pageX + 15 + 'px'
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
}

