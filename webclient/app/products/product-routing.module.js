import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductGuardService } from './product-guard.service';
export var ProductRoutingModule = (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule.forChild([
                            { path: 'products', component: ProductListComponent },
                            { path: 'product/:id', canActivate: [ProductGuardService],
                                component: ProductDetailComponent },
                        ])
                    ],
                    exports: [RouterModule]
                },] },
    ];
    ProductRoutingModule.ctorParameters = [];
    return ProductRoutingModule;
}());
