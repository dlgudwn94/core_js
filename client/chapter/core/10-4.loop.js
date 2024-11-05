/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2024,
  hasOwnProperty() {
    return '안녕!';
  },
};

Object.prototype.nickName = 'tiger';

'nickName' in javaScript; // true

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log( javaScript.hasOwnProperty('toString') );

// console.log( Object.prototype.hasOwnProperty.call(javaScript,'creator') );

// console.log( Object.hasOwn(javaScript,'nickName') );

// const obj = { }

// const hello = 'a'
// 123.toLowerCase()

// obj.a()

// in 문은 하나 조회

//for ... in 문은 여러개

let userName = 'tiger';
let email = 'tiger@naver.com';
let phone = '010-7169-0262';
let gender = 'male';

const user1 = {
  userName: 'tiger',
  email: '',
};

// 객체 순환 => email이라는 키가 있는지 확인 => email 안에 빈문자가 들어있는지 ?
// => 사용자에게 notification

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?

// 객체의 key를 조회
// 객체의 value를 조회

for (const key in javaScript) {
  // if(Object.hasOwn(javaScript,key)){
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    const value = javaScript[key];

    // console.log( value );
  }
}

// - 배열 객체 순환에 사용할 경우?
// 배열도 for...in문으로 순환이 가능은하다.
// for...in은 객체에 양보하세요

// 배열은 순서에 굉장히 민감한 데이터 => for..in문은 순서를 보장하지 않는다.

const tens = [10, 100, 1000, 10_000];

for (const key in tens) {
  // console.log(tens[key]);
}

// enumerable : 열거 가능한

for (const key in javaScript) {
  console.log(key);
}

const obj = {};

obj.nickName = 'tiger';

Object.defineProperty(obj, 'age', {
  value: 30,
  enumerable: true,
  writable: false,
  configurable: false,
});

Object.defineProperties(obj, {
  age: {
    value: 30,
    enumerable: true,
    writable: false,
    configurable: false,
  },
  email: {},
});

console.log(obj);

for (const key in obj) {
  console.log(key);
}
