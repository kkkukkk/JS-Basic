// function
// - fundamental building block in the programs
// function name(param1, param2){body....return;}
// 하나의 함수는 한 가지의 일만 하도록
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

// TypeScript 에선
// function log(message : string) : number {
//     console.log(message);
//     return 0;
// }

// JavaScript 에선
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
// 호출 시 메세지만 전달해서 호출
// 프롬이 전달되어 있지 않으므로 undefined
// from = 'unknown' 으로 default 값 지정

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
// 파라미터들을 배열로 저장하여 사용

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

// 블록 안에서 로직이 진행될 경우 리턴이 늦어짐

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
// 함수를 변수에 할당할 수 있음

const printAgain = print;
printAgain();
// 함수가 할당된 변수를 변수에 할당할 수 있음
// 함수 그대로 동작

const sumAgain = sum;
console.log(sumAgain(1, 3));
// 함수를 선언 전에 호출할 수 있음

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
    // print(); // 재귀적 사용,
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function

const simplePring = function(){
    console.log('simplePrint!');
};

// 위 함수를 Arrow function 으로 표현
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a+b;
const simpleMultiply = (a,b) =>{
    return a*b;
}
// Arrow 에서 블록을 사용하려면 return을 해주어야 함


// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();
// 함숙가 선언되면서 동시에 실행 됨.
