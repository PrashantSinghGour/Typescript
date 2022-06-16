

function classDeco(target: any) {
  console.log('Class decorator called', target);
}

function propertyDeco(target: any, name: string) {
  console.log('Property decorator called', target, name);
}

function getterDeco(target: any, name: string) {
  console.log('Getter decorator called', target, name);
}

function methodDeco(...args: any[]) {
  console.log('Method decorator called', args);
}

function paramDeco(...args: any[]) {
  console.log('Parameter decor called', args);
}


@classDeco
class Bird {

  @propertyDeco
  public name: string

  constructor(name: string) {
    this.name = name;
  }

  @getterDeco
  get birdName() {
    return this.name;
  }

  @methodDeco
  fly(@paramDeco speed: number) {
    console.log(`bird flying at ${speed}`);
  }
}

const newBird = new Bird('peacock');

newBird.fly(234);
