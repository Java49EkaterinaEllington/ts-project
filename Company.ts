import { Employee } from "./Employee";

export class Company {

    constructor(private _employees: Array<Employee>) {

    }

    addEmployee(employee: Employee): void {
        this._employees.push(employee);
    }

    removeEmployee(id: number): boolean {
        let removed = false;
        this._employees.forEach((employee, index) => {
            if (employee.id === id) {
                this._employees.splice(index, 1);
                removed = true;
            }
        });
        return removed;
    }
    getEmployee(id: number): Employee | null {
        const getEmployee = this._employees.forEach(e => e.id === id);
        if(getEmployee == undefined){
        return null;
        }
        return getEmployee;

    }
    getEmployeeBySalary(from: number, to: number): Employee[] {
        let employees = this._employees.filter(e => e.computeSalary() >= from && e.computeSalary() <= to);
        employees.sort((a, b) => a.birthYear - b.birthYear);
        return employees;
    }

    computeBudget(): number {
        let budget: number = 0;
        this._employees.forEach(e => budget += e.computeSalary());
        return budget;
    }
}