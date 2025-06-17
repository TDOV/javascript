class livro {
  constructor(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }

}

const mybook2 = new livro("O mais lindo", "Cauã Rei Delas", 2025);
function msg() {
  console.log(
    `O titulo do livro ${mybook2.titulo}, Do escritor ${mybook2.autor} Que foi publicado em ${mybook2.ano}`
  );
}

msg(livro);
