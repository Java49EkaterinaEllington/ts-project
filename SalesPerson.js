"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesePerson = void 0;
const WageEmployee_1 = require("./WageEmployee");
const MIN_VALUE = 0;
const MAX_VALUE = 100;
class SalesePerson extends WageEmployee_1.WageEmployee {
    constructor(id, name, birthYear, department, basicSalary, wage, hours, _salesValue, _percentValue) {
        super(id, name, birthYear, department, basicSalary, wage, hours);
        this._salesValue = _salesValue;
        this._percentValue = _percentValue;
    }
    get salesValue() {
        return this._salesValue;
    }
    set salesValue(salesValue) {
        if (salesValue < MIN_VALUE || salesValue > MAX_VALUE) {
            throw `wrong sales value must be in range[${MIN_VALUE}-${MAX_VALUE}]`;
        }
        this.salesValue = salesValue;
    }
    get percentValue() {
        return this._percentValue;
    }
    set percentValue(percentValue) {
        this.percentValue = percentValue;
    }
    computeSalary() {
        return this.basicSalary + this._salesValue * this._percentValue + this.hours * this.wage;
    }
}
exports.SalesePerson = SalesePerson;
//# sourceMappingURL=SalesPerson.js.map