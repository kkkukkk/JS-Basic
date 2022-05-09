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
// preIncrement = counter; �� ���� �ǹ�
// ���� ������Ų �� ������ ���� �Ҵ�

const postIncrement = counter++;
// ���� ���� �Ҵ��� �ڿ� counter�� ������Ŵ

const preDecrement = --counter;
const postDecrement = counter--;

// JS ������ += <= ���� ������ ��� ����

// 6. logical operators: || && !
const value1 = false;
const value2 = 4<2; // false;

// or �����ڴ� ó������ true�� ������ �������
console.log(`or: ${value1 || value2 || check()}`);
// value1�� true�̸� �Լ��� �������� �ʰ� true�� ���·� ����Ǿ����!
// simple�� value���� �տ� �ΰ� ���ſ� �Լ��� �ڿ� ��ġ�ϴ� ���� ����

// and�����ڴ� ��� true �� �� ����
console.log(`and: ${value1 && value2 && check()}`)
// or�� ���������� false�� ������ �Լ��� �������� �ʰ� ����Ǿ����
// nullcheck���� ���� ���

function check(){
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('?');
    }
    return true;
}

// not �����ڴ� ���� �ݴ��

// == loose equality, with type conversion
const stringFive = '5';
const numberFive = 5;

console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false
// Ÿ���� �޶� ���� ������ true 

// === strict equality, no type.conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
// ===�� Ÿ�Ա��� �Ű�Ἥ ������ Ȯ��
// �ǵ����̸� strict equality�� ����ؼ� Ȯ���� ��!

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);  // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true
// ellie1�� reference�� ellie3�� �Ҵ������Ƿ� true�� �����Ե�


console.log(0 == false);            // true
console.log(0 === false);           // false
console.log('' == false);           // true
console.log('' === false);          // false
console.log(null == undefined);     // true
console.log(null === undefined);    // false

const name = 'ellie';
if(name === 'ellie'){
    console.log('Welcome, Ellie!');
} else if (name === 'coder'){
    console.log('unknown');
}

// 9. Ternary operator:?
// condition ? value1 : value2;
console.log(name === 'ellie'?abc:def)

switch(browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('yes!');
        break;
    default:
        console.log('hi');
        break;
}

// loops
let i = 3;
while(i>0){
    console.log(`while: ${i}`);
    i--;
}

// do while

do{
    console.log(`do while: ${i}`);
    i--;
}while(i>0);

for(let i=3; i>0; i= i-2){
    console.log(`inline variabel for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}



