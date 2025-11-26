//Polimorfismo é quando objetos de classes diferentes respondem ao mesmo método de maneiras distintas.

class Animal {
  falar() {}
}

class Cachorro extends Animal {
  falar() {
    return "Au au";
  }
}

class Gato extends Animal {
  falar() {
    return "Miau";
  }
}

function emitirSom(animal) {
  console.log(animal.falar());
}

emitirSom(new Cachorro()); // "Au au"
emitirSom(new Gato());     // "Miau"
