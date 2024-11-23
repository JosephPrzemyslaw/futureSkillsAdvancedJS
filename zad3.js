const animal = {
  legCount: 4,
  present() {
    //...
  }
};

const germanShepherd = {
  guardDog: true,
  present() {
    //...
  }
};

const szarik = {
  type: "dog",
  age: 10,
  breed: "German shepherd",
  __proto__: {
    ...animal,
    ...germanShepherd,
  },
};

// const szarik = {
//     type: "dog",
//     age: 10,
//     breed: "German shepherd",
//     __proto__: germanShepherd,
// };

// germanShepherd.__proto__ = animal;

console.log(szarik.legCount);
console.log(szarik.guardDog);



// REMARK
// let x = 90;
// const obj = {
//     age: (x += 90), // x = x + 90, x = 180
//     age2: x + 1, // 181
// }


console.log(obj)