class Animals {
    constructor(protected birthDate: Date) { }
  }
  class Lion extends Animals {
    constructor(public name: string) {
      super(new Date());
    }
  }