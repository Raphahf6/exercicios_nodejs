// ## Importe a biblioteca ##
let ls = require("readline-sync")



// ## Faça o código ##
 console.log('Bem vindo, esse app contara quantos caracteres você digitou ')
 let name1 = ls.question('Digite o seu nome ')
 let name2 = ls.question('Digite o nome do segundo participante ')
 console.log('Obrigado ! vamos para a proxima fase')
 let inputUser1 = ls.question(name1 + ' Digite qualquer coisa')
 let inputUser2 = ls.question(name2 + ' Agora por favor segundo participante digite qualquer coisa')
 let lenght1 = inputUser1.length
 let lenght2 = inputUser2.length
 
if(lenght1 > lenght2){
    console.log('O participante ' + name1 + ' Digitou mais caracteres')
} else if (lenght1 < lenght2){
    console.log('O participante ' + name2 + ' Digitou mais caracteres')

}