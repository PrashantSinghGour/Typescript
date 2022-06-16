

class Add<T> {
  public array: Array<T> = [];
  constructor() {

  }

  public getArray() {
    console.log(this.array);
  }
}

const instanceNumber = new Add<number>();
instanceNumber.array.push(23);
instanceNumber.getArray();

const instanceString = new Add<string>();
instanceString.array.push('instanceNumber');
instanceString.array.push('instanceNumber1');
instanceString.getArray();
