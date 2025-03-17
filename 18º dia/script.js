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
        this.acervoLivros = []
    }
}

function criarBiblioteca() {
    const nome = prompt("Digite o nome da biblioteca:");
    const endereco = prompt("Digite o endereço da biblioteca:");
    const telefone = prompt("Digite o telefone da biblioteca:");

    return new Biblioteca(nome, endereco, telefone);
}

const minhaBiblioteca = criarBiblioteca();
console.log(minhaBiblioteca);

while(continuar) {
    

    continuar = parseFloat(prompt("deseja adicionar mais livro:\n 1- SIM\n 2- NÃO"))
    if(continuar === 2) {
        continuar = false

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