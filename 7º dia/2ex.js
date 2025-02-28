let nome
let cpf
let saldo = 100
let continuar
let maiorValor = 0
let somaValores = 0
let totalTransacoes = 0

nome = prompt("Insira o seu nome:")
cpf = prompt("Insira o seu CPF:")

do {

    const opcao = parseInt(prompt(`O que você deseja fazer\n \nSALDO ATUAL R$${saldo} \n1- Saque\n 2- Depósito`))

    if (opcao === 1) {
        let valor = parseFloat(prompt("Insira o valor do saque:"))

        if (valor <= 0) {
            console.log("Valor inválido. A transação não foi realizada!")
            continue;
        }
        if (valor > saldo) {
            console.log("Saldo insuficiente. A transação não foi realizada!")
            contiinue;
        }
        saldo -= valor
        totalTransacoes++
        somaValores += valor

        if (valor > maiorValor) {
            maiorValor = valor

        }
        console.log(`Transação realizada com sucessso. Seu saldo atual é: R$${saldo}`)

    }else if (opcao === 2) {
            let valor = parseFloat(prompt("Insira o valor do depósito:"))

            if (valor <= 0) {
                console.log("Valor inválido. A transação não foi realizada!");
                continue;
            }
            saldo += valor
            totalTransacoes++
            somaValores += valor
        if (valor > maiorValor) {
            maiorValor = valor
        } 
        console.log(`Transação realizada com sucessso. Seu saldo atual é: R$${saldo}`)

    }else {
        console.log("Opção inválida! Escolha 1 para saque ou 2 para depósito.");
        continue;       
     }

     continuar = parseFloat(prompt("Deseja continuar\n 1- para coninuar\n 2- para parar"))

} while (continuar !== 2)

console.log(`SALDO TOTAL: R$${saldo}\n \n Cliente: ${nome}\n CPF: ${cpf}`)
console.log(`O maior valor inserido(independente de ser depósito ou saque) é: ${maiorValor}`)
console.log(`a média dos valores inseridos(independente de ser depósito ou saque) é: R$${somaValores / totalTransacoes}`)