import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Products } from './model/model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private _productsService: ProductsService) {}

  products: Products | any = [];
  getProducts() {
    this._productsService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  getDetails(value: any) {
    console.log(value);
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
