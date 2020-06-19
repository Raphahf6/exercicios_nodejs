let ls = require("readline-sync")

let numVoo = ls.question('Qual o numero do seu voo ?')
let fileira = ls.question('Em qual fileira você deseja sentar?')

console.log('=====================================================')
console.log('Cartão de embarque para o voo de numero: ' +  numVoo)
console.log('Você sentara na fileira ' + fileira)
console.log('=====================================================')
