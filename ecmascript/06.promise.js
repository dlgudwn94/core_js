const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (condition) {
      resolve("message");
    } else {
      reject();
    }
  }, 3000);
});

p.then((res) => {
  console.log(res); // message
}).catch(() => {});

console.log(1);
console.log(2);
console.log(3);
console.log(4);

//  async await

// 무조건 Promise<Object> 객체 반환

async function f() {
  return 1;
}

// [[PromiseResult]] : 1

f().then((res) => {
  res; // 1
});

const a = await f();

a; // 1
