import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';

import { AboutModule } from './about/about.module';
import { WelcomeModule } from './welcome/welcome.module';
 
@NgModule({
  imports: [ 
    BrowserModule,
    WelcomeModule,
    RouterModule.forRoot([
            {path:'about', loadChildren: './about/about.module#AboutModule'},
            {path: '', redirectTo: 'welcome', pathMatch: 'full' },
            {path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        ])
  ],
             
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
