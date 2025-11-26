class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade
  }

  //Para criar metodos dentro de classes nao usamos a palavra 'function'

  falar(){
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade}`)
  }
}

const pessoa1 = new Pessoa("Lucas", 18)

pessoa1.falar()

