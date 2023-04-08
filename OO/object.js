objeto = new Object
objeto.nome = 'Lucas'
objeto['Idade'] = 23



ContratoSegurado = {
    titular: {
        nome: 'José',
        idade: 43,
        profissao: 'Mecanico'
    },
    filiados:[
        {nome: 'maria', parentesco:'filha'},
        {nome: 'joão', parentesco:'filho'},
        {nome: 'gabriela', parentesco:'filha'},
        {nome: 'josefina', parentesco:'filha'},
        {nome: 'cosmira', parentesco:'mãe'}
    ]

}

console.log(ContratoSegurado.titular)
//delete ContratoSegurado.titular
console.log(ContratoSegurado.titular)
for(NumPessoa in ContratoSegurado.filiados){
    pessoa = ContratoSegurado.filiados[NumPessoa]
    if ( pessoa['parentesco'] === 'filha'){
        console.log(pessoa.nome)
    }
    
}
console.log(ContratoSegurado.filiados)
