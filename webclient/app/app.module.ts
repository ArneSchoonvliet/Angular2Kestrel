import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './products/product.module';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
 
@NgModule({
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
             
  declarations: [ AppComponent, WelcomeComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
