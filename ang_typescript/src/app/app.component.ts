import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang_typescript';
  people: any[] = [
    {
    "name": "Douglas Pace",
    "age": 35,
    "country":"UK"
    },
    {
    "name": "Mcleod Mueller",
    "age": 32,
    "country":"USA"
    },
    {
    "name": "Day Meyers",
    "age": 21,
    "country":"HK"
    },
    {
    "name": "Ramu Kaka",
    "age": 25,
    "country":"India"
    }
    ];
    Name1: string = 'Angular2'; 
   appList: string[] = ["Binding", "Display", "Services"]; 
   appTitle: string = 'Welcome';
   appList1: any[] = [ {
      "ID": "1",
      "url": '../assets/images/slider1.jpeg'
   } ,
   {
    "ID": "2",
    "url": '../assets/images/slider2.png'
 },
 {
  "ID": "3",
  "url": '../assets/images/slider3.jpeg'
},
{
 "ID": "4",
 "url": '../assets/images/slider4.jpeg'
}
  ];
  name="Dheeraj";
  sayMyName() {
    console.log("My name is ",this.name);
    alert(`My name is ${this.name}`);
  }
}
