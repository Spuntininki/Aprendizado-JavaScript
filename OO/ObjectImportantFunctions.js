const obj = {
a:1,
b:2,
c:3
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

Object.entries(obj).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
})

Object.defineProperty(obj, 'random',  {
    enumerable:true,
    writable: true,
    value: 'dasdas'
})

console.log(obj)