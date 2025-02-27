// Crie um algoritmo que peça 2 números ao usuário
//Utilizando o switchCase dê a opção do usuário escolher qual operação matemática será realizada com esses números
//Exiba no console a operação feita e o resultado da conta


let menu = parseFloat(prompt("Você deseja usar qual operação de matemática para sua conta\n \n(digite o numero para escolher o operador) \n1- Adição\n 2- Subtração\n 3- Multiplicação\n 4- Divisão"))

let num1 = parseFloat(prompt("Insira o 1º numero:"))
let num2 = parseFloat(prompt("Insira o 2º numero:"))

switch (menu) {
    case 1:
        alert(`O resultado da adição entre ${num1} e ${num2} é: ${num1 + num2}`)
        break;
    case 2:
        alert(`O resultado da subtração entre ${num1} e ${num2} é: ${num1 - num2}`)
        break;
    case 3:
        alert(`O resultado da multiplicação entre ${num1} e ${num2} é: ${num1 * num2}`)
        break;
    case 4:
        alert(`O resultado da divisão entre ${num1} e ${num2} é: ${num1 / num2}`)
        break;
    default:
        alert("dados fornecidos errados!")
        let menu = parseFloat(prompt("Você deseja usar qual operação de matemática para sua conta\n \n(digite o numero para escolher o operador) \n1- Adição\n 2- Subtração\n 3- Multiplicação\n 4- Divisão"))
}