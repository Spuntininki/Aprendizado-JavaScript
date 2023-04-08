const alunos = [
    {nome:'Lucas', nota:10, bolsista:true},
    {nome:'Clara', nota:7.9, bolsista:true},
    {nome:'Cosmira', nota:8.5, bolsista:true},
    {nome:'Josue', nota:6.8, bolsista:true},
]

//Todos os alunos são bolsistas?
allBolsistas = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    if(atual == false){
        acumulador = false
    }
    return acumulador
}, true)
console.log(allBolsistas)
//Algum aluno é bolsista?
anyBolsistas = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    if(atual){
        acumulador = true
    }
    return acumulador
}, false)
console.log(anyBolsistas)