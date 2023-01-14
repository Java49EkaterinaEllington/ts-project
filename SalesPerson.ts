import { WageEmployee } from "./WageEmployee";
const MIN_VALUE: number = 0;
const MAX_VALUE: number = 100;
export class SalesePerson extends WageEmployee {
  constructor(
    id: number,
    name: string,
    birthYear: number,
    department: string,
    basicSalary: number,
    wage: number,
    hours: number,
    private _salesValue: number,
    private _percentValue: number
  ) {
    super(id, name, birthYear, department, basicSalary, wage, hours);
  }
  get salesValue() {
    return this._salesValue;
  }
  set salesValue(salesValue: number) {
    if (salesValue < MIN_VALUE || salesValue > MAX_VALUE) {
        throw `wrong sales value must be in range[${MIN_VALUE}-${MAX_VALUE}]`;
    }
    this.salesValue = salesValue;
  }

  get percentValue() {
    return this._percentValue;
  }
  set percentValue(percentValue: number) {
    this.percentValue = percentValue;
  }
  computeSalary(): number {
    return this.basicSalary + this._salesValue * this._percentValue +  this.hours * this.wage;
  }
}