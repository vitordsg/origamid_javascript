// REGEXP CONSTRUCTOR
const regexp = /\w+[-.]/gi

const regexp1 = new RegExp('\\w', 'gi')

const frase = 'JavaScript Linguagem 101'
console.log(frase.replace(regexp1, 'X'))







// PROPRIEDADES
console.log(regexp.flags)
console.log(regexp.global)
console.log(regexp.ignoreCase)
console.log(regexp.multiline)
console.log(regexp.source)






// REGEXP.TEST()
const regexp2 = /Java/g

const frase2 = 'JavaScript e Java Linguagem Java 101'

let i = 1
while(regexp2.test(frase2)) {
    console.log(i++, regexp2.lastIndex)
}







// REGEXP.EXEC()
const frase3 = 'JavaScript, TypeScript, CoffeeScript, Java'

const regexp3 = /\w+/g

let regexpResult
while((regexpResult = regexp3.exec(frase3)) !== null) {
    console.log(regexpResult[0])
}