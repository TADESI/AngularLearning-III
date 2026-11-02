import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {prodApiResponse} from './proDataType';

@Injectable({
  providedIn: 'root'
})
export class Products {
  apiUrl = "https://dummyjson.com/products"
  constructor(private http: HttpClient) {
  }
  getProducts() {
    // return this.http.get<any>(this.apiUrl);
    return this.http.get<prodApiResponse>(this.apiUrl);
  }
}
