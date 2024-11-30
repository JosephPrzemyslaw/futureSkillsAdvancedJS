import EmployeeModel from "../model.mjs";
import EmployeeListView from "./employeeListView.mjs";
import EmployeeLengthView from "./employeeLengthView.mjs";

const em = new EmployeeModel;
const listView = new EmployeeListView(em);
const lengthView = new EmployeeLengthView(em);

document.body.appendChild(listView.getEl());
document.body.appendChild(lengthView.getEl());
em.update(30);

setInterval(() => {
    const MAX_EMPLOYEE_NO = 50;
    const employeeNo = Math.round(Math.random() * MAX_EMPLOYEE_NO);

    em.update(employeeNo);
}, 3000);
