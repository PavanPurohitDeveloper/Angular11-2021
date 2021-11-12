class Customer1 {

    //data members/properties
    customerId: number;
    customerName: string;
    customerBal: number;
    customerSpouse: string;


    //To initialize with data for class members then we use constructor.
    //It is a special method which will invoke when the object of the class is created. automatically constructor will be called.
    //we can have only one constructor in Typescript.
    //Here ? = optional parameter - nullable - in case of multiple objects constructor with different parameters.. It should be in the end of parameters list, not in middle. If we dont give any value - It will print undefined -- Ex:  customerSpouse?: string
    //default parameter - 
    constructor(custId: number, custName: string, custBal: number, customerSpouse: string = "John") {
        //this - is an object of current class
        this.customerId = custId;
        this.customerName = custName;
        this.customerBal = custBal;
        this.customerSpouse = customerSpouse;
    }

    /**
     constructor(custId: number, custName: string, custBal: number, customerSpouse?: string) {
        //this - is an object of current class
        this.customerId = custId;
        this.customerName = custName;
        this.customerBal = custBal;
        this.customerSpouse = customerSpouse;
    }
     */


    //Function - returns a value //Method - It contains return type as void
    /*
    Display() {

        var message: string = 'Customer ID is: ' + this.customerId
            + "\nCustomer Name is: " + this.customerName
            + '\nCustomer Balance is: ' + this.customerBal;
        console.log(message);
    }
    */

    Display() {

        var message: string = `Customer ID is: ${this.customerId},
        Customer Name is: ${this.customerName},
        Customer Balance is: ${this.customerBal},
        Customer Spourse is: ${this.customerSpouse}`;

        console.log(message);
    }

}

//Object creation // we can use var or let keyword.
//synatx: objectName: className = new ConstructorName();
let cust4: Customer1 = new Customer1(101, 'Srikanth', 15200, 'Haritha');
//Accessing the members OR calling methods
cust4.Display();

let cust5: Customer1 = new Customer1(102, 'Diyansh', 25632);
cust5.Display();