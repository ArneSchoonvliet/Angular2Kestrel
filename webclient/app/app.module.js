import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        AppRoutingModule,
                        HttpModule
                    ],
                    declarations: [AppComponent, WelcomeComponent],
                    bootstrap: [AppComponent]
                },] },
    ];
    AppModule.ctorParameters = [];
    return AppModule;
}());
