'use strict';

// Object-oriented programming
// class : template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical suger over protype-based inheritance
// ES6 이후부터 도입된 개념

//  1. Class declarations
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.namee}:hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak;

// 2. Getter and Setters

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // call stack size exceeded 에러 발생할 수 있음
    // this.age 는 메모리에 올라가있는 값을 읽는게 아닌
    // 게터를 호출하게 됨
    // 값을 할당할 때도 메모리의 값을 업데이트 하는게 아닌
    // 세터를 호출하게 됨
    // 이 과정에서 세터 호출이 무한정 반복되면서
    // call stack이 초과하게 됨
    // 그러므로 게터와 세터의 변수명을 약간 다르게 작성함
    // 앞에 _ 를 붙혀서 주로 사용

    get age() {
        return this._age;
    }

    set age(value) {
        //if(value<0){
        //   throw Error('age can not be nagative'); 
        //}
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'job', -1);
console.log(user1.age);


// 3. Fields (public, private)

class Experiment {
    publicField = 2;
    //최근에 추가된 개념, # 기호를 붙혀서 표현, 클래스 내에서만 사용가능
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!

class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}


//static은 object마다 할당되는 것이 아닌
//클래스 자체에 붙어있는 것
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();
//Object에 상관 없이 변함 없는 값을 쓸 때
//static을 사용하면 메모리 사용을 줄일 수 있음

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape { }
class Triangle extends Shape {
    draw(){
        // 부모의 draw 메소드도 호출 되면서
        // 자식의 draw 메소드도 추가로 호출됨
        super.draw();
        console.log('?')
    }


    getArea() {
        return (this.width * this.height) / 2;
    }

    toString(){
        return `Triangle color : ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking : instanceOf

console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());
// JS역시 Object가 최상위 클래스..