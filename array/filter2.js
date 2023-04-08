Array.prototype.filter2 = function(callback){
        returnArray = []
        for(let i = 0; i < this.length; i++){
            if(callback(this[i], i, this)){
                returnArray.push(this[i])
            }
        }
        return returnArray
}


const produtos = [
    {nome:'nootbook', valor:2300, fragil:true},
    {nome:'ipad', valor: 2100, fragil:true},
    {nome:'Copo de vidro', valor:18.90, fragil:true},
    {nome:'Copo de plastico', valor:12.30, fragil:false}
]

console.log(produtos.filter2(function (p){
    return p.valor > 2000 && p.fragil == true
}))