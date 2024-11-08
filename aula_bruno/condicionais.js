//consdicionais (estrutura de decisao)
//4 fundamentos condicionais,laços de repetiçao,
// iF/else

// let num = parseFloat(entrada.question('informe um numero qualquer:'))
// let raiz = Math.sqrt(num)// seja esperto, trapaceie, nao é errado. o bruno quer q faça isso
// console.log(raiz)

// if('b'=='b'){

// console.log("ola")
// }
// else{
// console.log("tchau")
// }

// if(10 < 5)
// {
//   console.log('menor que 5')
// }
// else
// {
//     console.log('maior que 5')
// }

//escopos
// let numero = 5
// if(numero > 10){
//     numero = numero + 10
// }
// console.log(numero)

//global






const entrada = require('readline-sync')  


// let idade = parseInt(entrada.question('idade?:'))
// if(idade >= 18)
// {
//     console.log('maior de idade')
// }
// else{
//     console.log('menor de idade')
// }

// let num = parseFloat(entrada.question('me fale um numero:'))
// let total = n/2






// let num = parseFloat(entrada.question('me fale um numero:'))
// let total = n/2 
// if(n/2 == 0)
// {
// 	alert("Par")
// 	console.log('par')
// }
// else
// {
	
// }





// let num = parseFloat(entrada.question('me fale um numero:'))
 
// if (num % 2 == 0) 
// {
//   console.log('Par')
// } else {
//   console.log('Ímpar')
// }




// let nota1 = parseFloat(entrada.question('nota 1:'))
// let nota2 = parseFloat(entrada.question('nota 2:'))
// let nota3 = parseFloat(entrada.question('nota 3:'))
// let nota4 = parseFloat(entrada.question('nota 4:'))

// let media = (nota1 + nota2 + nota3 + nota4) / 4

// if(media >= 7)
// {
// 	console.log('aprovado')
// }
// else{
// 	console.log('reprovado')
// }






//EXERCICIO 1
// let horas_mes = parseFloat(entrada.question('me fale o numero de horas trabalhadas no mes:'))
// let salario_por_hora = parseFloat(entrada.question('me fale o salario por hora:'))
// let salario_total = (horas_mes * salario_por_hora)

// let horas_extra = ((salario_total - horas_mes) * 1.5)

// if(horas_mes > 160)
// {
// 	console.log(extra)

// }
// else
// {
// 	console.log(salario_total)
// }

//EXERCICIO 2
// let fixo = parseFloat(entrada.question('me fale o salario fixo:'))
// let valor_vendas = parseFloat(entrada.question('me fale o valor das vendas:'))
// let comissao 

// if(valor_vendas <= 1500){
// 	comissao = valor_vendas * 0.03
// }
// else{
// 	comissao = (1500 * 0.03) + ((valor_vendas - 1500) *  0.05)
// }
// let salariototal = fixo + comissao
// console.log(salariototal)

//EXERCICIO 3
// let saldo  = parseFloat(entrada.question('saldo:'))
// let debito = parseFloat(entrada.question('debito:'))
// let credito = parseFloat(entrada.question('credito:'))
// let saldo_atual = (saldo - debito + credito)
// if(saldo_atual >= 0)
// {
// 	console.log('saldo positivo')
// }
// else
// {
// 	console.log('saldo negativo')
// }

//EXERCICIO 4

// let preço_gasolina = parseFloat(entrada.question('preco que deseja abastecer:')) 
// let valor_do_pagamento = parseFloat(entrada.question('valor que deseja pagar:')) 
// let litros_abastecidos = (preço_gasolina / valor_do_pagamento)

//  console.log( 'voce conseguira com R$' + preço_gasolina + ' ' + 'abastecer essa quantidade de litros:' + litros_abastecidos)

//EXERCICIO 5 

// let num_cavalo = parseFloat(entrada.question('quantos cavalos precisam de racao?:'))
// let quant_diaria_por_cav = 1.2
// let quant_total = quant_diaria_por_cav * num_cavalo * 30
// console.log('quantidade necessaria de ração para o mes:' + quant_total  + 'kg')



//EXERCICIO 6

// let dia = parseFloat(entrada.question('Informe o dia:'))
// let mes = parseFloat(entrada.question('Informe o mes (1 a 12):'))
// let ano = parseFloat(entrada.question('informe o ano:'))

// if(dia <= 0 | mes < 1 | mes > 12){
//     console.log('por favor forneca entradas validas.')
// }
// else{
//     let dias_passados = (mes - 1) * 30 + dia
//     console.log(`Desde o início do ano até ${dia}/${mes}/${ano}, passaram-se ${dias_passados} dias.`)
// }





//rascunho de aula pra nao esquecer

// == ----> comparação

