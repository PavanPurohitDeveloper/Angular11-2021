//Single level Inheritance.
//single parent
class Employee {

    protected EmpId: number; //we follow camel cases
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

//single child
class Trainer extends Employee {

    protected Subject: string;

    constructor(id: number, name: string, salary: number, subject: string) {
        super(id, name, salary);
        this.Subject = subject;
    }

    Display() {
        //console.log('Employee Id: ' + this.EmpId + ", Name: " + this.Name + " and Basic Salaru: " + this.BasicSalary + " and Subject is: " + this.Subject);
        super.Display();
        console.log('Subject is: ' + this.Subject);
    }
}

var emp: Employee = new Employee(101, 'Raju', 12345);
emp.Display();

var trainer: Trainer = new Trainer(102, 'Srikanth', 12345, 'Angular');
trainer.Display();