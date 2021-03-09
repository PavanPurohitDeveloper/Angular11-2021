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
//Single level Inheritance.
//single parent
var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.EmpId = id;
        this.Name = name;
        this.BasicSalary = salary;
    }
    Employee.prototype.Display = function () {
        console.log('Employee Id: ' + this.EmpId + ", Name: " + this.Name + " and Basic Salaru: " + this.BasicSalary);
    };
    return Employee;
}());
//single child
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(id, name, salary, subject) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.Subject = subject;
        return _this;
    }
    Trainer.prototype.Display = function () {
        //console.log('Employee Id: ' + this.EmpId + ", Name: " + this.Name + " and Basic Salaru: " + this.BasicSalary + " and Subject is: " + this.Subject);
        _super.prototype.Display.call(this);
        console.log('Subject is: ' + this.Subject);
    };
    return Trainer;
}(Employee));
var emp = new Employee(101, 'Raju', 12345);
emp.Display();
var trainer = new Trainer(102, 'Srikanth', 12345, 'Angular');
trainer.Display();
