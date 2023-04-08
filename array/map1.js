const numbers = [1, 2, 3, 4, 5]

console.log(numbers.map(e => e + 10).map(e => e * 3).map(e => `$ ${parseFloat(e).toFixed(2).replace('.', ',')}`))