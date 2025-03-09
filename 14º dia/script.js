// 1- Crie uma função que pergunte o nome e o salário de um colaborador;

// 2 - Depois crie uma função que deve ser chamada dentro da função que solicita as informações, essa função irá calcular o aumento de salário conforme a seguinte tabela:
//        - ATÉ R$1.500,00 : aumento de 20%
//        - R$1.501,00 até R$2.000,00 : aumento de 15%
//        - R$2.001,00 até R$3.000,00 : aumento de 10%
//        - R$3.001,00 em diante : aumento de 5%
// 3-Depois de calcular o aumento você deve exibir: o nome do colaborador, o salário, a % de aumento e o salário reajustado.

// 4 - Crie uma função que  deve ser chamada no final da função que calcula o reajuste salarial, essa função deve perguntar se o usuário deseja calcular novamente com novas informações.

// 5 - Para testar basta chamar a primeira função criada, e as outras serão chamadas na sequência conforme a execução do código


function colaborador() {
    let nome = prompt("Insira o nome do colaborador:")
    let salario = parseFloat(prompt("Insira o sálario do colaborador:"))

    function ajusteDeSalario() {
        let salarioAjustado

        if (salario <= 1500) {
            salarioAjustado =  salario * 1.20
            console.log(`O nome do colaborador: ${nome}\n Salàrio: R$${salario}\n, seu salário reajustado com aumento de 20%: R$${salarioAjustado}`)

        } else if (salario > 1500 && salario <= 2000) {
            salarioAjustado = salario * 1.15
            console.log(`O nome do colaborador: ${nome}\n Salàrio: R$${salario}\n, seu salário reajustado com aumento de 15%: R$${salarioAjustado}`)
        } else if (salario > 2000 && salario <= 3000) {
            salarioAjustado = salario * 1.10
            console.log(`O nome do colaborador: ${nome}\n Salàrio: R$${salario}\n, seu salário reajustado com aumento de 10%: R$${salarioAjustado}`)
        } else {
            salarioAjustado = salario * 1.05
            console.log(`O nome do colaborador: ${nome}\n Salàrio: R$${salario}\n, seu salário reajustado com aumento de 5%: R$${salarioAjustado}`)
        }
        
  }
        function calcularDeNovo() {
            let menu = parseFloat(prompt("Deseja calcular novamente com novas infromações:\n 1- SIM\n 2- NÂO"))
            if(menu === 1) {
               colaborador()
            }
            
        }

        ajusteDeSalario();
        calcularDeNovo();
}

colaborador()