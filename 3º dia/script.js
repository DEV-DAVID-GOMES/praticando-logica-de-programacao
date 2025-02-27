// Crie um sistema que peça para o seu usuário as seguintes informações: nome, idade, altura e peso. 

//  Salve essas informações em variáveis e a partir delas obtenha o ano de nascimento (considere o ano atual como 2023, desconsidere o mês) e o IMC do usuário.

//    *O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula: 

//     IMC = peso / (altura x altura)

//  Exiba no console a seguinte mensagem (substituindo pelas informações obtidas): "Olá giovanni, você tem 23 anos, nasceu em 2000, tem 1,83 de altura, pesa 75kg seu IMC é 22,39 Kg/m2" 

let nome = prompt("Insira o seu nome:")
let idade = parseFloat(prompt("Insira sua idade:"))
let altura = parseFloat(prompt("Insira sua altura:"))
let peso = parseFloat(prompt("insira seu peso:"))

let anoNasc = 2023 - idade
let imc = peso / (altura * altura)

console.log(`Olá ${nome}, você tem ${idade} anos, nasceu em ${anoNasc}, tem ${altura} de altura, pesa ${peso}kg e seu IMC é ${imc.toFixed(3)} kg/m2`)