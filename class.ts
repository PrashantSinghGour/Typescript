

interface PHD {
  giveExam(): boolean;
}

type Human = {
  name: string;
  age: number;
};

class Humans implements PHD {

  public human: Human[] = [];
  constructor(public age, public name) {
    this.age = age;
    this.name = name;
    this.addHuman({ age, name });
  }

  giveExam(): boolean {
    return true;
  }

  addHuman(human: Human) {
    this.human.push(human);
  }
}

const human = new Humans(23, 'John');

human.addHuman({ age: 32, name: 'Mor' });

console.log(human);
