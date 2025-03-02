//1º Crie um algoritmo que receba um número inteiro positivo e um array. Popule o array e no final exiba os índices em que número inserido aparece nesse array. Para testes do exercício use até 10 elementos no array.

const array = []
const indices = []
let contadorIndice = 0

const numeroProcurado = parseFloat(prompt("Insira o numero que vc procura: "))

for(let i = 0; i < 10; i++) {
    const elemento = parseFloat(prompt(`Insira o elemento ${i + 1}:`))
    array[i] = elemento
}

for(let i = 0; i < 10; i++) {
    if(array[i] === numeroProcurado) {
        indices[contadorIndice] = i
        contadorIndice++
    }
}

console.log(`O numero ${numeroProcurado} foi encontrado nos indices: ${indices}`)