import EventEmitter from "./event_emitter.mjs";

class EmployeeModel extends EventEmitter {
    #employees = []
    async update(recordNo) {
        const endPoint = `https://randomuser.me/api/?results=${recordNo}`;
        try {
            const employeeResult = await fetch(endPoint);
            const employeeData = await employeeResult.json();
            this.#employees = employeeData.results;

            this.dispatch("update", structuredClone(employeeData.results)); // cloning
        } catch(err) {
            this.dispatch("error", err.message);
        }
    }
}

export default EmployeeModel;
// TEST
// const em = new EmployeeModel;

// em.on("update", employees => {
//     employees.forEach(employee => {
//         console.log(employee.id.value, employee.name, employee.email);
//     });
// });
// em.on("error", console.error);

// em.update(30);
// widoczne dane na temat użytkowników w konsoli w przypadku pozytywnym
// lub komunikat o błędzie w przypadku nie pobrania danych