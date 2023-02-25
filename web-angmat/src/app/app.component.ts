import { Component } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'web-angmat';
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'PERN Stack'},
    {value: 'pizza-1', viewValue: 'MEVN Stack'},
    {value: 'tacos-2', viewValue: 'DEVOPS'}
  ];
}
