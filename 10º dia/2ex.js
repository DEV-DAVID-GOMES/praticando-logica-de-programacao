//2º  Crie um algoritmo que peça 5 números ao usuário, coloque eles em um array, depois exiba esse array. Modifique os elementos do array de modo que a sequência de números fique ao contrário.

let lista = []

for(let contador = 1; contador <= 5; contador++){
    let numero = parseFloat(prompt(`Insira o ${contador}º numero:`))
    lista.push(numero)
}
console.log(`Entrada: ${lista}`)
console.log(`Saída: ${lista.sort((a,b) => b - a)}`)