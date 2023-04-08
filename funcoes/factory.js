// Factory simples
function CriarPessoa(){
    return {
        nome:'Lucas',
        sobrenome:'Fonseca'

    }
}

//Factory com parametros

function CriarPessoaComParam(nome, sobrenome){
    return {
        nome, 
        sobrenome
    }
}

a = CriarPessoaComParam('Bruce')
console.log(a)