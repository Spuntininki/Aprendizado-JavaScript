function imprimeNota(nota) {
    switch (Math.floor(nota)){
        case 10:
            console.log('Sensacional')
            break
        case 9:
            console.log('Muito bem!')
            break
        case 8: case 7: case 6:
            console.log('Passou!')
            break
        case 5: case 4: case 3:
            console.log('Recuperação')
            break
        default:
            console.log('Reprovado')
    }
}


imprimeNota(10)