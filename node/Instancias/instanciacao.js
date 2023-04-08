const objetoA = require('./instanciaUnica')
const objetoB = require('./instanciaUnica')

const objetoC = require('./instanciaNova')()
const objetoD = require('./instanciaNova')()

objetoA.incrementa()
console.log(objetoB.valor)

objetoC.incrementa()
console.log(objetoD.valor)
console.log(objetoC.valor)