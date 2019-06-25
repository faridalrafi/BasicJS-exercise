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

// Class
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
