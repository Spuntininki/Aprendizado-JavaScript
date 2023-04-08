const a = 1
const b = 2
const c = 3


obj1 = {
    a, 
    b, 
    c
}

console.log(obj1)

attrName = 'nome'
attrValue = 'Josevaldo'


obj2 = {
    [attrName]: attrValue, 
    funcao1: function() {  //Primeira forma de criar uma função para um objeto
        console.log('Olá')
    },
    funcao2() {  //Segunda forma de criar uma função para um objeto
        console.log('tchau')
    }
}
console.log(obj2)