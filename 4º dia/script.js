// - Crie um sistema que pergunte ao seu usuário se ele está com fome, se tem dinheiro e se o restaurante está aberto.

// Se estiver sem fome ou sem dinheiro exiba no console: "Hoje a janta será em casa"

//  Se estiver com fome e tiver dinheiro mas o restaurante estiver fechado exiba no console: "Peça um delivery!"

// Se estiver com fome, tiver dinheiro e o restaurante estiver aberto exiba no console: "Hoje o jantar será no seu restaurante preferido!"

let fome = prompt("Você estar com fome:(s/n)")
let dinheiro = prompt("Você tem dinheiro:(s/n)")
let restaurante = prompt("Restaurante está aberto:(s/n)")

if(fome === 'n' || dinheiro === 'n') {
    console.log("Hoje a janta será em casa")
}else if(fome === 's' && dinheiro === 's' && restaurante === 'n') {
    console.log("Peça um delivery!")
}else if(fome === 's' && dinheiro === 's' && restaurante === 's') {
    console.log("Jantar será no seu restaurante preferido!")
}else {
    console.log("dados fornecidos errados!")
}