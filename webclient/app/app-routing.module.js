import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
export var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule.forRoot([
                            { path: 'welcome', component: WelcomeComponent },
                            { path: 'product', loadChildren: './products/product.module#ProductModule' },
                            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                            { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
                        ])
                    ],
                    exports: [RouterModule]
                },] },
    ];
    AppRoutingModule.ctorParameters = [];
    return AppRoutingModule;
}());
