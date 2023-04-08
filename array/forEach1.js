const array = ['Ana', 'Paulo', 'Marco', 'Josefina']

//array.forEach(nome => console.log(nome))

//array.forEach((nome, indice) => console.log(`${indice + 1}) ${nome}`))

array.forEach((nome, indice, array) => console.log(`${indice + 1}) ${nome}`, array)) //No for each é passado três paramêtros. Valor, Indice e array completa.

