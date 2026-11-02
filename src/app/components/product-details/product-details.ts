import {Component, signal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Products} from '../../services/products';
import {product} from '../../services/proDataType';

@Component({
  imports: [],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  prodData=signal<product|undefined>(undefined);
  constructor(private route:ActivatedRoute,private products:Products) {

  }
  ngOnInit() {
    let productId=this.route.snapshot.paramMap.get('id')
    this.products.getProducts().subscribe((data)=>{
      console.log(data.products);
      data.products.filter((item)=>{
        if(item.id.toString() == productId){
          console.log(item)
          this.prodData.set(item)
        }
      })
    })
  }
}
