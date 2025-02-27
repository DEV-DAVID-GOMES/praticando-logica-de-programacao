// Crie um algoritmo que peça para o usuário escolher entre 3 opções em um posto de gasolina: abastecer com gasolina, com álcool ou calibrar os pneus.

//Se o usuário escolher abastecer com gasolina, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de gasolina = R$5) 

//Se o usuário escolher abastecer com álcool, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de álcool = R$3)

//Se o usuário escolher calibrar os pneus, exiba no console a mensagem: "pneus calibrados com sucesso".

let menu = parseFloat(prompt("POSTO DE GASOLINA\n \n(digite o numero para escolher)\n 1- Gasolina\n 2- Álcool\n 3- Calibrar os pneus"))
let valorAbastecimento 
switch (menu) {
    case 1:
        valorAbastecimento = parseFloat(prompt("Deseja abastecer quanto R$?"))
        alert(`Com seus R$${valorAbastecimento}, você conseguiu abastecer ${valorAbastecimento / 5}L de Gasolina`)
        break;
    case 2:
        valorAbastecimento = parseFloat(prompt("Deseja abastecer quanto R$?"))
        alert(`Com seus R$${valorAbastecimento}, você conseguiu abastecer ${valorAbastecimento / 3}L de Àlcool`)
        break;
    case 3:
        alert("Pneus calibrados com sucesso!")
        break;
    default:
        alert("dados fornecidos estão errados!")
}