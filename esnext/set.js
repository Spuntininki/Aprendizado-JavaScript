//Estrutura de dados não idexada que não aceita repetição.
const setDeTimes = new Set()
setDeTimes.add('Coringão').add('vasco').add('São Paulo')
setDeTimes.add('Coringão')

setDeTimes.forEach((valor) =>{
    console.log(valor)
})

const setDeLetras = new Set(['a', 'b', 'c', 'c'])

console.log(setDeLetras)