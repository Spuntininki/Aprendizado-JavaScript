Array.prototype.reduce2 = function(callback, startIndex = 0){
    let acumulator = startIndex
    for(let i = 0; i < this.length; i++){
        acumulator = callback(acumulator, this[i])
    }
    return acumulator
}

const alunos = [
    {nome:'Lucas', nota:10, bolsista:true},
    {nome:'Clara', nota:7.9, bolsista:false},
    {nome:'Cosmira', nota:8.5, bolsista:true},
    {nome:'Josue', nota:6.8, bolsista:true},
]

//Todos os alunos são bolsistas?
allBolsistas = alunos.map(a => a.bolsista).reduce2(function(acumulador, atual){
    if(atual == false){
        acumulador = false
    }
    return acumulador
}, true)
console.log(allBolsistas)
//Algum aluno é bolsista?
anyBolsistas = alunos.map(a => a.bolsista).reduce2(function(acumulador, atual){
    if(atual){
        acumulador = true
    }
    return acumulador
}, false)
console.log(anyBolsistas)


const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21))