function Pessoa() {
    this.idade = 0

    self = this

    setInterval(function(){
        self.idade += 1
        console.log(self.idade)
    }, 1000)


}

new Pessoa