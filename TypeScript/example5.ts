class Address {

    //properties must be in camel case we following
    AddressId: number;
    Address: string;
    City: string;
    State: string;
    Country: string;

    //attribute names will be in the lowercase.
    constructor(AddressId: number, Address: string, City: string, State: string, Country: string) {
        //Initialize it
        this.AddressId = AddressId;
        this.Address = Address;
        this.City = City;
        this.State = State;
        this.Country = Country;
    }
}

class CustomerNew {

    CustomerId: number;
    CustomerName: string;
    CustomerBal: number;
    CustomerAddress: Address;

    constructor(CustomerId: number, CustomerName: string, CustomerBal: number, CustomerAddress: Address) {
        this.CustomerId = CustomerId;
        this.CustomerName = CustomerName;
        this.CustomerBal = CustomerBal;
        this.CustomerAddress = CustomerAddress;
    }

    //Methods
    Display(): void {

        var message: string = `Customer ID is: ${this.CustomerId},
        Customer Name is: ${this.CustomerName},
        Customer Balance is: ${this.CustomerBal},
        Customer Address is: ${this.CustomerAddress.City}`;
        console.log(message);
    }

    //Function
    Deposit(amt: number): number {
        this.CustomerBal = this.CustomerBal + amt;
        return this.CustomerBal;
    }
}

var addr: Address = new Address(10, '8-1-221', 'Hyderabad', 'TS', 'India');
var custNew: CustomerNew = new CustomerNew(101, 'Srikanth', 12000, addr);
custNew.Deposit(1000);
custNew.Display();

var custNew1: CustomerNew = new CustomerNew(102, 'Pavan', 30000, addr);
custNew.Deposit(5000);
custNew1.Display();
