
class EventEmitter {
    #eventNameToCbs = new Map;
    constructor() {
        this.addEventListener = this.on;
        this.removeEventListener = this.off;
    }
    on(eventName, cb) {
        if (this.#eventNameToCbs.has(eventName)) {
            const cbs = this.#getCbs(eventName);
            cbs.push(cb);
        } else {
            this.#eventNameToCbs.set(eventName, [cb]);
        }
    }
    off(eventName, cbToBeRemoved) {
        if (this.#eventNameToCbs.has(eventName)) {
            const cbsFromMap = this.#getCbs(eventName);
            for(let i = 0; i < cbsFromMap.length; i ++) {
                const cbFromMap = cbsFromMap[i];
                if (cbFromMap === cbToBeRemoved) {
                    cbsFromMap.splice(i, 1);
                }
            }
        }
    }
    dispatch(eventName, ...args) {
        this.#getCbs(eventName)?.forEach(cb => cb(...args));
    }
    #getCbs(eventName) {
        return this.#eventNameToCbs.get(eventName);
    }
}

export default EventEmitter;
// TEST
// const em = new EventEmitter;
// const handleUpdateEvent1 = (...eventData) => {
//     console.log("handleUpdateEvent1", eventData.join(","));
// }
// const handleUpdateEvent2 = (...eventData) => {
//     console.log("handleUpdateEvent2", eventData.join(","));
// }

// em.on("update", handleUpdateEvent1);
// em.addEventListener("update", handleUpdateEvent2);
// em.dispatch("update", [Date.now(), 1]);
// //...
// em.off("update", handleUpdateEvent1);
// em.removeEventListener("update", handleUpdateEvent2);
// em.dispatch("update", [Date.now()]);
//...