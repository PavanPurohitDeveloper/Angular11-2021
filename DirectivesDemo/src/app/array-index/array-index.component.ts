import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-index',
  templateUrl: './array-index.component.html',
  styleUrls: ['./array-index.component.css']
})
export class ArrayIndexComponent {

  public product = [
    { Name: 'Samsung TV', Price: 45000.34 },
    { Name: 'Iphone', Price: 65412.58 },
  ];

  public txtName: string | undefined;
  public txtPrice: string | undefined;

  public NewProduct = {
    Name: '',
    Price: 0
  };

  public AddProduct() {

    this.NewProduct = {
      Name: this.txtName,
      Price: this.txtPrice
    };
    this.product.push(this.NewProduct);
    this.txtPrice = "";
    this.txtPrice = "";
    alert('Product Added');
  }

  public DeleteProduct(index: any) {
    var status = confirm('Are you sure you want to Delete? ');
    if (status == true) {
      this.product.splice(index, 1);
    }
  }


}
