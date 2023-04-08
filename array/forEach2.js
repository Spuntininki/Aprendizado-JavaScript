Array.prototype.pseudoForEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}
const array = ['Ana', 'Paulo', 'Marco', 'Josefina']



array.pseudoForEach(function (nome, indice){ 
    console.log(nome, indice)
}) 

