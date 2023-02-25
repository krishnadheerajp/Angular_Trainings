import { Component,Input,OnInit } from '@angular/core';

import { AppChildComponent } from './app-child/app-child.component';

@Component({
selector: 'app-root',

template: `
<h1>Hello {{message}}</h1> <br/> 
<app-app-child [greetMessage]="childmessage"></app-app-child>`

})


export class AppComponent { 
message : string = "I am Parent";
childmessage : string = "I am passed from Parent to child component"
}