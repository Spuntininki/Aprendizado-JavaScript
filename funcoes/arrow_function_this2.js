function ComparaThis(object){
    console.log(object === this)
}

const obj = {
    

    testa_this: function CompraThisObj(object){
        return object === this
    },

    testa_this2:object => object === this
}


console.log(obj.testa_this(obj))
console.log(obj.testa_this2(module.exports))




