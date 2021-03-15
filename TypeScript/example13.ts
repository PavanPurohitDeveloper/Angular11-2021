class Employee5 {

    empId: number;
    empName: string;

    constructor(id: number, name: string) {
        this.empId = id;
        this.empName = name;
    }

    //regular way function writin
    Add(x: number, y: number): number {
        return x + y;
    }

    //convert above function into Arraow function
    Add1 = (x: number, y: number): number => { return x + y; }

    //Arraow functions
    Display = (): void => console.log('Emp Id: ' + this.empId + ", Emp Name: " + this.empName);
}

let obj5: Employee5 = new Employee5(100, 'Srikanth');
console.log(obj5.Add(100, 200));
obj5.Display();