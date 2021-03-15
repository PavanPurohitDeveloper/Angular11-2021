var Address = /** @class */ (function () {
    function Address(AddressId, Address, City, State, Country) {
        this.AddressId = AddressId;
        this.Address = Address;
        this.City = City;
        this.State = State;
        this.Country = Country;
    }
    return Address;
}());
var CustomerNew = /** @class */ (function () {
    function CustomerNew(CustomerId, CustomerName, CustomerBal, CustomerAddress) {
        this.CustomerId = CustomerId;
        this.CustomerName = CustomerName;
        this.CustomerBal = CustomerBal;
        this.CustomerAddress = CustomerAddress;
    }
    //Methods
    CustomerNew.prototype.Display = function () {
        var message = "Customer ID is: " + this.CustomerId + ",\n        Customer Name is: " + this.CustomerName + ",\n        Customer Balance is: " + this.CustomerBal + ",\n        Customer Address is: " + this.CustomerAddress.City;
        console.log(message);
    };
    //Function
    CustomerNew.prototype.Deposit = function (amt) {
        this.CustomerBal = this.CustomerBal + amt;
        return this.CustomerBal;
    };
    return CustomerNew;
}());
var addr = new Address(10, '8-1-221', 'Hyderabad', 'TS', 'India');
var custNew = new CustomerNew(101, 'Srikanth', 1200, addr);
custNew.Deposit(1000);
custNew.Display();
var custNew1 = new CustomerNew(102, 'Pavan', 1200, addr);
custNew.Deposit(5000);
custNew1.Display();
