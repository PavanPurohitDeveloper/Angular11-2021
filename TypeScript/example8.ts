abstract class Employee2 {

    protected EmpId: number;
    protected Name: string;
    protected BasicSalary: number;

    constructor(id: number, name: string, salary: number) {
        this.EmpId = id;
        this.Name = name;
        this.BasicSalary = salary;
    }

    abstract calculateSalary(hours: number): void;

    Display() {
        console.log('Employee Id: ' + this.EmpId + ", Name: " + this.Name + " and Basic Salaru: " + this.BasicSalary);
    }
}

class Lecturer1 extends Employee2 {

    protected Subject: string;

    calculateSalary(hours: number): void {
        let salary: number;
        salary = this.BasicSalary + hours + (this.BasicSalary * hours) * 2.5 / 100;
        console.log('Lecturer Salary: ' + salary);
        //throw new Error("Method not implemented.");
    }

    constructor(id: number, name: string, salary: number, subject: string) {
        super(id, name, salary);
        this.Subject = subject;
    }

    Display() {
        super.Display();
        console.log('Subject is: ' + this.Subject);
    }

}

//Hierarchical Inheritance -- Multiple child classes from single Parent Class.
class Admin1 extends Employee2 {

    //implement methods
    calculateSalary(hours: number): void {
        let salary: number;
        salary = this.BasicSalary + hours + (this.BasicSalary * hours) * 1.8 / 100;
        console.log('Admin Salary: ' + salary);
    }

    LabNumber: string;
    //constructor in child level
    constructor(id: number, name: string, salary: number, labNumber: string) {
        super(id, name, salary);
        this.LabNumber = labNumber
    }

    Display() {
        super.Display();
        console.log('Lab Number is: ' + this.LabNumber);
    }

}

function Test(x: number) {

    let emp: Employee2;
    if (x == 1) {
        //create an Object for Lecturer.
        emp = new Lecturer1(101, 'Srikanth', 12345, 'Angular');
    } else if (x == 2) {
        //create an Object for Admin.
        emp = new Admin1(102, 'Balaji', 8000, 'ANG001');
    }
    emp.calculateSalary(8);
    emp.Display();
}

Test(1);

/*
let emp2: Employee2;
//create a Child class object
emp2 = new Lecturer1(101, 'Srikanth', 12345, 'Angular');
emp2 = new Admin1(102, 'Balaji', 8000, 'ANG001');
emp2.calculateSalary(8); //it will print Admin salary
emp2.Display();
*/

//To test code:
//tsc example8.ts;
//node example.js
