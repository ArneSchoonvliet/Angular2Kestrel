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
                            { path: 'product', component: ProductListComponent },
                            { path: 'product/:id',
                                component: ProductDetailComponent },
                        ])
                    ],
                    exports: [RouterModule]
                },] },
    ];
    ProductRoutingModule.ctorParameters = [];
    return ProductRoutingModule;
}());
