/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

let empty = null;
console.log(empty);

// 2. 값이 할당되지 않은 상태
let undef;
console.log(undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = 'hello'; // string literal
const single = 'hello';
const backtick = `인도의 ${double / 30} 이 맛있다.`;

console.log(backtick);

const str = new String('hello'); // string constructor function

// console.log(typeof double, typeof single, typeof backtick);

// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 150; // number literal
const floatingPointNumber = 1.23;

const num = new Number(23); // number constructor function

console.log(floatingPointNumber);
console.log(typeof integer);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigInt = 123n;

console.log(typeof bigInt);

// 6. 참(true, yes) 또는 거짓(false, no)

const isActive = true;
console.log(typeof isActive);

const bool = new Boolean(true);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const obj = {
  name: 'tiger',
  age: 42,
};

const obj_1 = new Object();

console.log(typeof obj);

// 8. 고유한 식별자(unique identifier)
const uuid = Symbol('uuid');
const uuid2 = Symbol('uuid');

console.log(uuid === uuid2);

console.clear();

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

function a() {}

a();

new a();

// 언어 상, 오류

// Object

// 객체에 메서드를 정의하는 방법

// 1. normal function
// 2. arrow function
// 3. concise method

// this 나를 호출한 대상

// arrow function은 this를 바인딩하지 않습니다.(상위 컨텍스트에서 this를 찾습니다.)

// 객체의 메서드를 정의할 때 => concise method 사용 권장
// 메서드 안에서 함수를 정의해야 할 때 => arrow function 사용 권장
// 이유는 this를 찾기 위해서

const user = {
  name: 'tiger',
  age: 42,
  payment: false,
  sayHi: function () {
    console.log(this);
  },
  sayHi2: () => {
    console.log(this);
  },

  sayHi3() {
    const sayBye = () => {
      console.log((this.age = 30));
    };

    sayBye();
  },
};

function User() {
  this.payment = false;
  this.age = 25;
}

const _a = new User();
const _a2 = new User();
const _a3 = new User();
const _a4 = new User();
const _a5 = new User();
const _a6 = new User();

// Array

const arr = ['a', { name: 'tiger' }, () => {}, 4, 5];

console.log(arr);

const newArray = new Array(10);

console.log(newArray);

console.clear();

// function

function sum(a, b) {
  return a + b;
}

const result = sum(10, 5);

console.log(result);

function 붕어빵틀(재료) {
  return `따끈하고 맛있는 ${재료} 맛 붕어빵입니다!`;
}

const 팥붕 = 붕어빵틀('팥');
const 슈붕 = 붕어빵틀('슈크림');
const 와붕 = 붕어빵틀('와사비');
const 피붕 = 붕어빵틀('피자');

const f = new Function('asdasdasd');

console.log(f);

// this
