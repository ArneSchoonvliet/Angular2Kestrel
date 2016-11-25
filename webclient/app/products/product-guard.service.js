import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
export var ProductGuardService = (function () {
    function ProductGuardService(_router) {
        this._router = _router;
    }
    ProductGuardService.prototype.canActivate = function (route) {
        var id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid product id');
            this._router.navigate(['/products']);
            return false;
        }
        return true;
    };
    ProductGuardService.decorators = [
        { type: Injectable },
    ];
    ProductGuardService.ctorParameters = [
        { type: Router, },
    ];
    return ProductGuardService;
}());
