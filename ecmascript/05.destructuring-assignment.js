



// 배열의 구조 분해 할당


const number = [1,2,3];

const [first = 10,...rest] = number;






// 객체의 구조 분해 할당



const person = {name:'tiger',age:40};

const {name:n = 'seonbeom',age:a} = person

console.log(n,a);

// const name = person.name;
// const age = person.age;



const default = {
  title:'tiger',
  timeout:1000,
  message:'hello'
}


function f(options){


  const {title,timeout,message} = {...default,...options}


  console.log(title,timeout,message);
  
}


f({
  message:'bye~'
})



















