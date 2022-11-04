// Métodos privados de clases
// Los métodos privados consiste en limitar el acceso a propiedades y métodos agregando el caracter numeral( #).Por defecto, las propiedades y métodos de una clase en JavaScript son públicas, es decir, se puede acceder a ellos fuera de la clase.

class MyClass {
  #private(value) {
    console.log(value)
  }

  public(value) {
    console.log(value)
  }
}

const myClass = new MyClass()
myClass.public("Hola")  // 'Hola'
myClass.private("Hola") // TypeError: myClass.private is not a function