class Person {
  name;
  surname;
  age;
  weight;
  height;
  imc;
  yearOfBirth;

  constructor(name, surname, age, weight, height) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.imc = this.calcIMC();
    this.yearOfBirth = this.calcYearOfBirth();
  }

  calcIMC() {
    return (this.weight / (this.height ** 2)).toFixed(2);
  }

  calcYearOfBirth() {
    return new Date().getFullYear() - this.age;
  }

  checkIMC() {
    if (this.imc < 18.5) {
      return 'abaixo do peso';
    } else if (this.imc < 24.9) {
      return 'com peso normal';
    } else if (this.imc < 29.9) {
      return 'com sobrepeso';
    } else if (this.imc < 34.9) {
      return 'com obesidade grau 1';
    } else if (this.imc < 39.9) {
      return 'com obesidade grau 2';
    } else {
      return 'com obesidade grau 3 ou mórbida';
    }
  }

  getIdealWeight() {
    return (24.9 * (this.height ** 2)).toFixed(2);
  }
}

const nome = 'Bruno';
const sobrenome = 'Lindoso';
const idade = 38;
const peso = 91;
const alturaEmM = 1.66;

const person1 = new Person(nome, sobrenome, idade, peso, alturaEmM);

console.log(`${person1.name} ${person1.surname} tem ${person1.age} anos, pesa ${person1.weight} kg`);
console.log(`tem ${person1.height} m de altura e seu IMC é de ${person1.imc}`);
console.log(`você nasceu em ${person1.yearOfBirth}`);
console.log(`você está ${person1.checkIMC()}`);
console.log(`seu peso ideal é de ${person1.getIdealWeight()} kg de acordo com a OMS`);

