import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
export var ProductService = (function () {
    function ProductService(_http) {
        this._http = _http;
        this._productUrl = "api/products/products.json";
    }
    ProductService.prototype.getProducts = function () {
        return this._http.get(this._productUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProductService.prototype.handleError = function (error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    };
    ProductService.decorators = [
        { type: Injectable },
    ];
    ProductService.ctorParameters = [
        { type: Http, },
    ];
    return ProductService;
}());
