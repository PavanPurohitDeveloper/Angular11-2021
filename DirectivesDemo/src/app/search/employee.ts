export class Employee {

  empId: number;
  empName: string;
  salary: number;

  constructor(id: number, ename: string, esal: number) {
    this.empId = id;
    this.empName = ename;
    this.salary = esal;
  }
}
