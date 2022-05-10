'use strict';

// Object-oriented programming
// class : template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical suger over protype-based inheritance
// ES6 이후부터 도입된 개념

//  1. Class declarations
class Person{
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak(){
        console.log(`${this.namee}:hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak;

// 2. Getter and Setters

class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this.age;
    }

    set age(value){
        this.age = value;
    }
}

const user1 = new User('Steve', 'job', -1);
console.log(user1.age);

