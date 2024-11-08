const entrada = require('readline-sync')

//EXERCICIO 1---------------------------------------------------------------------------------------------
let produto = parseFloat(entrada.question('digite o valor do produto que escolheu: $'))
let desconto = 0

if (produto > 100) {
    desconto = 0.10
}
else if (produto >= 50 && 100) {
    desconto = 0.5
}
if (produto < 50) {
    desconto = 0
}
let valor_desconto = (produto * desconto)

let valor_final = produto - valor_desconto

console.log('considerando o valor de sua compra voce recebeu um desconto e seu valor final a pagar é: $' + valor_final)

// //EXERCICIO 2----------------------------------------------------------------------------------------------------------------

let salario = parseFloat(entrada.question('Me fale seu salario fixo: $'))
let valor_vendas = parseFloat(entrada.question('digite o valor total de suas vendas: $'))
let numero_carros = parseFloat(entrada.question('digite o numero de carros vendidos: '))
let comissao = parseFloat(entrada.question('digite o valor recebido de comissao por carro vendido (em porcentagem): '))


let salario_total = salario + (valor_vendas * 0.05) + (((comissao / 100) * numero_carros) * valor_vendas)

console.log('O salario do vendedor é de: $ ' + salario_total)

//EXERCICIO 3----------------------------------------------------------------------------------------------------------------------

let kg_morango = entrada.question('digite quantos kilos de morango deseja comprar: ')
let kg_maca = parseFloat(entrada.question('digite quantos kilos de maca deseja comprar: '))
let preco_morango = 2.50
let preco_maca = 1.80

if (kg_morango > 5) {
    preco = 1.80
}
if (kg_maca > 5) {
    preco = 1.50

}
let total = (kg_morango * preco_morango) + (kg_maca * preco_maca)

if( total > 25 || kg_maca + kg_morango > 8)
{
    console.log(`total: ${(total * 0.9)})`)
}