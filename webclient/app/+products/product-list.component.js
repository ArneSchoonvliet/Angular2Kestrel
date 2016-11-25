import { Component } from '@angular/core';
import { ProductService } from './product.service';
export var ProductListComponent = (function () {
    function ProductListComponent(_productService) {
        this._productService = _productService;
        this.pageTitle = 'Product list';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.listFilter = 'cart';
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = "Product list: " + message;
    };
    ProductListComponent.decorators = [
        { type: Component, args: [{
                    templateUrl: './product-list.component.html'
                },] },
    ];
    ProductListComponent.ctorParameters = [
        { type: ProductService, },
    ];
    return ProductListComponent;
}());
