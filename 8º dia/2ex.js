//2º Calcule o IMC do seu usuário e informe a faixa dele.

// *O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula: IMC = peso / (altura x altura)
// O peso deve estar em kg e a altura em metros, e o resultado é dado em kg/m2. Depois de obter o resultado, é possível verificar em que faixa o IMC se encontra, podendo indicar:

//       - Magreza, quando o resultado é menor que 18,5 kg/m2;
//       - Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;   
//       - Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
//       - Obesidade, quando o resultado é maior que 30 kg/m2.

// A partir da idade informada descubra o ano que o seu usuário nasceu(Considere o ano atual como 2023, faça essa conta usando apenas o ano).



let peso = parseFloat(prompt("Insira o seu peso:"))
let altura = parseFloat(prompt("Insira a sua altura:"))
let idade = parseFloat(prompt("Insira a sua idade:"))
let imc = peso / (altura * altura)
let anoNasc = 2023 - idade


if(imc < 18,5) {
    console.log(`Voce nasceu ${anoNasc} anos, e o seu IMC é: Magreza`)
}else if(imc < 24,9) {
    console.log(`Voce nasceu ${anoNasc} anos, e o seu IMC é: Normal`)
}else if(imc < 30) {
    console.log(`Voce nasceu ${anoNasc} anos, e o seu IMC é: Sobrepeso`)
}else {
    console.log(`Voce nasceu ${anoNasc} anos, e o seu IMC é: Obsidade`)
}