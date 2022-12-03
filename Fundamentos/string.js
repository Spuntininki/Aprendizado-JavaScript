const escola = 'Piment3l'
console.log(escola.length)

console.log(escola.indexOf('P'))

console.log('' == escola.charAt(7))


/*
Acredito que "substring" é um dos metodos mais importantes de uma String no javascript, pois é o que permite fazer "slice".

*/

console.log(escola.substring(0, 8))

console.log('Escola '.concat(escola).concat('!'))


console.log('maça,banana,laranja,abacaxi'.split(','))



/* TEMPLANTE STRING = A MELHOR ANALOGIA QUE POSSO FAZER É QUE É SIMILAR A F-STRINGS DO PYTHON*/

let nome = 'Josevaldo'

const template = `
Olá essa é uma template string.
Um funcionalidade bem esquisita.
Isso é uma opinião do ${nome}!
`
console.log(template)


/*
Em uma template string é possivel usar da interpolação. a sintaxe para tal é usar o sifrão com chaves ${[inserir a variavel/constate aqui]}
dentro desse bloco de interpolação é possivel fazer operações;
*/


console.log(`1 + 1 = ${1+1}`)


const p = string => string.length


console.log(`${nome} possui  ${p(nome)} letras`)
