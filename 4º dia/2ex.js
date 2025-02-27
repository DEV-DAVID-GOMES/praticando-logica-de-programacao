// Crie um sistema que peça para o seu usuário as seguintes informações: nome, idade, se possuí carta de motorista e se tem algum carro.

// Se o usuário não for maior de idade ou não tiver carta exiba no console: "Giovanni, você não pode dirigir".

// Se o usuário for maior de idade, tiver carta mas não tiver carro exiba no console: "Giovanni, você pode dirigir mas não tem um carro".

// Se o usuário for maior de idade, tiver carta e carro exiba no console: "Giovanni, você será o motorista!"

let nome = prompt("Insira seu nome:")
let idade = parseFloat(prompt("Insira sua idade:"))
let cnh = prompt("Você possui CNH: (s/n)")
let carro = prompt("Você possui carro: (s/n)")

if(idade < 18 || cnh === 'n') {
    console.log(`${nome}, você não pode dirigir!`)
}else if(idade >= 18 && cnh === 's' && carro === 'n') {
    console.log(`${nome}, você pode dirigir mas não tem um carro!`)
}else if(idade >= 18 && cnh === 's' && carro === 's') {
    console.log(`${nome}, você será o motorista!`)
}else {
    console.log("dados fornecidos errados!")
}