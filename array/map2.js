const estoque = [
    '{"produto":"Caderno", "valor":5.3}',
    '{"produto":"Caneta", "valor":2.3}',
    '{"produto":"Borracha", "valor":3.0}',
    '{"produto":"Lapis", "valor":1}',
]

valores = estoque.map(e => JSON.parse(e)['valor'] )
console.log(valores)