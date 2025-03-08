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