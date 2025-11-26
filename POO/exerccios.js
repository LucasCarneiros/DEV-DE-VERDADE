// Crie uma classe Carro com os atributos marca, modelo e ano. Em seguida, instancie dois objetos dessa classe com valores diferentes.

class Carro{
  constructor(marca,modelo,ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
}

const jeep = new Carro('jeep','JP2','2024')

const honda = new Carro('honda', 'XT2', '2023')

console.log(jeep, honda)

//Crie uma classe Pessoa que possui um método apresentar() que imprime no console um texto usando nome e idade. Instancie uma pessoa e chame o método.

class Aluno{
  constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
  }

  apresentar(){
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`)
  }
}

const aluno = new Aluno('Natália',15)

aluno.apresentar()

//Crie uma classe Produto e adicione um método que calcula o preço final somando o preço base e um imposto passado como parâmetro.


class Produto{
  constructor(precoBase,imposto){
    this.precoBase = precoBase
    this.imposto = imposto
  }

  calcular(){

   const precoFinal = this.precoBase + (this.imposto/100 * this.precoBase)

   return precoFinal

  }
}

const gasolina = new Produto(5.7, 10)

console.log(gasolina.calcular())

//Crie uma classe Retangulo com atributos largura e altura. Adicione um método que calcula a área. Crie um objeto e mostre a área.

class Retangulo{
  constructor(largura,altura){
    this.largura = largura;
    this.altura = altura
  }

  calcularArea(){
    const area = this.largura * this.altura

    return area
  }
}

const retangulo = new Retangulo(8,6)

console.log(retangulo.calcularArea())

//Crie uma classe ContaBancaria com saldo inicial definido no construtor e um método mostrarSaldo(). Instancie duas contas com saldos diferentes.

class ContaBancaria{
  constructor(saldoInicial){
    this.saldoInicial = saldoInicial
  }

  mostrarSaldo(){
    console.log(`O seu saldo inical é ${this.saldoInicial}`)
  }
}


const inter = new ContaBancaria(50.00)

inter.mostrarSaldo()


//Crie uma classe Usuario com um atributo privado #senha e um método para alterar a senha somente se uma senha atual correta for informada.

class Usuario{

  #senha

  constructor(senha){
    this.#senha = senha
  }

  alterarSenha(senha, novaSenha){
    if(this.#senha === senha){
      this.#senha = novaSenha
    }
  }

  verSenha(senha){
    if(this.#senha === senha){
      console.log(this.#senha)
    }
  }
}

const usuario = new Usuario('12345')

usuario.verSenha('12345')
usuario.alterarSenha('12345', '2469')
usuario.verSenha('2469')

//Crie uma classe Cofre com um atributo privado #codigo. Adicione métodos públicos para definir o código e verificar se um código digitado está correto.


class Cofre{
  #codigo

  definirCodigo(codigo){
    this.#codigo = codigo
  }

  verificarCodigo(codigo){
    if(this.#codigo === codigo){
      console.log("Código correto")
    }else{
      console.log("Codigo incorreto")
    }
  }
}

const cofre = new Cofre()

cofre.definirCodigo('2310')
cofre.verificarCodigo('2310')

//Crie uma classe Pedido com um valor privado #total. Adicione métodos adicionarItem(valor) e obterTotal() que retornam o total acumulado.

class Pedido{
  #total
  
  constructor(){
    this.#total = 0
  }
  

  adicionarItem(valor){
    this.#total += valor
  }

  obterTotal(){
    console.log(this.#total) 
  }
}

const pedido = new Pedido()

pedido.adicionarItem(4)
pedido.adicionarItem(7)
pedido.obterTotal()

//Crie uma classe Funcionario com nome público e salário privado. Crie métodos para aumentar salário e para consultar o salário atual.

class Funcionario{
  nome
  #salario

  constructor(nome, salario){
    this.nome = nome
    this.#salario = salario
  }

  verSalario(nome){
    if(this.nome === nome){
      console.log(`O salario do funcionario ${nome} é ${this.#salario} Reais`)
    }
    else{
      console.log("Funcionario nao encontrado")
    }
  }

  aumentarSalario(nome, valor){
     if(this.nome === nome){
      this.#salario += valor
      console.log(`Salário do funcionario ${nome} aumentado para ${this.#salario}`)    
    }
  }

}

const funcionario = new Funcionario("Marcelo", 1500)

funcionario.verSalario("Marcelo")
funcionario.aumentarSalario("Marcelo", 300)

//Crie uma classe ConfigSistema com propriedades privadas e um método público para retornar um objeto somente leitura com essas configurações.

class ConfigSistema{
  #id
  #senha
  #cpf

  constructor(nome,senha,cpf,id){
    this.nome = nome
    this.#senha = senha
    this.#cpf = cpf
    this.#id = id
    
  }

  retornarConfig(nome, senha){
    if(this.nome === nome && this.#senha === senha){
      console.log(`Configuracoes do sistema id: ${this.#id} e cpf: ${this.#cpf}`)
    }
  }
}

const configSistema = new ConfigSistema("Lucas", "12345", "14078327435", "54321")

configSistema.retornarConfig("Lucas", "12345")

//Crie uma classe Animal com um método falar(). Crie as classes Cachorro e Gato que herdam de Animal e sobrescrevem o método falar().

class Animal{

  falar(){
    console.log('O animal está falando')
  }
}

class Cachorro extends Animal{

  falar(){
    console.log('Au au')
  }
}

class Gato extends Animal{

  falar(){
    console.log('Miau')
  }
}

//Crie uma classe Veiculo com marca e ano. Crie a classe Moto que herda de Veiculo e adiciona o atributo cilindrada.

class Veiculo{

  constructor(marca, ano){
    this.marca = marca
    this.ano = ano
  }
}

class Moto extends Veiculo{

  constructor(marca, ano, cilindrada){
    super (marca,ano)
    this.cilindrada = cilindrada
  }
}

const moto = new Moto('honda','2025', 20)

console.log(moto)

//Crie uma classe base Conta com saldo. Crie as subclasses ContaCorrente e ContaPoupanca, cada uma adicionando comportamentos específicos.

class Conta{
  #saldo
  #senha

  constructor(saldo, senha){
    this.#saldo = saldo
    this.#senha = senha
  }

  getSaldo(){
    return this.#saldo
  }

  debitar(valor){
    this.#saldo -= valor
  }

  verificarSenha(senha){
    return this.#senha === senha
  }
}

  class ContaCorrente extends Conta{

    constructor(saldo, senha){
      super(saldo, senha)
    }

    usarChequeEspecial(senha,valor){
      if(this.verificarSenha(senha)){
        if((this.getSaldo() - valor) < -500){
          console.log("O cheque especial nao pode deixar um valor negativado menor que -500")
        }
        else{
          this.depitar(valor)
          console.log(`O seu saldo após o cheque especial é ${this.getSaldo()}`)
        }
      }
    }
  }

  class ContaPoupanca extends Conta{

    constructor(saldo,senha){
      super(saldo,senha)
    }
  }

  const contaCorrente = new ContaCorrente(500, '12345')

  contaCorrente.usarChequeEspecial('12345',1000)

//Crie uma classe Pagamento com um método processar(). Crie duas subclasses PagamentoPix e PagamentoCartao, cada uma com sua implementação do método.

class Pagamento{

  constructor(saldo){
    this.saldo = saldo
  }

  processar(){
    console.log("Pagamento sendo processado")
  }
}

  class PagamentoPix extends Pagamento{

    constructor(saldo){
      super(saldo)
    }

    processar(valor){
     if(this.saldo < valor){
      console.log(`Saldo insuficiente.`)
     }
     else{
      this.saldo -= valor
      console.log(`Pix efetuado com sucesso, o seu saldo atual é ${this.saldo}`)
     }
    }

  }

  class pagamentoCartao extends Pagamento{

    constructor(saldo, credito){
      super(saldo)
      this.credito = credito
    }

    processar(valor){
      if(this.credito < valor){
        console.log(`Crédito insuficiente`)
      }
      else{
        this.credito -= valor
        console.log(`Pagamento efetuado com sucesso. Credito atual: ${this.credito}`)
      }
    }
  }

  const pagamentocartao = new pagamentoCartao(300,1000)
  const pagamentopix = new PagamentoPix(200)

  pagamentocartao.processar(500)
  pagamentopix.processar(100)



//Crie a classe Midia com atributo titulo. Crie subclasses Filme e Musica, cada uma com atributos específicos e um método para exibir detalhes.

class Midia{
  constructor(titulo){
    this.titulo = titulo
  }

  exibirDetalhes(){
    console.log(`Titulo: ${this.titulo}`)
  }
}

class Filme extends Midia{
  constructor(titulo,diretor){
    super(titulo)
    this.diretor = diretor
  }

  exibirDetalhes(){
    console.log(`Titulo: ${this.titulo}, Diretor: ${this.diretor}`)
  }
}

class Musica extends Midia{
  constructor(titulo,compositor){
    super(titulo)
    this.compositor = compositor
  }

   exibirDetalhes(){
    console.log(`Titulo: ${this.titulo}, Compositor: ${this.compositor}`)
  }

}

const musica = new Musica('The boy is mine', 'Brandy')

musica.exibirDetalhes()



//Crie uma classe Forma com um método calcularArea(). Crie as subclasses Quadrado e Circulo, cada uma implementando seu próprio cálculo.

class Forma{

  calcularArea(){

  }
}

class Quadrado extends Forma{
  calcularArea(lado){
    return lado**2
  }
}

class Circulo extends Forma{
  calcularArea(raio){
    return 3.14 * (raio**2)
  }
}

const circulo = new Circulo()

console.log(circulo.calcularArea(5))

//Crie uma classe Funcionario com um método calcularBonus(). Crie subclasses Gerente e Estagiario, cada uma implementando o cálculo de bônus de forma diferente.

class Funcionarios{
  constructor(salario){
    this.salario = salario
  }

  calcularBonus(){

  }
}

class Gerente extends Funcionarios{
  constructor(salario){
    super(salario)
  }

  calcularBonus(bonus){
    this.salario += bonus 
  }
}

class Estagiario extends Funcionarios{
   constructor(salario){
    super(salario)
  }

  calcularBonus(){
    this.salario += this.salario * 0.05
  }
}

//Crie uma classe base Transporte com o método mover(). Crie Carro, Bicicleta e Avião, cada um implementando o método com comportamentos distintos.

class Transporte{

  mover(){

  }
}

class Carros extends Transporte{
  mover(km){
    console.log(`O carro andou ${km} km`)
  }
}

class Bicicleta extends Transporte{
  mover(km){
    console.log(`Você pedalou ${km} km`)
  }
}

class Aviao extends Transporte{
  mover(partida, destino){
    console.log(`O Aviao saiu de ${partida} e chegou a ${destino}`)
  }
}


const aviao = new Aviao()

aviao.mover('São Paulo', 'Recife')



//Crie uma função que recebe um array de objetos de diferentes formas (Quadrado, Circulo, Triangulo) e chama calcularArea() para cada um, demonstrando polimorfismo na prática.

//Obs: Nao sei se esse foi o melhor jeito de fazer


class FormasGeometricas{
  constructor(){
  }

  calcularArea(){}
}

class Quadrados extends FormasGeometricas{
  constructor(lado){
    super()
    this.lado = lado
  }

   calcularArea(){
    return this.lado**2 
   }
}

class Triangulos extends FormasGeometricas{
  constructor(base, altura){
    super()
    this.base = base
    this.altura = altura
  }

  calcularArea(){
    return (this.base * this.altura) / 2
  }
}

class Circulos extends FormasGeometricas{
  constructor(pi, raio){
    super()
    this.pi = pi
    this.raio = raio
  }

  calcularArea(){
    return this.pi * this.raio**2 
   }
}


function poligonos(...formas){

  for(const elemento of formas){
    console.log(elemento.calcularArea())
  }
}

poligonos(new Triangulos(4,5),new Quadrados(4), new Circulos(3.14,2))