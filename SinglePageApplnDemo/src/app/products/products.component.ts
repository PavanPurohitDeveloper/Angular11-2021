import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  brand: string;
  matchingProducts: Product[] = [];

  //Inject the dependency ProductsService..ActivatedRoute is a service to get the parameters from URL.
  constructor(private prodServ: ProductsService, private route: ActivatedRoute) {

  }

  //whenever my appln is loaded
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      var selectedBrand = params["brandname"];
      this.brand = selectedBrand;
      this.matchingProducts = this.prodServ.getProductsBYBrand(selectedBrand);
    }
    )
  }

}
