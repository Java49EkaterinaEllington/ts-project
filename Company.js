"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    constructor(_employees) {
        this._employees = _employees;
    }
    addEmployee(employee) {
        this._employees.push(employee);
    }
    removeEmployee(id) {
        let removed = false;
        this._employees.forEach((employee, index) => {
            if (employee.id === id) {
                this._employees.splice(index, 1);
                removed = true;
            }
        });
        return removed;
    }
    getEmployee(id) {
        const getEmployee = this._employees.forEach(e => e.id === id);
        if (getEmployee == undefined) {
            return null;
        }
        return getEmployee;
    }
    getEmployeeBySalary(from, to) {
        let employees = this._employees.filter(e => e.computeSalary() >= from && e.computeSalary() <= to);
        employees.sort((a, b) => a.birthYear - b.birthYear);
        return employees;
    }
    computeBudget() {
        let budget = 0;
        this._employees.forEach(e => budget += e.computeSalary());
        return budget;
    }
}
exports.Company = Company;
//# sourceMappingURL=Company.js.map