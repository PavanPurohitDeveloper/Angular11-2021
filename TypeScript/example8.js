var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee1 = /** @class */ (function () {
    function Employee1(id, name, salary) {
        this.EmpId = id;
        this.Name = name;
        this.BasicSalary = salary;
    }
    Employee1.prototype.Display = function () {
        console.log('Employee Id: ' + this.EmpId + ", Name: " + this.Name + " and Basic Salaru: " + this.BasicSalary);
    };
    return Employee1;
}());
var Lecturer = /** @class */ (function (_super) {
    __extends(Lecturer, _super);
    function Lecturer(id, name, salary, subject) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.Subject = subject;
        return _this;
    }
    Lecturer.prototype.calculateSalary = function (hours) {
        var salary;
        salary = this.BasicSalary + hours + (this.BasicSalary * hours) * 2.5 / 100;
        console.log('Lecturer Salary: ' + salary);
        //throw new Error("Method not implemented.");
    };
    Lecturer.prototype.Display = function () {
        _super.prototype.Display.call(this);
        console.log('Subject is: ' + this.Subject);
    };
    return Lecturer;
}(Employee1));
var emp1;
emp1 = new Lecturer(101, 'Srikanth', 12345, 'Angular');
emp1.calculateSalary(8);
emp1.Display();
