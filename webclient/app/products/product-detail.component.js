import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
export var ProductDetailComponent = (function () {
    function ProductDetailComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.pageTitle = "Product detail";
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var id = +this._route.snapshot.params['id'];
        this.pageTitle += ": " + id;
    };
    ProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    ProductDetailComponent.decorators = [
        { type: Component, args: [{
                    templateUrl: './product-detail.component.html'
                },] },
    ];
    ProductDetailComponent.ctorParameters = [
        { type: ActivatedRoute, },
        { type: Router, },
    ];
    return ProductDetailComponent;
}());
