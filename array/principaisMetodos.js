const frutas = ['Jaca', 'Maçã', 'Banana', 'Laranja']

frutas.pop() //remove o ultimo elemento. Altera a Array

console.log(frutas)

frutas.push('Laranja') // Adiciona um elemento na ultima posição. Altera a Array

console.log(frutas)

frutas.shift() // Remove o primeiro elemento. Altera a Array

console.log(frutas)

frutas.unshift('Jaca') // Adiciona um elemento na primeira posição. Altera a Array

console.log(frutas)

//Metodo splice

frutas.splice(0, 1) //deletando o primeiro elemento pelo metodo splice

console.log(frutas)

frutas.splice(0, 0, 'Jaca') //revertendo a deleção com splice
console.log(frutas)

frutas.splice(0, 0, 'Abacaxi', 'Caqui', 'Amora') //Adicionado diversos elementos a partir do indice especificado
console.log(frutas)

frutas.splice(0, 3) //Deletando os três primeiros elementos da Array
console.log(frutas)

const frutas2 = frutas.slice(0, 2) //Array slice. O ultimo parâetro é exclusivo. Não modifica a Array, é retornado outra.
console.log(frutas2)
