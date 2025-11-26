class Animal{
  constructor(nome){
    this.nome = nome;
  }

  comer(){
    console.log("O animal está comendo")
  }
}

//Classe filha 'cachorro' herda atributos e metodos da classe pai 'Animal'

class Cachorro extends Animal{

  latir(){
    console.log("au au")
  }
}

const poodle = new Cachorro("Maggie");

console.log(poodle.nome);

//Quando a classe filha possui outros atributos além dos herdados da classe pai, podemos usar 'super" em seu consctructor para referenciar os atributos que vêm da classe pai

class Gato extends Animal{

  constructor(nome, raca){

    super(nome);

    this.raca = raca;
  }


  //Podemos sobrescrever um método que já existe na classe pai, quando queremos alterar algo nesse metodo aqui na classe filha. Porém, o nome do método e parametros permanecem o mesmo

  comer(){
    console.log(`O gato ${nome} da raça ${raca} está comendo`)
  }
}

const siames = new Gato("Magaly", "Siames")

console.log(siames.nome)                     