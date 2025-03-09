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
