///DESAFIO 02
// Jogo da adivinhação
// Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. 
// O programa deverá escrever na tela se o usuário venceu ou perdeu.


const pense = +prompt('Pense em um número aleatório e deixe-me adivinhar');

const numeroAleatorio = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
console.log(numeroAleatorio);

if (pense == numeroAleatorio){
  console.log('Você ganhou')
} else {
  console.log('Você perdeu')
}
console.log('O número é: ' + numeroAleatorio);
