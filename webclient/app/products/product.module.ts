import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module'
import { ProductRoutingModule } from './product-routing.module'

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service'

@NgModule({
    imports: [
        ProductRoutingModule,
        SharedModule
        ],
    declarations: [
        ProductListComponent, 
        ProductFilterPipe, 
        ProductDetailComponent],
    providers: [
        ProductGuardService,
        ProductService
    ],
})
export class ProductModule { }
