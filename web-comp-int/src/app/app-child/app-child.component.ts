// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-app-child',
//   templateUrl: './app-child.component.html',
//   styleUrls: ['./app-child.component.css']
// })
// export class AppChildComponent {

// }
import { Component,Input,OnInit } from '@angular/core';
@Component({
selector: 'app-app-child',
template: `<h2>Hi {{greetMessage}}</h2>`
})
export class AppChildComponent implements OnInit{
@Input() greetMessage: string | undefined ;
constructor(){
} 
ngOnInit(){
}
}