const entrada = require('readline-sync')

//EXERCICIO 1-------------------------------------------------------------------------------------------------------------------

let emprestimo = parseFloat(entrada.question("Digite o valor do emprestimo desejado: "))
let taxa_juros = parseFloat(entrada.question("Digite a taxa de juros aplicada: "))
let periodo = parseFloat(entrada.question("Digite o periodo de pagamento desejado: "))
let renda = parseFloat(entrada.question("digite o valor da renda mensal: "))

let juros_decimal = taxa_juros / 100
let parcela = (emprestimo * juros_decimal ) / (1 - Math.pow(1 + taxa_juros, -periodo))
let valor_parcela = (parcela / renda) * 100

if(valor_parcela < 30)
{
console.log("EMPRESTIMO APROVADO!!")
}
else
{
  console.log("EMPRESTIMO NEGADO!!")
}

//EXERCICIO 2-----------------------------------------------------------------------------------------------------------------------

let ano = parseFloat(entrada.question("digite o ano desejado: "))

if(ano % 400 == 0)
{
    console.log("Ano Bissexto")
}
else if(ano % 4 == 0 && ano % 100 != 0)
{
    console.log("Ano Bissexto")
}
else
{
    console.log("Nao é Ano Bissexto")
}


//EXERCICIO 3---------------------------------------------------------------------------------------------------------------------------

let veiculo = entrada.question("Informe o tipo de veiculo (carro, moto ou caminhao): ")
let eixos = parseFloat(entrada.question("Informe o numero de eixos: "))
let Pedagio 
    
if(veiculo == "carro") 
{
 if(eixos == 2) 
    {
     Pedagio = 10.00
   } else {
    console.log("Numero de eixos invalido")
   }
} 
else if(veiculo == "moto")
{
   if(eixos == 2) {
   Pedagio = 5.00
 } else{
  console.log("Numero de eixos invalido")
   }
 } 
 else if(veiculo == "caminhao") 
 {
   if(eixos == 2) {
       Pedagio = 20.00
  }else if    
  (eixos >= 3) 
  {
    Pedagio = 30.00
  } else {
    console.log("Numero de eixos invalido")
  }
}
 else 
{
   console.log("Veiculo invalido")
}
    
  if(Pedagio) 
{
  console.log(`O valor do pedagio para um ${veiculo} com ${eixos} eixos e R$${Pedagio}`)
}

//EXERCICIO 4 (DESAFIO) -----------------------------------------------------------------------------------------------------------------

let senha = entrada.question("digite uma senha para ser verificada: ")

console.log("Verificando senha...")

if(senha.length <= 8)
{
    console.log("A senha esta muito curta!!")
}
else if(!/[A-Z]/.test(senha))
{
    console.log("A senha precisa ter letras maiusculas!!")
}
if(!/[a-z]/.test(senha))
{
    console.log("A senha precisa ter letras minusculas!!")
}
else if(!/[0-9]/.test(senha))
{
    console.log("A senha precisa ter numeros!!")
}
if(!/[!@#$%^&*(),.?":{}<>]/.test(senha))
{
    console.log("A senha precisa ter caracteres especiais!!")
}
else
{
    console.log("Senha segura!!")
}

