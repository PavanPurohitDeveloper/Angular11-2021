class Customer {

    //data members/properties/global members..var/let keyword is not required whenever you defined data members within a class.
    customerId: number;
    customerName: string;
    customerBal: number;


    //Suppose if you want To initialize with data for class members then we use constructor.
    //constructor: It is a special method which will invoke when the object of the class is created. automatically constructor will be called.
    //we can have only one constructor in Typescript. Multiple constructor implementations are not allowed.
    //Better always go with parameterized constructor.
    constructor(custId: number, custName: string, custBal: number) {
        //"this" keyword - is an object of current class
        this.customerId = custId;
        this.customerName = custName;
        this.customerBal = custBal;
    }

    //Function - returns a value //Method - It contains return type as void..function keyword is not required.
    //Outside of functions you cannot use "var" keyword.
    /*
    Display() {

        var message: string = 'Customer ID is: ' + this.customerId
            + "\nCustomer Name is: " + this.customerName
            + '\nCustomer Balance is: ' + this.customerBal;
        console.log(message);
    }
    */

    //without using concatenation .. we use bactick
    Display() {

        var message: string = `Customer ID is: ${this.customerId},
        Customer Name is: ${this.customerName},
        Customer Balance is: ${this.customerBal}`;

        console.log(message);
    }

}

//Object creation // we can use var or let keyword.
//synatx: objectName: className = new ConstructorName();
let cust1: Customer = new Customer(101, 'Srikanth', 15200);

//Accessing the members OR calling methods
cust1.Display();

let cust2: Customer = new Customer(102, 'Diyansh', 25632);
cust2.Display();