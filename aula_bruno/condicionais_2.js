const entrada = require('readline-sync')


// e (&&)  ou(||) sao condicionais


// let jogador_1 =  (entrada.question('Jogador 1, escolha pedra, papel ou tesoura: '))
// let jogador_2 = (entrada.question('Jogador 2, escolha pedra, papel ou tesoura: '))

// if (jogador_1 == 'pedra' && jogador_2 == 'papel')
// {
//     console.log(`${jogador_2} venceu`)
// }
// else if(jogador_1 == 'pedra' && jogador_2 == 'tesoura')
// {
//     console.log(`${jogador_1} venceu`)
// }
// else if (jogador_1 == 'pedra' && jogador_2 == 'pedra')
// {
//     console.log('Empate')
// }
// else if (jogador_1 == 'papel' && jogador_2 == 'pedra')
// {
//     console.log(`${jogador_1} venceu`)
// }
// else if (jogador_1 == 'papel' && jogador_2 == 'tesoura')
// {
//     console.log(`${jogador_2} venceu`)
// }
// else if (jogador_1 == 'papel' && jogador_2 == 'papel')
// {
//     console.log('empate')
// }
// else if (jogador_1 == 'tesoura' && jogador_2 == 'pedra')
// {
//     console.log(`${jogador_2} venceu`)
// }
// else if (jogador_1 == 'tesoura' && jogador_2 == 'papel')
// {
//     console.log(`${jogador_1} venceu`)
// }
// else if (jogador_1 == 'tesoura' && jogador_2 == 'tesoura')
// {
//     console.log('Empate')
// }


//EXERCICIOS -----------------------------------------------------------------------------------------


// let senha = entrada.question('Digite sua senha: ')
// if (senha ==123)
// {
//   console.log('Bem-vindo! seu saldo atual é de 100 reais\n1-Saque\n2-Deposito\n3-sair' )
//   let opcao = parseFloat(entrada.question('Digite sua opcao: '))
//     if(opcao == 1)
//     {
//         let saldo_atual = 100
//         let saque = parseFloat(entrada.question('Digite o valor que deseja sacar: '))
//         if(saque > saldo_atual || saque <= 0 || saque == null )
//         {
            // console.log('valor invalido')
//         }
//         else
//         {
//             let novo_saldo = saldo_atual - saque
//             console.log('saque realizado com sucesso, seu saldo atual é de: R$' + novo_saldo)
//             console.log('encerrando o programa')
//         }
//     }
//     else if(opcao == 2) 
//     {
//         let saldo_atual = 100
//         let deposito = parseFloat(entrada.question('Digite o valor do deposito: '))
//         let novo_saldo = deposito + saldo_atual
//         console.log('deposito realizado com sucesso, seu saldo atual é: R$' + novo_saldo)
//     } 
//     else if(opcao == 3)
//     {
//         console.log('encerrando o programa')
//     }
//     else{
//         console.log('encerrando o programa')
//     }
// } 
// else    
// {
//    console.log('senha incorreta :(')
// }



let opcao = 1 

switch (opcao) 
{
case 1:
      console.log('saque')
      break;
case 2:
      console.log('deposito')
      break;
case 3:
      console.log('sair')  
      break;    
default:
       console.log('invalido')
       break;
}