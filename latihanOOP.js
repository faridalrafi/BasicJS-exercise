// ES6 Classes

class Person {
  constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  } 

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  set favColour(color){
    this.color = color
    // statement
  }
  get favColour() {
    return `Warna favoritnya : ${this.color}`
  }
  getBirthYear(){
    return this.dob.getFullYear();
  }
}
module.exports = Person
const person1 = new Person('Farid', 'Rafi', '4-3-1985');

person1.favColour = 'Green'
console.log(person1.favColour)
//console.log(person1.fullName)

// Player 
/* 
 Healt point 0- 100
 Energi 0 - 50

 terbang Energi yg terpakai = 10
 bergerak = 5
 kiri , kanan, maju dan mundur
*/

// Constructor function

function Person(firstName, lastname, dob){
  this.firstName = firstName;
  this.lastName = lastname;
  this.dob = new Date(dob);
  this.getBirthYear = function() {
      return this.dob.getFullYear();
  }
  this.getFullName = function() {
      return `${this.firstName} ${this.lastName}`;
  }
}

Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();

}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

// Class method
class Person {
  constructor(firstName, lastName, dob){
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = new Date(dob);
  }
  getBirthYear() {
      return this.dob.getFullYear();
  }

  getFullName() {
      return `${this.firstName} ${this.lastName}`;

  }
}

// Initiate Object
const person1 = new Person('Farid', 'Rafi', '4-3-1985');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1.getBirthYear());
console.log(person1.getFullName());


// static method

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx*dx + dy*dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));