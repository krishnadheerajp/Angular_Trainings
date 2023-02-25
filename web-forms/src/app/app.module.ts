import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
@NgModule({
imports: [
 BrowserModule,
 FormsModule ], // import forms module here
declarations: [ AppComponent ],
bootstrap: [ AppComponent ]
})
export class AppModule { 
}

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';
// @NgModule({
// declarations: [
// AppComponent
// ],
// imports: [
// BrowserModule, ReactiveFormsModule
// ],
// providers: [],
// bootstrap: [AppComponent]
// })
// export class AppModule { }