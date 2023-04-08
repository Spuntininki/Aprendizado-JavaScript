const obj1 = {
    a: 1,
    b: 'String',
    c: null,
    func: function(){
        console.log('Hello')
    }
}

console.log(obj1)
console.log(JSON.stringify(obj1))
console.log(JSON.parse('{"a":null, "b":1.5}'))