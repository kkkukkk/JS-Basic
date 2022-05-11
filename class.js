'use strict';

// Object-oriented programming
// class : template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical suger over protype-based inheritance
// ES6 ���ĺ��� ���Ե� ����

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

    // call stack size exceeded ���� �߻��� �� ����
    // this.age �� �޸𸮿� �ö��ִ� ���� �д°� �ƴ�
    // ���͸� ȣ���ϰ� ��
    // ���� �Ҵ��� ���� �޸��� ���� ������Ʈ �ϴ°� �ƴ�
    // ���͸� ȣ���ϰ� ��
    // �� �������� ���� ȣ���� ������ �ݺ��Ǹ鼭
    // call stack�� �ʰ��ϰ� ��
    // �׷��Ƿ� ���Ϳ� ������ �������� �ణ �ٸ��� �ۼ���
    // �տ� _ �� ������ �ַ� ���

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
    //�ֱٿ� �߰��� ����, # ��ȣ�� ������ ǥ��, Ŭ���� �������� ��밡��
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


//static�� object���� �Ҵ�Ǵ� ���� �ƴ�
//Ŭ���� ��ü�� �پ��ִ� ��
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();
//Object�� ��� ���� ���� ���� ���� �� ��
//static�� ����ϸ� �޸� ����� ���� �� ����

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
        // �θ��� draw �޼ҵ嵵 ȣ�� �Ǹ鼭
        // �ڽ��� draw �޼ҵ嵵 �߰��� ȣ���
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
// JS���� Object�� �ֻ��� Ŭ����..