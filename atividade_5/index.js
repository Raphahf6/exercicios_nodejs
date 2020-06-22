// ## Importe a biblioteca ##
let ls = require("readline-sync")



// ## Faça o código ##
console.log('Bem vindo, esse app contara quantos caracteres você digitou ')
 let question = ls.question('Digite qualquer coisa ')

 console.log('Voce digitou ' + question.length + ' caracteres')