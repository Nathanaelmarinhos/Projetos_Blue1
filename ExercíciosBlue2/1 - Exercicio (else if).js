///*DESAFIO 01
// Reajuste salarial
// As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// salários até R$ 280,00 (incluindo) : aumento de 20%
// salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// salários de R$ 1500,00 em diante : aumento de 5%

let salario = +prompt('Qual o seu salário?');
salario = eval (salario);
// estrutura de controle abaixo informa se o funcionário receberá aumento ou não
if (salario <= 280){
console.log("Você recebeu um aumento de 20%. Seu novo salário é: ");
 }
 else if (salario > 280 && salario <= 700){
  console.log("Você recebeu um aumento de 15%")
 }
 else if(salario > 700 && salario <=1500){
   console.log('Você recebeu um aumento de 10%');
 }
 else if (salario > 1500) {
   console.log('Você recebeu um aumento de 5%');
 }
