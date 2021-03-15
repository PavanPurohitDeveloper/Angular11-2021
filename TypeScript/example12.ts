class keyValuePair<T, U> {

    private key: T; //T means any
    private value: U; //U means any

    //method
    setkeyValue(x: T, y: U) {
        this.key = x;
        this.value = y;
    }

    //function
    Display(): void {
        console.log('key = ' + this.key + " and value = " + this.value);
    }

}

let obj1: keyValuePair<number, string> = new keyValuePair();
obj1.setkeyValue(1, 'Srikanth');
obj1.Display();

let obj2: keyValuePair<string, string> = new keyValuePair();
obj2.setkeyValue('Designation', 'TechLead');
obj2.Display();