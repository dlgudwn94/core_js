let a = 1;
const b = 3;

// 블럭 스코프 x  => 함수 스코프

var numbers = [1, 2, 3, 4];

for (var i = 0, l = numbers.length; i < l; i++) {
  console.log(i);
}

console.log("outer : ", i);

// const b:{
//   readonly name:string
// } = {
//   name:'tiger'
// }

// Object.freeze(b)

b.name = "beom";
