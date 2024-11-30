class Person {
    #age;
    #name;
    constructor(age, name) {
        this.#age = age;
        this.#name = name;
    }
    setAge(age) {
        this.#age = age;
    }
    setName(name) {
        this.#name = name;
    }
    present() {
        console.log(`My name is ${this.#name} and I am ${this.#age}`);
    }
}

class PersonProxy {
    #person;
    #funNameToNoOfCallsMap = new Map;
    constructor(age, name) {
        this.#person = new Person(age, name);
    }
    #updateFunNameToNoOfCallsMap(funName) {
        if (this.#funNameToNoOfCallsMap.has(funName)) {
            const callNo = this.#funNameToNoOfCallsMap.get(funName);
            this.#funNameToNoOfCallsMap.set(funName, callNo + 1);
        } else {
            this.#funNameToNoOfCallsMap.set(funName, 1);
        }
    }
    #logCallNo(funName) {
        console.log(`${funName} called ${this.#funNameToNoOfCallsMap.get(funName)} time(s)`);
    }
    setAge(age) {
        this.#updateFunNameToNoOfCallsMap("setAge");
        this.#logCallNo("setAge");
        this.#person.setAge(age);
    }
    setName(name) {
        this.#updateFunNameToNoOfCallsMap("setName");
        this.#logCallNo("setName");
        this.#person.setName(name);
    }
    present() {
        this.#updateFunNameToNoOfCallsMap("present");
        this.#logCallNo("present");
        this.#person.present();
    }
}

const joseph = new PersonProxy(43, "Joseph");

joseph.setAge(42)
joseph.setAge(41)
joseph.setAge(40)
joseph.present()
joseph.present()