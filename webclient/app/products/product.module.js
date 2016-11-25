import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
export var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        SharedModule,
                        ProductRoutingModule,
                    ],
                    declarations: [
                        ProductListComponent,
                        ProductFilterPipe,
                        ProductDetailComponent],
                    providers: [
                        ProductGuardService,
                        ProductService
                    ],
                },] },
    ];
    ProductModule.ctorParameters = [];
    return ProductModule;
}());
