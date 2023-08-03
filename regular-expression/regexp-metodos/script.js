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








// STR.MATCH()
const resultados = frase3.match(regexp3)

console.log(resultados)









// STR.SPLIT()
const frase4 = 'JavaScript, TypeScript, CoffeScript, Java, 200'

const regexp4 = /[A-Za-z]+/g

const resultados2 = frase4.split(regexp4)

console.log(resultados2)









// STR.REPLACE()
const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

const regexp5 = /<li/g

const resultado5 = tags.replace(regexp5, '$& class="ativa"')
console.log(resultado5)








// GRUPOS DE CAPTURA
const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

const regexp6 = /(\w+@)[\w.]+/g

const result = emails.replace(regexp6, '$1gmail.com')
console.log(result)








// CALLBACK
const regexp7 = /(\w+@)([\w.]+)/g;
const emails2 = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br`

const resultado3 = emails2.replace(regexp7, function(...args) {
    
    if(args[2] === 'homail.com.br') {
        return args[1] + 'hotmail.com.br'
    } else if(args[2] === 'ggmail.com.br') {
        return args[1] + 'gmail.com.br'
    } else if(args[2] === 'oulook.com.br') {
        return args[1] + 'outlook.com.br'
    } else {
    return args[0]
    }
})

console.log(resultado3)