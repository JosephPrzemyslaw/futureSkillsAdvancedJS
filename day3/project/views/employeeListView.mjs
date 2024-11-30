class EmployeeListView {
    #employeeModel;
    #el;
    constructor(employeeModel) {
        this.#employeeModel = employeeModel;
        this.#createEl();

        this.#employeeModel.on("update", employees => this.render(employees));
    }
    render(employees) {
        this.#el.replaceChildren([]);
        employees.forEach(employee => {
            const li = document.createElement("li");
            li.textContent = `${employee.id.value} ${employee.name.first} ${employee.email}`;
            this.#el.appendChild(li);
        });
    }
    #createEl() {
        const root = document.createElement("ul");
        root.classList.add("employee-list");

        this.#el = root;
    }
    getEl() {
        return this.#el;
    }
}

export default EmployeeListView;
// TEST
// const em = new EmployeeModel;
// const employeeListView = new EmployeeListView(em);
// const employeeLengthView = new EmployeeLengthView(em);
// em.update(); // triggers view rerendering
