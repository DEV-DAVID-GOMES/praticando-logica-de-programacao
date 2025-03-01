let nome 
let idade 
let salario 
let confirmacao = 0
let aumento = 0.015


while (confirmacao !== 1) {
    nome = prompt("Insira seu nome:")
    idade = parseFloat(prompt("Insira a sua idade:"))
    salario = parseFloat(prompt("Insira o seu salário"))
    confirmacao = parseFloat(prompt("As informações foram preenchidas corretamente?\n 1º SIM\n 2º NÃO"))
} 

console.log("PREVISÃO SALARIAL PARA OS PRÓXIMOS 10 ANOS")

for(let ano = 1; ano <= 10; ano++) {
    salario += salario * aumento
    aumento *= 2

    console.log(`${2023 + ano} - R$${salario.toFixed(2)}`)
}