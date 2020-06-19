// ## Importe a biblioteca ##
let ls = require("readline-sync")



// ## Faça o código ##
console.log('=====================================================')

console.log('Bem vindo, vamos calcular o tamanho do quadrado? ')

console.log('=====================================================')

let question = ls.question('por favor digite o tamanho do lado do quadrado')

let areaQuadrado = question

let calculaQuadrado = areaQuadrado * areaQuadrado

console.log('a area total do quadrado é ' + calculaQuadrado+ 'cm2')
