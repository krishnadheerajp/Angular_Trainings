import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 public user!: User; // our model
  
ngOnInit() { // we will initialize our form here
 this.user = {
 name: '',
 email: '',
 gender: '',
 courses: '',
 ocr: '',
 address: {
 street: '',
 postcode: '' // set default value to 8000
 }
 };
 }
 save(model: User, isValid: boolean) 
 { 
 // check if model is valid// if valid, call API to save customer
 console.log(model, isValid); } 
}

// import { Component } from '@angular/core';
// import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Angular Form Validation';
//    angForm!: FormGroup;
//    constructor(private fb: FormBuilder) {
//     this.createForm();
//   }
//    createForm() {
//     this.angForm = this.fb.group({
//        name: ['', Validators.required ],
//        address: ['', Validators.required ]
//     });
//   }
// }