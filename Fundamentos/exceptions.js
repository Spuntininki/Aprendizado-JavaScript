function jogaException(exception) {
    throw new Error('Deu erro!')

}


function PrintBigName(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        jogaException(e)
    }finally{
        console.log('fechando hipotetico banco de dados.')
    }
}

const pessoa = {
    nome: 'Lucas',
}

PrintBigName(pessoa)