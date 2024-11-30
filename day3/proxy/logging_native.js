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
    funNameToNoOfCallsMap: new Map,
    updateFunNameToNoOfCallsMap(funName) {
        if (this.funNameToNoOfCallsMap.has(funName)) {
            const callNo = this.funNameToNoOfCallsMap.get(funName);
            this.funNameToNoOfCallsMap.set(funName, callNo + 1);
        } else {
            this.funNameToNoOfCallsMap.set(funName, 1);
        }
    },
    logCallNo(funName) {
        console.log(`${funName} called ${this.funNameToNoOfCallsMap.get(funName)} time(s)`);
    },
    get(target, prop) {
        if (typeof target[prop] === "function") {
            return (...args) => { // args = [1, 3, 4, 65]
                handler.updateFunNameToNoOfCallsMap(prop);
                handler.logCallNo(prop);
                return target[prop](...args); // joseph.present(1,3,4,65)
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
