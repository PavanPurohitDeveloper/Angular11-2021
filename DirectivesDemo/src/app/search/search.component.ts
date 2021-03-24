import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  OriginalEmployees: Employee[] = [
    new Employee(1, 'Srikanth', 4000),
    new Employee(2, 'Pavan', 5000),
    new Employee(3, 'Sai', 6000),
    new Employee(4, 'Suresh', 7000),
    new Employee(5, 'Ramesh', 8000),
    new Employee(6, 'Raju', 9000),
    new Employee(7, 'Cherry', 3000),
    new Employee(8, 'Anjaiha', 2000),
    new Employee(9, 'Jayrak', 1000),
    new Employee(10, 'Ronak', 10000)
  ];

  employees: Employee[] = [];

  constructor() {
    this.employees = this.OriginalEmployees;
  }

  searchString: string = "";  //search string
  sortColumn = "empId";  //which column you want to sort from Employee model class
  sortrder = 1; //ascending order

  onSearchClick() {
    this.employees = this.OriginalEmployees.filter((emp) => {
      //first convert to lower case and index of whatever user entered string convert to lower case. If less than or equal to 0 then do search
      return emp.empName.toLowerCase().indexOf(this.searchString.toLowerCase()) >= 0;
    })
  }

  onSortClick() {

    /*
    this.employees = this.OriginalEmployees.sort((emp1, emp2) => {

      if (this.sortColumn == "empId") {
        return (emp1[this.sortColumn] - emp2[this.sortColumn]) * this.sortrder;
      }
      else if (this.sortColumn == "empName") {
        return (emp1[this.sortColumn].charCodeAt(0) - emp2[this.sortColumn].charCodeAt(0)) * this.sortrder;

      }
      else if (this.sortColumn == "salary") {
        return (emp1[this.sortColumn] - emp2[this.sortColumn]) * this.sortrder;
      }
    })
    */

  }

}
