//exemplo de aplicação:
const real = (texto, ...variaveisInterpoladas) => {
    const resultado = []
    variaveisInterpoladas.forEach((valor, indice) => {
        valor = '$' + (valor.toFixed(2))
        resultado.push(texto[indice], valor)
    })
    
    return resultado.join('')
}
const valor1 = 50
const valor2 = 25
const string = real `O primeiro valor custa ${valor1} e o segundo valor custa ${valor2}`
console.log(string)