/*
Dicionário en-pt:
- fish: peixe
*/

// ABSTRACT:

// As classes abstratas não podem ser instanciadas, ou seja, você não pode criar um objeto a partir de uma classe abstrata.

// Métodos abstratos só podem existir em classes abstratas, e eles devem ser implementados na subclasse.

abstract class Animalqq {
    constructor(public name: string) { }
    abstract move(): void
  }
  class Birdqq extends Animalqq {
    move() { console.log(`${this.name} está voando.`); }
  }
  class Mammalqq extends Animalqq {
    move() { console.log(`${this.name} está andando.`); }
  }
  class Fishqq extends Animalqq {
    move() { console.log(`${this.name} está nadando.`); }
  }
  
  const a1 = new Fishqq('Tubarão');
  const b1 = new Birdqq('Papagaio');
  const m1 = new Mammalqq('Tatu');
  
  const myMoven = (animal: Animalqq) => {
    animal.move();
  }
  myMoven(a);
  myMoven(b);
  myMoven(m);
  
  /*
  Saída:
  Tubarão está nadando.
  Papagaio está voando.
  Tatu está andando.
  */

  // MÉTODO E ATRIBUTO ESTÁTICO:

  // Um método estático nada mais é do que uma função que não precisa acessar nenhum atributo do objeto.
  // 

  /*
Dicionário en-pt:
- employee: pessoa empregada/funcionária
- static: estático
*/

class Employee {
    private static employeeCount = 0
  
    constructor(public name: string) {
      Employee.addEmployee();
    }
  
    private static addEmployee() {
      this.employeeCount += 1;
    }
  
    static get employees() {
      return this.employeeCount;
    }
  }
  
  console.log(Employee.employees);
  const e1 = new Employee('Ronald');
  console.log(Employee.employees);
  const e2 = new Employee('Cíntia');
  console.log(Employee.employees);
  
  /*
  Saída:
  
  
  
  */
