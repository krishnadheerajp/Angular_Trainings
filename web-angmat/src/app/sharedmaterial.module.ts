// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class SharedmaterialModule { }
interface Food {
  value: string;
  viewValue: string;
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'; 
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
imports: [
CommonModule,
MatButtonModule,
MatCheckboxModule,
MatToolbarModule,
MatMenuModule,
MatIconModule,
MatSelectModule,
MatFormFieldModule,
FormsModule,
MatTooltipModule,
MatBadgeModule,
MatChipsModule
],
exports: [
MatButtonModule,
MatCheckboxModule,
MatToolbarModule,
MatMenuModule,
MatIconModule,
MatSelectModule,
MatFormFieldModule,
FormsModule,
MatTooltipModule,
MatBadgeModule,
MatChipsModule
]
})


export class SharedmaterialModule { 
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}