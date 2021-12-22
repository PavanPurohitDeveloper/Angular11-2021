import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //creating an Product[] array to contain multiple products..variable products
  products: Product[];

  //This data get it from the server.
  constructor() {
    this.products = [
      new Product(10, 'Samsung S9', 40000, "Samsung"),
      new Product(20, 'Samsung S10', 35000, "Samsung"),
      new Product(30, 'Oneplus 8', 32000, "Oneplus"),
      new Product(40, 'Oneplus 9T', 38000, "Oneplus"),
      new Product(50, 'Iphone 10', 50000, "Apple"),
      new Product(60, 'Iphone 11', 52000, "Apple")
    ]
  }

  //Based on brand get the list of products
  getProductsBYBrand(brandName: string): Product[] {

    var selectedProducts: Product[] = [];
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].brand == brandName) {
        selectedProducts.push(this.products[i])
      }
    }
    return selectedProducts;
  }

}
