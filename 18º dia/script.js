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



while(continuar) {
    
    let titulo  = prompt("Insira o titulo do livro:")
    let autor = prompt("Insira o nome do autor:")
    let editora = prompt("Insira o nome da editora:")
    let anoPublicacao = prompt("Insira o ano de publicação:")

  
    const novoLivro = new Livro(titulo, autor, editora, anoPublicacao)
    livros.push(novoLivro)

    continuar = parseFloat(prompt("deseja adicionar mais livro:\n 1- SIM\n 2- NÃO"))
    if(continuar === 2) {
        continuar = false

    }
}

console.log(livros)