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

    emprestimoDeLivro(nomeLivro) {
        let livro = this.acervoLivros.find(livro => livro.titulo === nomeLivro);
    
        if (!livro) {
            console.log("LIVRO NÃO ENCONTRADO!");
            return false;
        }
    
        if (!livro.disponibilidade) {
            console.log("LIVRO JÁ ESTÁ EMPRESTADO!");
            return false;
        }
    
        livro.disponibilidade = false;
        console.log(`LIVRO "${livro.titulo}" FOI EMPRESTADO COM SUCESSO.`);
        return true;
    }
    
}

function criarBiblioteca() {
    const nome = prompt("Digite o nome da biblioteca:");
    const endereco = prompt("Digite o endereço da biblioteca:");
    const telefone = prompt("Digite o telefone da biblioteca:");

    return new Biblioteca(nome, endereco, telefone);
}


const minhaBiblioteca = criarBiblioteca();
minhaBiblioteca.adicionarLivro("Dom Casmurro", "Machado de Assis", "Editora X", 1899, "Disponível");
minhaBiblioteca.buscarLivro("Dom Casmurro");



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