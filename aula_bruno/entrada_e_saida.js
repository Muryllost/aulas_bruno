//usando a biblioteca no codigo
const entrada = require('readline-sync')  
let nome = entrada.question('qual seu nome?:')
console.log("bem vindo:" + nome)
let idade = entrada.question('qual sua idade?:')
let cidade = entrada.question('onde voce mora?:')
let agradecimento = entrada.question('bem vindo' + nome + " " + 'de' + idade)



let resposta = entrada.question('muito obrigado por ter me respondido!')


// usando conversao de dados

const entrada = require('readline-sync')  


let num = parseFloat(entrada.question('digite um numero:'))
let num2 = parseFloat(entrada.question('digite outro numero:'))
let num3 = parseFloat(entrada.question('digite outro numero:'))
let num4 = parseFloat(entrada.question('digite outro numero:'))
let media = (num * num2 * num3 * num4 ) / 4
console.log(media)





let tempc = parseFloat(entrada.question('informe a temperatura:'))
let f = tempc * 1.8 + 32
console.log(f)




//toUpperCase() e toLowerCase()  ------------------------------

let frase = 'bom dia turma'
let frase_maiuscula = frase.toUpperCase()
console.log(frase_maiuscula)


let frase2 = 'bom dia turma'
let frase_minusculo = frase.toLowerCase()
console.log(frase_minusculo)


trim()// -> remove os espaços vazioa mo
//começa e final de uma string

let senha =' adm '
let senha_corrigida = senha.trim()
console.log(senha_corrigida)

let frase = ' hoje fui a aula '
let frase_maiuscula = frase.toUpperCase()
let frase2 = frase_maiuscula.trim()
console.log(frase2)




let num = parseFloat(entrada.question('informe um numero qualquer:'))
let raiz = Math.sqrt(num)// seja esperto, trapaceie, nao é errado. o bruno quer q faça isso
console.log(raiz)





