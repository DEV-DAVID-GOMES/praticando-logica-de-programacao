let nomes = []
let senhas = []
let continuar = true

while (continuar) {

    let opcao = parseFloat(prompt("O QUE VOCÊ DESEJA FAZER\n \n 1- Cadastro\n 2- login\n 3- Excluir um cadastro\n 4- Encerrar o programa"))

    switch (opcao) {
        case 1:
            let nome = prompt("Insira o seu nome:")
            nomes.push(nome)

            let senha = prompt("Insira a sua senha:")
            senhas.push(senha)
            break;
        case 2:
            let nomeLogin = prompt("Insira o seu nome de login:")
            let senhaLogin = prompt("Insira a sua senha de login:")
            if (nomes.includes(nomeLogin) && senhas.includes(senhaLogin)) {
                alert("Login realizado com sucesso!")
            } else {
                alert("Dados fornecidos estão errados!")
            }
            break
        case 3:
            let nomeExcluir = prompt("Insira o nome que deseja excluir:")
            
            let indice = nomes.indexOf(nomeExcluir); 

            if (indice !== -1) { 
                nomes.splice(indice, 1); 
                senhas.splice(indice, 1);
                alert("Cadastro excluído com sucesso!");
            } else {
                alert("Nome não encontrado.");
            }
            break;
        case 4:
            continuar = false
            break;
        default:
            alert("Opção invalida, escolha outra!")
            break
    }
}
