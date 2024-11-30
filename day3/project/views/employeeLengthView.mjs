class EmployeeLengthView {
    #employeeModel;
    #el;
    constructor(employeeModel) {
        this.#employeeModel = employeeModel;
        this.#createEl();

        this.#employeeModel.on("update", employees => this.render(employees));
    }
    render(employees) {
        this.#el.textContent = `Employee No: ${employees.length}`;
    }
    #createEl() {
        const root = document.createElement("div");
        root.classList.add("employee-length");

        this.#el = root;
    }
    getEl() {
        return this.#el;
    }
}

export default EmployeeLengthView;

