var Customer1 = /** @class */ (function () {
    //To initialize with data for class members then we use constructor.
    //It is a special method which will invoke when the object of the class is created. automatically constructor will be called.
    //we can have only one constructor in Typescript.
    //Here ? = optional parameter - nullable - in case of multiple objects constructor with different parameters.. It should be in the end of parameters list, not in middle. If we dont give any value - It will print undefined -- Ex:  customerSpouse?: string
    //default parameter - 
    function Customer1(custId, custName, custBal, customerSpouse) {
        if (customerSpouse === void 0) { customerSpouse = "John"; }
        //this - is an object of current class
        this.customerId = custId;
        this.customerName = custName;
        this.customerBal = custBal;
        this.customerSpouse = customerSpouse;
    }
    //Function - returns a value //Method - It contains return type as void
    /*
    Display() {

        var message: string = 'Customer ID is: ' + this.customerId
            + "\nCustomer Name is: " + this.customerName
            + '\nCustomer Balance is: ' + this.customerBal;
        console.log(message);
    }
    */
    Customer1.prototype.Display = function () {
        var message = "Customer ID is: " + this.customerId + ",\n        Customer Name is: " + this.customerName + ",\n        Customer Balance is: " + this.customerBal + ",\n        Customer Spourse is: " + this.customerSpouse;
        console.log(message);
    };
    return Customer1;
}());
//Object creation // we can use var or let keyword.
//synatx: objectName: className = new ConstructorName();
var cust4 = new Customer1(101, 'Srikanth', 15200, 'Haritha');
//Accessing the members OR calling methods
cust4.Display();
var cust5 = new Customer1(102, 'Diyansh', 25632);
cust5.Display();
