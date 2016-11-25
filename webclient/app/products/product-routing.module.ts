import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductGuardService } from './product-guard.service';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: ProductListComponent },
            {path: ':id', /*canActivate: [ ProductGuardService ],*/ 
                                component: ProductDetailComponent },
        ])
    ],
    exports: [ RouterModule ]
})
export class ProductRoutingModule { }