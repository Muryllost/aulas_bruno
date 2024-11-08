
const entrada = require('readline-sync')  




//EXERCICIO 1---------------------------------------------------------------

// let numero = parseFloat(entrada.question('me fale um numero:'))
// let num_final

// if(numero > 0)
// {
//     num_final = 'positivo'
// }
// else if(numero < 0)
// {
//     num_final = 'negativo'
// }
// else{
//     num_final = 'zero'
// }
// console.log(num_final)



//EXERCICIO 2-----------------------------------------------------------------------------------

// let valor1 = parseFloat(entrada.question("Digite o primeiro valor: "))
// let valor2 = parseFloat(entrada.question("Digite o segundo valor: "))
// let valor3 = parseFloat(entrada.question("Digite o terceiro valor: "))

// if(valor1 == valor2 || valor1 == valor3 || valor2 == valor3)
// {
//     console.log('valores iguais')
// }
// else
// {
    let valor_ordenados = [valor1,valor2,valor3]
    valor_ordenados.sort()

//     console.log(valor_ordenados)

// }



//EXERCICIO 3---------------------------------------------------------------------------------

// let time1 = entrada.question('digite o nome do time 1:')
// let gols_time1 = parseFloat(entrada.question('digite o numero de gols do time 1 : '))
// let time2 = entrada.question('digite o nome do time 2:')
// let gols_time2 = parseFloat(entrada.question('digite o numero de gols do  time 2: '))

// let vencedor 

// if(gols_time1 > gols_time2)
// {
//     vencedor = time1
// }
// else if(gols_time2 < gols_time1)
// {
//     vencedor = time2
// }
// else
// {
//     vencedor = "empate".toUpperCase()

// }

// console.log(vencedor)


//EXERCICIO 4 -------------------------------------------------------------------------------

// let idade_h1 = parseFloat(entrada.question('me fale a idade do primeiro homem:'))
// let idade_h2 = parseFloat(entrada.question('me fale a idade do segundo homem:'))
// let idade_m1 = parseFloat(entrada.question('me fale a idade da primeira mulher:'))
// let idade_m2 = parseFloat(entrada.question('me fale a idade da segunda mulher:'))

// let h_velho
// let h_novo
// let m_velha
// let m_nova

// if(idade_h1 > idade_h2){
//     h_velho = idade_h1
//     h_novo = idade_h2
// }
// else
// {
//     h_velho = idade_h2
//     h_novo = idade_h1   
// }
// if(idade_m1 > idade_m2){
//     m_velha = idade_m1
//     m_nova = idade_m2
// }
// else
// {
//     m_velha = idade_m2
//     m_nova = idade_m1
// }
// let resultado1 = h_velho + m_nova
// let resultado2 = h_novo * m_velha

// console.log('A soma das idades do homem mais velho com a mulher mais nova é: '  +  resultado1)
// console.log('O produto das idades do homem mais novo com a mulher mais velha: '  +  resultado2)


//EXERCICIO 5---------------------------------------------------------------------------------------------------------------------

// let nome_funcionario = entrada.question('digite o nome do funcionario:')
// let salario = parseFloat(entrada.question('digite o salario do funcionario:'))
// let anos_trabalho = parseFloat(entrada.question('digite quantos anos ele trabalha na empresa:'))

// let porcentagem
// if(anos_trabalho <= 3)
// {
//     porcentagem = 3
// }
// else if(anos_trabalho >= 10)
// {
//    porcentagem = 12.5
// }
// else
// {
//     porcentagem = 20
// }

// let aumento = salario * (porcentagem / 100)
// let novo_salario =  salario + aumento

// console.log('nome' + nome_funcionario + '|' + 'salario' + salario + '|' + 'anos de trabalho'  + anos_trabalho + '|' + 'porcentagem'  + porcentagem + '|' + 'aumento' + aumento + '|' + 'novo salario' + novo_salario)


