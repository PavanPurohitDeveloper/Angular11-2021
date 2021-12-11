import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onlineshop',
  templateUrl: './onlineshop.component.html',
  styleUrls: ['./onlineshop.component.css']
})
export class OnlineshopComponent {

  public categories = ['select category', 'Electronics', 'Electricals'];
  public electronics = ['Select electronic product', 'Iphone', 'Oneplus', 'Samsung'];
  public electricals = ['Select electrical product', 'Fridge', 'Washing Machine'];
  public selectedProducts = [];
  public selectedCategory;
  public selectedProduct;

  public productsData = [
    { Name: 'Iphone', Price: 58000, Photo: 'assets/iphone.jpg' },
    { Name: 'Oneplus', Price: 35000, Photo: 'assets/oneplus.jpg' },
    { Name: 'Samsung', Price: 20000, Photo: 'assets/samsung.jpg' },
    { Name: 'Fridge', Price: 18000, Photo: 'assets/fridge.jpg' },
    { Name: 'Washing Machine', Price: 12000, Photo: 'assets/wm.jpg' }
  ]

  public searchResults = [];
  public prodName = '';
  public prodPrice = 0;
  public prodPhoto = '';
  public cartItems = [];
  public cartItemsCount = 0;
  public isCartVisible = false;

  ShowCart() {
    this.isCartVisible = (this.isCartVisible == false) ? true : false;
  }

  // whenever user change the category
  CategoryChanged() {
    switch (this.selectedCategory) {//based on the selected category
      case 'Electronics':
        this.selectedProducts = this.electronics;
        break;
      case 'Electricals':
        this.selectedProducts = this.electricals;
        break;
    }
  }

  // whenever user change the product
  ProductChanged() {
    this.searchResults = this.productsData.filter(x => x.Name == this.selectedProduct);
    this.prodName = this.searchResults[0].Name;
    this.prodPrice = this.searchResults[0].Price;
    this.prodPhoto = this.searchResults[0].Photo;
  }

  AddToCart() {
    this.cartItems.push(this.searchResults[0]);
    this.cartItemsCount = this.cartItems.length;
  }

  DeleteCartItem(i) {
    let status = confirm('Are you sure you want to delete?'); //confirm box
    if (status == true) {  //If status is true then delete it
      this.cartItems.splice(i, 1); //delete only one item
      this.cartItemsCount = this.cartItems.length;
    }
  }

}
