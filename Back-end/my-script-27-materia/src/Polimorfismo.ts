class Animalss {
    constructor(public name: string) { }
    move() { console.log(`${this.name} está se movendo.`); }
  }
  class Birdss extends Animalss {
    move() { console.log(`${this.name} está voando.`); }
  }
  class Mammalss extends Animalss {
    move() { console.log(`${this.name} está andando.`); }
  }
  
  const a = new Animalss('Tubarão');
  const b = new Birdss('Papagaio');
  const m = new Mammalss('Tatu');
  
  const myMove = (animal: Animalss) => {
    animal.move();
  }
  myMove(a);
  myMove(b);
  myMove(m);
  
  /*
  Saída:
  Tubarão está se movendo.
  Papagaio está voando.
  Tatu está andando.
  */