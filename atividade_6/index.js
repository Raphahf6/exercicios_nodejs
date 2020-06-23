// ## Importe a biblioteca ##
let ls = require("readline-sync")



// ## Faça o código ##
 console.log('Bem vindo, esse app contara quantos caracteres você digitou ')
 let name1 = ls.question('Digite o seu nome ')
 let name2 = ls.question('Digite o nome do segundo participante ')
 console.log('Obrigado ! vamos para a proxima fase')
 let user1 = ls.question(name1 + ' Digite qualquer coisa')
 let user2 = ls.question(name2 + ' Agora por favor segundo participante digite qualquer coisa')
 console.log(name1 + ' você digitou ' + user1.length + ' caracteres!')
 console.log(name2 + ' você digitou ' + user2.length + ' caracteres!')
 let vencedor = user1.length > user2.length // inicializa a variavel se o primeiro participante digitou mais caracteres que o participante 2

switch(vencedor){
    case true:
        console.log('Parabens ' + name1 + ' você ganhou')
    break
    case false:
        console.log(name2 + ' ganhou')
        break
}