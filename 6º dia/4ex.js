// 4º Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 número e exiba na tela qual o resultado da sua tabuada e dos próximos 2 números.

let numero = parseFloat(prompt("Insira um numero para a tabuada que você deseja:"))

for(let i = numero; i <= numero + 2; i++) {
    console.log(`tabuada do número: ${i}`)
    for(let j = 0; j <= 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`)
    } 
}