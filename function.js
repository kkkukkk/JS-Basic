// function
// - fundamental building block in the programs
// function name(param1, param2){body....return;}
// �ϳ��� �Լ��� �� ������ �ϸ� �ϵ���
// naming : doSomething, command, verb

function printHellow() {
    console.log('Hello');
}

printHellow();

// function log(mesage) {
//     console.log(message);
// }
// log('Hello@');
// log(1234);

// TypeScript ����
// function log(message : string) : number {
//     console.log(message);
//     return 0;
// }

// JavaScript ����
// "use strict";
// function log(message){
//     console.log(message);
//     return 0;
// }


// 2. Parameters
// premetive parameters : passed by value
// object parameters: passed by reference

function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3.  default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('hi!');
// ȣ�� �� �޼����� �����ؼ� ȣ��
// ������ ���޵Ǿ� ���� �����Ƿ� undefined
// from = 'unknown' ���� default �� ����

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'conding', 'ellie');
// �Ķ���͵��� �迭�� �����Ͽ� ���

// 5. local scope
let globalMessage = 'global'; // global
function printMessage() {
    let message = 'hello'; // local
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        let childMessage = 'hello';
    }
    // console.log(childMessage); // error
}

// early return, early exit
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// ��� �ȿ��� ������ ����� ��� ������ �ʾ���

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic..
}


// function expression

const print = function (){
    console.log('print');
};
print();
// �Լ��� ������ �Ҵ��� �� ����

const printAgain = print;
printAgain();
// �Լ��� �Ҵ�� ������ ������ �Ҵ��� �� ����
// �Լ� �״�� ����

const sumAgain = sum;
console.log(sumAgain(1, 3));
// �Լ��� ���� ���� ȣ���� �� ����

// 2.Callback function using function expression

function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
};

// anonymous function
const printYes = function (){
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print(){
    console.log('no!');
    // print(); // ����� ���,
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function

const simplePring = function(){
    console.log('simplePrint!');
};

// �� �Լ��� Arrow function ���� ǥ��
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a+b;
const simpleMultiply = (a,b) =>{
    return a*b;
}
// Arrow ���� ����� ����Ϸ��� return�� ���־�� ��


// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();
// �Լ��� ����Ǹ鼭 ���ÿ� ���� ��.
