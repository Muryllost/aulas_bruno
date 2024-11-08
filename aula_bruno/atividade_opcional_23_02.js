const entrada = require('readline-sync')


// //EXERCICIO 1-------------------------------------------------------------------------

// let capital = parseFloat(entrada.question('digite o valor do capital:'))
// let taxa_juros = parseFloat(entrada.question('digite a taxa de juros em %:'))
// let tempo_aplic = parseFloat(entrada.question('digite o tempo de aplicacao em anos :'))

// let juros_simples = (capital * taxa_juros * tempo_aplic)
// console.log('o valor dos juros simples é:' + juros_simples)



// //EXERCICIO 2-----------------------------------------------------------------------------------

// let capital_empresa = parseFloat(entrada.question("Digite o valor do capital:"))
// let taxa_Juros = parseFloat(entrada.question("Digite a taxa de juros em %:"))
// let tempo = parseFloat(entrada.question("Digite o tempo de aplicacao em anos:"))

// let calculo_juros = capital_empresa * Math.pow((1 + taxaDeJuros / 100), tempo)
// let  jurosCompostos = montante - capital_empresa


// console.log('O valor dos juros compostos é:' + jurosCompostos)


// //EXERCICIO 3 ------------------------------------------------------------------------------------------

// let valor_real = parseFloat(entrada.question('digite o valor de uma quantia em real: '))
// let valor_Dolar = 0.20
// let valorDolar =(valor_real * valor_Dolar)
// console.log('a quantia digitada convertida em dolar é: $' + valorDolar)

// //EXERCICIO 4------------------------------------------------------------------------------------------------

// let valor = parseFloat(entrada.question('digite o valor do produto: $'))
// let desconto = parseFloat(entrada.question('digite o valor do desconto em %: '))
// let valor_descontado = (valor * desconto)

// let valor_final = valor - valor_descontado

// console.log(valor_final)

// // EXERCICIO 5---------------------------------------------------------------------------------------------------------

// let num_secreto = Math.random(0 && 11)
// let palpite = parseFloat(entrada.question('Descubra o numero entre 1 a 10: '))
// if (palpite > num_secreto)
// {
//     console.log(parseFloat(entrada.question('esse numero e menor do que' + ' ' + palpite + ' ' +  'voce tem somente mais duas chances: ')))
// }
// else if(palpite < num_secreto)
// {
//     console.log(parseFloat(entrada.question('esse numero e maior do que' + ' ' + palpite + ' ' + 'voce tem somente mais duas chances: ')))
// }
// else if (palpite == num_secreto)
// {
//     console.log('parabens Você acertou!')
// }

// //EXERCICIO 6-------------------------------------------------------------------------------------------
let jogador_1 =  (entrada.question('Jogador 1, escolha pedra, papel ou tesoura: '))
let jogador_2 = (entrada.question('Jogador 2, escolha pedra, papel ou tesoura: '))

if (jogador_1 == 'pedra' && jogador_2 == 'papel')
{
    console.log(`${jogador_2} venceu`)
}
else if(jogador_1 == 'pedra' && jogador_2 == 'tesoura')
{
    console.log(`${jogador_1} venceu`)
}
else if (jogador_1 == 'pedra' && jogador_2 == 'pedra')
{
    console.log('Empate')
}
else if (jogador_1 == 'papel' && jogador_2 == 'pedra')
{
    console.log(`${jogador_1} venceu`)
}
else if (jogador_1 == 'papel' && jogador_2 == 'tesoura')
{
    console.log(`${jogador_2} venceu`)
}
else if (jogador_1 == 'papel' && jogador_2 == 'papel')
{
    console.log('empate')
}
else if (jogador_1 == 'tesoura' && jogador_2 == 'pedra')
{
    console.log(`${jogador_2} venceu`)
}
else if (jogador_1 == 'tesoura' && jogador_2 == 'papel')
{
    console.log(`${jogador_1} venceu`)
}
else if (jogador_1 == 'tesoura' && jogador_2 == 'tesoura')
{
    console.log('Empate')
}

