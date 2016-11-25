import { Component } from '@angular/core';
export var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = "Acme product management";
        this.val = false;
    }
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pm-app',
                    template: "\n        <div>\n            <nav class='navbar navbar-default'>\n                <div class='container-fluid'>\n                    <a class='navbar-brand'>{{pageTitle}}</a>\n                    <ul class='nav navbar-nav'>\n                        <li><a [routerLink]=\"['/welcome']\">Home</a></li>\n                        <li><a [routerLink]=\"['/products']\">Product List</a></li>\n                    </ul>\n                </div>\n            </nav>\n            <div class='container'>\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    "
                },] },
    ];
    AppComponent.ctorParameters = [];
    return AppComponent;
}());
