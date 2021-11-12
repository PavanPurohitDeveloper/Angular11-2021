//Single level Inheritance.
//single parent
class Employee {

    //By default its "public" access modifier in TypeScript, when if you dont specify any access modifier
    //protected - WE are able to access inside the class and at the same time, the class which is Inheritaed there you can access.
    protected EmpId: number; //for properties we follow camel cases
    protected Name: string;
    protected BasicSalary: number;

    constructor(id: number, name: string, salary: number) { //for parameters we follow lower case
        this.EmpId = id;
        this.Name = name;
        this.BasicSalary = salary;
    }

    Display() {
        console.log('Employee Id: ' + this.EmpId + ", Name: " + this.Name + " and Basic Salaru: " + this.BasicSalary);
    }
}

//single child..//Trainer and Administrator is also an Employee ..Common functionality will be in Base Class.
//
class Trainer extends Employee {

    protected Subject: string;

    //Constructor for derived classes must contain 'super'..
    //If Parent class is having the Constructor then in the child class you must have to call.
    constructor(id: number, name: string, salary: number, subject: string) {
        super(id, name, salary); //accepting 3 parameters..
        this.Subject = subject;
    }

    Display() {
        //console.log('Employee Id: ' + this.EmpId + ", Name: " + this.Name + " and Basic Salaru: " + this.BasicSalary + " and Subject is: " + this.Subject);

        super.Display();
        console.log('Subject is: ' + this.Subject);
    }
}

//Parent class is not having any control on Child class.
var emp: Employee = new Employee(101, 'Raju', 12345);
emp.Display();

var trainer: Trainer = new Trainer(102, 'Srikanth', 12345, 'Angular');
trainer.Display();

//Steps to run the code:
//tsc example7.ts
//node example7.js