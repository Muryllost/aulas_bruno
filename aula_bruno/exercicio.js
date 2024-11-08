const entrada = require('readline-sync')

let numero = parseFloat(entrada.question("digite qualquer numero inteiro entre o e 10 para saber a tabuada dele: "))


if(numero >= 0 && numero <= 10)
{
console.log(`${numero} X ${numero * 1}`)
console.log(`${numero} X ${numero * 2}`)
console.log(`${numero} X ${numero * 3}`)
console.log(`${numero} X ${numero * 4}`)
console.log(`${numero} X ${numero * 5}`)
console.log(`${numero} X ${numero * 6}`)
console.log(`${numero} X ${numero * 7}`)
console.log(`${numero} X ${numero * 8}`)
console.log(`${numero} X ${numero * 9}`)
console.log(`${numero} X ${numero * 10}`)
}
else
{
    console.log('numero invalido! digite um numero entre 0 e 10')
}