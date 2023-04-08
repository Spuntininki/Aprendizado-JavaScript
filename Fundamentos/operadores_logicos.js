function compras(trabalho1=true, trabalho2=true){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprarTV32 = trabalho1 != trabalho2;

    return {comprarSorvete, comprarTv50, comprarTV32}

}

console.log(compras(true, true))