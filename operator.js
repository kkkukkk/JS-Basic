// 1. String concatenation
console.log('my'+' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1+2}`);

// 2. Numeric operators

console.log(1+1);   // add
console.log(1-1);   // substract
console.log(1/1);   // divide
console.log(1*1);   // multiply
console.log(1%1);   // remainder
console.log(1**1);  // exponentiation


// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter; 와 같은 의미
// 값을 증가시킨 뒤 변수에 값을 할당

const postIncrement = counter++;
// 변수 값을 할당한 뒤에 counter를 증가시킴

const preDecrement = --counter;
const postDecrement = counter--;

// JS 에서도 += <= 식의 연산자 사용 가능

// 6. logical operators: || && !
const value1 = false;
const value2 = 4<2; // false;

// or 연산자는 처음으로 true가 나오면 멈춰버림
console.log(`or: ${value1 || value2 || check()}`);
// value1이 true이면 함수가 동작하지 않고 true인 상태로 종료되어버림!
// simple한 value들을 앞에 두고 무거운 함수는 뒤에 배치하는 것이 좋음

// and연산자는 모두 true 일 때 동작
console.log(`and: ${value1 && value2 && check()}`)
// or과 마찬가지로 false가 나오면 함수가 동작하지 않고 종료되어버림
// nullcheck에서 자주 사용

function check(){
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('?');
    }
    return true;
}

// not 연산자는 논리를 반대로

// == loose equality, with type conversion
const stringFive = '5';
const numberFive = 5;

console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false
// 타입이 달라도 값이 같으면 true 

// === strict equality, no type.conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
// ===는 타입까지 신경써서 같은지 확인
// 되도록이면 strict equality를 사용해서 확인할 것!

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);  // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true
// ellie1의 reference를 ellie3에 할당했으므로 true가 나오게됨


console.log(0 == false);            // true
console.log(0 === false);           // false
console.log('' == false);           // true
console.log('' === false);          // false
console.log(null == undefined);     // true
console.log(null === undefined);    // false

