// Variables en TS
let user: string = 'Jahiker';

let userId: number = 123456789;

let username: string | number = 'jahiker';

username = 2
username = 'Jahiker';

// Funciones en TS

const sum = (a: number, b: number) => {
  return `el resultado es ${a + b}`;
}
sum(1, 5);

const sum2 = (a: number, b: number): number => {
  return a + b;
}
sum2(2, 5);

const sum3 = (a: number, b: number): string => {
  return `el resultado es ${a + b}`;
}
sum3(8, 12);

// Clases en TS
class Person {
  public age: number;
  private lastName: string;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
}

class NewPerson {
  constructor(public age: number, private lastName: string) {

  }
}

const jahiker = new Person(35, 'Rojas');
