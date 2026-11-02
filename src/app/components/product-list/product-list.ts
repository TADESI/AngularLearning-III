import {Component, signal} from '@angular/core';
import {Products} from '../../services/products';
import {product} from '../../services/proDataType';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  imports: [
    RouterOutlet,RouterLink
  ],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  prodData=signal<product[]|undefined>(undefined);
  constructor(private productService:Products) {
  }
  ngOnInit(){
    this.productService.getProducts().subscribe(data => {
      console.log(data);
      this.prodData.set(data.products);
    })
  }
}
