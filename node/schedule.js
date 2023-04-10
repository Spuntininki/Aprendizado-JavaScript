const node_schedule = require('node-schedule')

const tarfa1 = node_schedule.scheduleJob('*/5 * 15 * * 6', () => {
    console.log('Processo da Tarefa 1')
})


setTimeout(() => {
    tarfa1.cancel()
    console.log('cancelando a tarefa 1')
}, 20000)


const regra = new node_schedule.RecurrenceRule()
regra.dayOfWeek = [new node_schedule.Range(1, 6)]

regra.second = 10

const tarefa2 = node_schedule.scheduleJob(regra, () => {
    console.log('Processo da Tarefa 2')
})
