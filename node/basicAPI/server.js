const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./pseudoDataBase')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/produtos', (req, res, next) => {
    res.send(dataBase.products)
})

app.get('/produtos/:id', (req, res, next) => {
    const id = req.params.id
    res.send(dataBase.getProduct(id))
})

app.post('/produtos', (req, res, next) => {
    const product = {
        id: req.body.id,
        nome: req.body.nome,
        valor: req.body.valor
        
    }
    dataBase.saveProduct(product)
    res.send(product)
})

app.put('/produtos/:id', (req, res, next) => {
   const product = { 
    id: req.params.id,
    nome: req.body.nome,
    valor: req.body.valor
    }
    dataBase.saveProduct(product)
    res.send(product)
}
)

app.delete('/produtos/:id', (req, res, next) => {
    const deletedProduct = dataBase.getProduct(req.params.id)
    dataBase.deleteProduct(req.params.id)
    res.send(deletedProduct)

})

app.listen(port, () => {
    console.log(`O servidor está escutando na porta ${port}`)
})