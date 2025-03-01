//1º Escreva um algoritmo onde seu usuário deve informar nome, idade, peso, altura e profissão, a partir disso você deve exibir um texto com todas essas informações. Ex: Usuário inseriu nome: Giovanni, idade: 21, peso: 74kg, profissão: Programador, altura: 1.83, Você exibe: Olá Giovanni, você tem 21 anos, é programador, tem 1.83M de altura e pesa 74kg.

// Verifique se o usuário é maior ou menor de idade, se ele for maior exiba na tela “Está liberado para tomar umas geladas”, se ele for menor exiba “Sem gelada para você”.

// Utilize a idade informada pelo usuário, e mostre sua idade em meses, semanas e dias. Considere ano com 365 dias, mês com 30 dias e semana com 7 dias. 


let nome = prompt("Insira seu nome:")
let idade = parseFloat(prompt("Insira sua idade:"))
let peso = parseFloat(prompt("Insira seu peso:"))
let altura = parseFloat(prompt("Insira sua altura:"))
let profissao = prompt("Insira sua profissão:")

console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura e pesa ${peso}Kg`)

if(idade > 18) {
    console.log("Está liberado para tomar umas geladas")
}else {
    console.log("Sem gelada para você")
}

let dias = idade * 365
let mes = idade / 12
let semana = idade / 52

console.log(`SUA IDADE EM:\n DIAS: ${dias}\n MÊS: ${mes}\n SEMANAS: ${semana}`)