String.prototype.reverse = function() { 
    return this.split('').reverse().join('')
}

if('lucas'.reverse() == 'sacul'){
    console.log('Deus')
}