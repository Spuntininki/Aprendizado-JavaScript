//Uma função em JavaScript pode se comportar como uma classe.

function Produto(nome, valor, estoque) {
    this.nome = nome;
    this.valor =  valor;
    this.estoque = estoque;
}


//Usando a palavra reservada "new" é criado uma "objeto" usando como parametro a função. 
pessego_enlatado = new Produto('pessego', 5.3, 130);

console.log(pessego_enlatado.nome)


//Segue um ilustração de algumas particularidaes no que tangem a tipagem do javascript
console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)


//uma "classe" em javascript ainda pode ser considerado como uma função "por baixo dos panos."
class Produto {} 
console.log(typeof Produto)
console.log(typeof new Produto())
