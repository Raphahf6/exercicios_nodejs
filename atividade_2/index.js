// ## Importe a biblioteca ##
let ls = require("readline-sync")



// ## Faça o código ##
console.log('=====================================================')
console.log('Bem vindo, vamos verificar se você esta combatendo o covid-19 do jeito certo ')
console.log('=====================================================')

let question1 = ls.question('Você esta usando a mascara de prevençao contra o covide-19 quando sai de casa? Responda sim ou nao ')
let question2 = ls.question('Esta lavando as maos frequentemente? Responda sim ou nao ')

let resultadoBom = question1 && question2 == 'sim'

 switch(resultadoBom) {
     case true: 
        console.log('Parabens') 
        break
     default: 
        console.log('Ruim') 
 }