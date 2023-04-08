//padrão middleWare

const passo1 = (ctx, next) => {
    ctx.valor1 = 'passo1'
    next()
}

const passo2 = (ctx, next) => {
    console.log(ctx)
    ctx.valor2 = 'passo2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'passo3'

const exec = (ctx, ...middlewares) => {
    
    const executeSteps = (indice) => {
        if(middlewares && indice < middlewares.length){
            middlewares[indice](ctx, () => {
                executeSteps(indice + 1)
            })
        }
        
    }
    executeSteps(0)
}

const ctx = {}

exec(ctx, passo3, passo2, passo1 )
console.log(ctx)