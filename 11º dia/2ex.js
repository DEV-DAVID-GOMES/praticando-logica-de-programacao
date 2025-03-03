// Crie três arrays, um para guardar  os modelos, um para guardar os anos e um para guardar os valores do carro

// Utilizando o WHILE, peça para o usuário cadastrar novos carros(modelo, ano e valor), popule os 3 arrays nas mesmas posições.

// Seu usuário deve definir quando parar de inserir informações.

// - Exiba o nome, ano e valor dos carros inseridos.
//        ex: Celta, 2020 Valor: 50.000

// Ordene seus vetores pelo preço dos carros. (Aqui você deve usar seu algoritmo de ordenação, não use os nativos do javascript, como o OrderBy)


let modelos = []
let valores = []
let continuar = true
let anos = []
let i = 1

while (continuar) {

    let modelo = prompt(`Insira o modelo do carro:`)
    modelos.push(modelo)

    let ano = parseFloat(prompt(`Insira o ano do carro:`))
    anos.push(ano)

    let valor = parseFloat(prompt(`Insira o valor do carro:`))
    valores.push(valor)

    continuar = prompt("Deseja ainda inserir informações: (s/n)")

    if (continuar === 'n') {
        continuar = false
        continue;
    }

    i++
}
console.log("CARROS CADASTRADOS")
for (let i = 0; i < modelos.length; i++) {
    console.log(`MODELO: ${modelos[i]}- ANO: ${anos[i]}- VALOR: ${valores[i]}`)
}


for (let i = 0; i < valores.length - 1; i++) {
    for (let j = 0; j < valores.length - i - 1; j++) {
        if (valores[j] > valores[j + 1]) {

            let modeloMaiorValor = modelos[j]
            modelos[j] = modelos[j + 1]
            modelos[j + 1] = modeloMaiorValor

            let anoMaiorValor = anos[j]
            anos[j] = anos[j + 1]
            anos[j + 1] = anoMaiorValor

            let maiorValor = valores[j]
            valores[j] = valores[j + 1]
            valores[j + 1] = maiorValor
        }
    }
}
console.log(' ')
console.log("Carros ordenados pelo preço:")
for (let i = 0; i < modelos.length; i++) {
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i])

}