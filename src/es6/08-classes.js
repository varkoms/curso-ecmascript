// ES6: Classes

// La palabra reservada class es una forma para crear clases y manejar la herencia en JavaScript, permitiendo resolver problemas con el paradigma de programación orientada a objetos (POO).

// class User {}; // Declarando una clase de JS

// const newUser = new User(); // Generamos una instancia de un objeto

// Constructor

class User {
  // Constructor que reciben parametros.
  // 'this' es el contexto al cual hace referencia al elemento padre que lo contiene
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
    // console.log('Nuevo usuario creado!');
  }

  // Getters / Setters

  get userName() {
    return this.name;
  }

  get userAge() {
    return this.age;
  }

  get userCountry() {
    return this.country;
  }

  set userName(n) {
    this.name = n;
  }

  set userAge(n) {
    this.age = n;
  }

  set userCountry(c) {
    this.country = c;
  }

  // Metodos
  speak() {
    return 'Hello';
  }

  greeting() {
    return `${this.speak()} ${this.name}. You have ${this.age} years old and You're from ${this.country}`;
  }
};

const varko = new User('Varko', 50, 'CO');
console.log(varko.greeting());
varko.userName = 'Cesar';
varko.userAge = 34;
varko.userCountry = 'MX';
console.log(varko.greeting());