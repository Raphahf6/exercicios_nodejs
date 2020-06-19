// ## Importe a biblioteca ##
let ls = require("readline-sync")



// ## Faça o código ##

let dia = ls.question('Por favor informe a data do seu aniversario no formato exemplo: 01   ')
let mes = ls.question('Por favor digite o mes do seu aniversario. exemplo: 06   ')
let day = dia
let month = mes

if (month < 1 || month > 12){
    console.log('mês invalido')
}

  else if (day < 1 || day > 32){
      console.log('dia invalido')
  }

  else if ((month == 1 && day < 20) || (month == 12 && day >= 22))

    {  console.log('Capricornio')

    }

  else if ((month == 2 && day < 19) || (month == 1 && day >= 22))

    {  console.log('Aquario')
    }

  else if ((month == 3 && day < 21) || (month == 2 && day >= 24))

    {  console.log('Peixes')

    }

  else if ((month == 4 && day < 20) || (month == 3 && day >= 23))

    {  console.log('Aries')

    }

  else if ((month == 5 && day < 21) || (month == 4 && day >= 23))

    {  console.log('Peixes')

    }

  else if ((month == 6 && day < 22) || (month == 5 && day >= 23))

    {  console.log('Gemeos')

    }

  else if ((month == 7 && day < 23) || (month == 6 && day >= 22))

    {  console.log('Cancer')

    }

  else if ((month == 8 && day < 23) || (month == 7 && day >= 21))

    {  console.log('Leao')

    }

  else if ((month == 9 && day < 23) || (month == 8 && day >= 20))

    {  console.log ('Virgem')

    }

  else if ((month == 10 && day < 24) || (month == 9 && day >= 21))

    {  console.log ('Libra')

    }

  else if ((month == 11 && day < 22) || (month == 10 && day >= 19))

    {  console.log('Escorpião')

    }

  else if ((month == 12 && day < 22) || (month == 11 && day >= 20))

    {  console.log('Sagitario')

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