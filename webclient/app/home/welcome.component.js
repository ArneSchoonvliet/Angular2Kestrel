import { Component } from '@angular/core';
export var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.pageTitle = 'Welcome';
    }
    WelcomeComponent.decorators = [
        { type: Component, args: [{
                    templateUrl: './welcome.component.html'
                },] },
    ];
    WelcomeComponent.ctorParameters = [];
    return WelcomeComponent;
}());
