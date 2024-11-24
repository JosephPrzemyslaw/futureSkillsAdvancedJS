"use strict"

//
// Implement deep freeze
//

const obj = {
    name: "Joseph",
    age: 43,
    date: new Date(1981, 10, 4),
    address: {
        home: {
            city: "Warsaw",
            street: "Nadzieja",
        },
        work: {
            city: "Poznan",
            street: "Niebieska",
        },
    },
    fun: () => {}
};

function deepFreeze(ref) {
    function isObj(obj) {
        return typeof obj === 'object' && obj !== null
    }

    if (!isObj(ref)) {
        return ref;
    }

    Object.freeze(ref);
    const values = Object.values(ref);
    for(let value of values) {
        isObj(value) && deepFreeze(value);
    }
}

deepFreeze(obj);
console.log(Object.getOwnPropertyDescriptors(obj));
console.log(Object.getOwnPropertyDescriptors(obj.address.work));
obj.address.city = "Poznan";
