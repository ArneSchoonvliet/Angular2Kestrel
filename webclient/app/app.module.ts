import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ProductModule } from './products/product.module'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component'
 
@NgModule({
  imports: [ 
    BrowserModule, 
    ProductModule ,
    AppRoutingModule,
    HttpModule
  ],
             
  declarations: [ AppComponent, WelcomeComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
