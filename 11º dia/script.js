// Crie um array para receber os nomes dos alunos e outro para receber as notas;

// Para cada aluno inserido pergunte o nome e a nota da prova;

// Seu usuário deve ter a opção de parar de inserir informações quando desejar;

// No final exiba a nota de cada aluno, a soma das notas e a média geral da turma. Para calcular a média deve dividir a soma das notas pelo total de alunos.

let nomes = []
let notas = []
let parar
let somaNotas = 0
let i = 1

console.log('LISTA DOS ALUNOS E SUAS NOTAS')
while (parar !== 2) {

    let nome = prompt(`Insira o nome do ${i}º aluno:`)
    nomes.push(nome)

    let nota = parseFloat(prompt(`Insira a nota do ${i}º aluno`))
    somaNotas += nota
    notas.push(nota)


    parar = parseFloat(prompt("Deseja ainda inserir informações:\n 1- sim\n 2- não"))
    console.log(`Aluno: ${nomes[i - 1]}\n Nota: ${notas[i - 1]}`)
    i++
}

console.log(`A soma da nota de todos os alunos é: ${somaNotas}`)
console.log(`A média geral da turma é: ${somaNotas / nomes.length}`)