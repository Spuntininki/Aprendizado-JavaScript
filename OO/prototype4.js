function MeuObjeto(){

}



Function.prototype.idade = 15
MeuObjeto.prototype.nome = 'Billy'
obj1 = new MeuObjeto

console.log(obj1.__proto__, MeuObjeto.__proto__, obj1.idade )