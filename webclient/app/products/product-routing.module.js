import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
export var ProductRoutingModule = (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule.forChild([
                            { path: '', component: ProductListComponent },
                            { path: ':id',
                                component: ProductDetailComponent },
                        ])
                    ],
                    exports: [RouterModule]
                },] },
    ];
    ProductRoutingModule.ctorParameters = [];
    return ProductRoutingModule;
}());
