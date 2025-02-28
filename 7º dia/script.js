//1º Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando a estrutura WHILE, e pergunte ao usuario se ele deseja cadastrar outra nota. No final, exiba no console:
//  - A média geral dos alunos
//  - Quantos homens enviaram as notas
//  - Quantas mulheres tiveram nota acima de 7
//  - Qual a maior nota entre os homens

let nota = 0
let sexo = ' '
let mediaGeral = 0
let quantidadeHomens = 0
let mulheresNotaAcima7 = 0
let maiorNotaHomens = 0
let contador = 1


while(contador <= 4) {
     nota = parseFloat(prompt(`Insira a nota do ${contador}º aluno:`))
     sexo = prompt(`Insira o sexo do ${contador}º aluno(f/m)`)

     if(sexo === 'm') {
      if(nota > maiorNotaHomens) {
         maiorNotaHomens =  nota
        }
        quantidadeHomens++ 
     }

     if(sexo === 'f' && nota > 7) {
        mulheresNotaAcima7++
     }
     mediaGeral += nota
     contador++
}

mediaGeral = mediaGeral / 4

console.log(`A média geral dos alunos é: ${mediaGeral}`)
console.log(`Quantidade de homens que enviaram as notas é: ${quantidadeHomens}`)
console.log(`Quantidade de mulheres que tiveram nota acima de 7 é: ${mulheresNotaAcima7}`)
console.log(`A maior nota entre os homens é: ${mediaGeral}`)

