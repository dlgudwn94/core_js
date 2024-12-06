// 배열 복사

const arr1 = [1, 2, 3];
const arr2 = [...arr1];

// 배열 병합

const mergedArray = [...arr1, ...arr2];

// 객체 복사

const user = {
  name: "tiger",
  age: 20,
};

const obj = { ...user };

const admin = {
  level: "admin",
  name: "beom",
};

// 객체 합성

const user1 = { ...user, ...admin };
const user2 = Object.assign({}, user, admin);
