const produtos = [
    {nome:'nootbook', valor:2300, fragil:true},
    {nome:'ipad', valor: 2100, fragil:true},
    {nome:'Copo de vidro', valor:18.90, fragil:true},
    {nome:'Copo de plastico', valor:12.30, fragil:false}
]

console.log(produtos.filter(function (p){
    return p.valor > 2000 && p.fragil == true
}).filter(function(p){
    return p.nome == 'nootbook'
}))