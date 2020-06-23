// ## Importe a biblioteca ##
let ls = require("readline-sync")



// ## Faça o código ##

let dia = ls.questionInt('Por favor informe o dia do seu aniversario no formato exemplo: 01   ')
let mes = ls.questionInt('Por favor digite o mes do seu aniversario. exemplo: 06   ')

switch(mes){
  case mes > 12 && mes < 0:
    console.log('digite dados validos!')
    break
  case 1:
    dia <=20 ? console.log('capricornio') : console.log('aquario')
    break
  case 2:
    dia >= 19 ? console.log('Peixes') : console.log('aquario')
    break
  case 3:
    dia >= 21 ? console.log ('aries') : console.log('Peixes')
    break
  case 4:
    dia <= 21 ? console.log('Touro') : console.log('aries')
    break
  case 5:
     dia >= 21 ? console.log('gemeos') : console.log('touro')
     break
  case 6:
    dia >= 21 ? console.log('Cancer') : console.log('gemeos')
    break
  case 7:
    dia >= 23 ? console.log('leao') : console.log('cancer')
    break
  case 8:
    dia >= 23 ? console.log('virgem') : console.log('leao')
    break
  case 9:
    dia >= 23 ? console.log('libra') : console.log('virgem')
    break
  case 10:
    dia >= 23 ? console.log('escorpiao') : console.log('libra')
    break
  case 11:
    dia >= 22 ? console.log('sagitario') : console.log('escorpiao')
    break
  case 12:
    dia >= 22 ? console.log('capricornio') : console.log('sagitario')
}


//Áries: de 21 março a 20 abril
//Touro: de 21 abril a 20 maio
//Gêmeos: de 21 maio a 20 junho
//Câncer: de 21 junho a 22 julho
//Leão: de 23 julho a 22 agosto
//Virgem: de 23 agosto a 22 setembro
//Libra: de 23 setembro a 22 outubro
//Escorpião: de 23 outubro a 21 novembro
//Sagitário: de 22 novembro a 21 dezembro
//Capricórnio: de 22 dezembro a 20 janeiro
//Aquário: de 21 janeiro a 18 fevereiro
//Peixes: de 19 fevereiro a 20 março