//Encapsular é criar atributos ou metodos privados

class Cofre{

  //Atriubtos privados

  #senha
  #saldo

  constructor(senha){

    //Usamos this para acessar atributos e métodos privados

    this.#senha = senha

    this.#saldo = 0
  }

  //Criamos esse método privado porque a verificacao 'if(this.#senha === senha)' se repetia varias vezes nos codigos abaixo

  #verificarSenha(senha){
    return senha === this.#senha
  }


  //Usamos this para acessar atributos e métodos privados

  verSaldo(senha){
    if(this.#verificarSenha(senha)){
        console.log(`O seu saldo atual é: ${this.#saldo}`)
    }
  }

  depositar(senha,valor){
    if(this.#verificarSenha(senha)){
      this.#saldo += valor
      console.log(`Você depositou ${valor}. Saldo atual: ${this.#saldo}`) 
    }
  }

  sacar(senha,valor){
    if(this.#verificarSenha(senha)){
      if(valor > this.#saldo){
        console.log("O valor de saque é maior que o saldo disponível")
      }
      else{
        this.#saldo -= valor
        console.log(`Você sacou ${valor}. Saldo atual: ${this.#saldo}`)
      }
    }
  }
}

const conta = new Cofre('12345')
conta.verSaldo('12345')
conta.depositar('12345',100)
conta.sacar('12345',70)


