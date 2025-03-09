// 1- Crie dois arrays: arrayA e arrayB. Preencha os dois arrays com 10 números cada, pode declarar já com valores;

//   let arrayA = [13,20,10,22,24,20,27,17,19,14]
//   let arrayB = [24,22,23,11,15,17,29,14,16,21]

// 2 - Implemente uma função que receba dois arrays como parâmetro. Essa função deve retornar um array que contenha apenas os números em comum nos dois arrays recebidos como parâmetro.

// 3 - Se um número se repetir apenas no mesmo array, ele NÃO deve ser adicionado como um número comum.

// 4 - No array de saída NÃO deve ter números repetidos


let arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14];
let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21];

function numerosEmComum(arr1, arr2) {
    let resultado = [];
    
    arr1.forEach(num => {
        if (arr2.includes(num) && !resultado.includes(num)) {
            resultado.push(num);
        }
    });

    return resultado;
}

let resultado = numerosEmComum(arrayA, arrayB);
console.log(resultado);
