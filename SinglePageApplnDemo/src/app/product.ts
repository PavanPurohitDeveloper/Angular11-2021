//Model class
export class Product {

  productId: number;
  productName: string;
  cost: number;
  brand: string;

  constructor(pid: number, pname: string, pcost: number, brand: string) {
    this.productId = pid;
    this.productName = pname;
    this.cost = pcost;
    this.brand = brand;
  }

}
