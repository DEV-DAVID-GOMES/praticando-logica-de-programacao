// 3º pergunte ao usuário quantos números ele deseja inserir no array. Depois, o usuário vai preenchendo elemento por elemento do vetor, ao final, exiba o array e o array ao contrário

let lista = []
let quantidadeNumeros = parseFloat(prompt("Quantos números você deseja inserir no array:"))


for(let i = 1; i <= quantidadeNumeros; i++){
    let numero = parseFloat(prompt(`Insira o ${i}º numero:`))
    lista.push(numero)
}
console.log(`Entrada: ${lista}`)
console.log(`Saída: ${lista.sort((a,b) => b - a)}`)

