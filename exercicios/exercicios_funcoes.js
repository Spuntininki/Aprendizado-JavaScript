function frase(texto){
   return `Olá, ${texto}!` 
}

//console.log(frase('Jaime'))



function ConvertAgeInDays(idade){
    
    return 365 * idade
}

//console.log(ConvertAgeInDays(70))

function CalculaSalario(ValorDaHora, HorasTrabalhadas){
    return `Salário igual a $ ${ValorDaHora * HorasTrabalhadas}`
}
//console.log(CalculaSalario(150, 40.5))


function nomeDoMes(mes){
    meses = {
        1:'Janeiro', 
        2:'Fevereiro',
        3: 'março',
        4:'abril',
        5: 'maio',
        6:'junho',
        7:'julho', 
        8:'agosto',
        9:'setembro',
        10:'outubro',
        11:'novembro',
        12:'dezembro'   
    }

    return meses[mes]
}


//console.log(nomeDoMes(1), nomeDoMes(4))
function inverso(boolean){
    return !(boolean)
}
console.log(inverso(true))