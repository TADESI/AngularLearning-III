import { Component, signal } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProductList} from './components/product-list/product-list';
import {RouterOutlet} from '@angular/router';

@Component({
  imports: [FormsModule,ReactiveFormsModule,ProductList,RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // userDetails = signal<any>(undefined);
  // addUser(data: any) {
  //   console.log(data);
  //   this.userDetails.set(data);
  // }

  // email=new FormControl('', [Validators.required]);
  // password=new FormControl('', [Validators.required]);
  // login(){
  //   console.log(this.email.value);
  //   console.log(this.password.value);
  // }
  // reset(){
  //   this.email.setValue('');
  //   this.password.setValue('');
  // }

  // loginForm=new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
  //   email: new FormControl('', [Validators.required,Validators.email]),
  //   password: new FormControl('', [Validators.required,Validators.minLength(6)]),
  // })
  // get name(){
  //   return this.loginForm.get('name');
  // }
  // get email(){
  //   return this.loginForm.get('email');
  // }
  // get password(){
  //   return this.loginForm.get('password');
  // }
  // handleProfile(){
  //   console.log(this.loginForm.value);
  // }
  // reset(){
  //   this.loginForm.setValue({
  //     name:'',
  //     email:'',
  //     password:''
  //   });
  // }

  // prodData: any=signal("");

}
