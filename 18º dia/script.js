let livros = []

continuar = true

class Livro {
    constructor(titulo, autor, editora, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.anoPublicacao = anoPublicacao;
        this.disponibilidade = true

    }
}

class Biblioteca {
    constructor(nome, endereco, telefone) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.acervoLivros = []; // O acervo agora está na classe
    }

    adicionarLivro(titulo, autor, editora, anoPublicacao, disponibilidade) {
        this.acervoLivros.push({ titulo, autor, editora, anoPublicacao, disponibilidade });
    }

    buscarLivro(nomeLivro) {
        let livro = this.acervoLivros.find(livro => livro.titulo === nomeLivro);

        if (livro) {
            console.log(`TÍTULO DO LIVRO: ${livro.titulo}\nAUTOR: ${livro.autor}\nEDITORA: ${livro.editora}\nANO: ${livro.anoPublicacao}\nDISPONIBILIDADE: ${livro.disponibilidade}`);
        } else {
            console.log("LIVRO NÃO ENCONTRADO!");
        }
    }
}





// while(continuar) {
    
//     let titulo  = prompt("Insira o titulo do livro:")
//     let autor = prompt("Insira o nome do autor:")
//     let editora = prompt("Insira o nome da editora:")
//     let anoPublicacao = prompt("Insira o ano de publicação:")

  
//     const novoLivro = new Livro(titulo, autor, editora, anoPublicacao)
//     livros.push(novoLivro)

//     continuar = parseFloat(prompt("deseja adicionar mais livro:\n 1- SIM\n 2- NÃO"))
//     if(continuar === 2) {
//         continuar = false

//     }
// }

// console.log(livros)