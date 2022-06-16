class Bike {

  public ride() {
    console.log('Broooom!');
  }
}

class Car {
  public ride() {
    console.log('peeeeep!');
  }
}

class Bicycle {
  public ride() {
    console.log('------');
  }
}

class Vehicle<T extends Bike> {

}


const ins = new Vehicle<Bike>();
(ins as Bike).ride()
