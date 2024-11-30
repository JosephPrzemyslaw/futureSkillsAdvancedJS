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

const handler = {
    logCallNo(funName) {
        console.log(`${funName} called ${this.funNameToNoOfCallsMap.get(funName)} time(s)`);
    },
    get(target, prop) {
        if (typeof target[prop] === "function") {
            return (...args) => {
                const startTime = performance.now();
                const funResult = target[prop](...args);
                console.log(`${prop} took ${performance.now() - startTime}`); // [us]

                return funResult;
            }
        }
        return target[prop];
    }
}

const joseph = new Person(43, "Joseph");
joseph.city = "Warszawa";
const josephProxy = new Proxy(joseph, handler);
// josephProxy.present(1,3,4,65);
josephProxy.setAge(40)
josephProxy.present();
josephProxy.setAge(50)
josephProxy.present();
josephProxy.setName("Ania");
josephProxy.present();
josephProxy.city;
