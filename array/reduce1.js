const alunos = [
    {nome:'Lucas', nota:10, bolsista:false},
    {nome:'Clara', nota:7.9, bolsista:true},
    {nome:'Cosmira', nota:8.5, bolsista:false},
    {nome:'Josue', nota:6.8, bolsista:false},
]

const retorno = alunos.map(a => a.nota).reduce(function(acumulador, atual ){
    console.log(acumulador)
    return acumulador + atual
}
)
console.log(retorno)