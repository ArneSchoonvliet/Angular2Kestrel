import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';

import { AboutModule } from './about/about.module';
import { WelcomeModule } from './welcome/welcome.module';
 
@NgModule({
  imports: [ 
    BrowserModule,
    WelcomeModule,
    AppRoutingModule
  ],
             
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
