import { Component, Input, Output, EventEmitter } from '@angular/core';
export var StarComponent = (function () {
    function StarComponent() {
        this.rating = 4;
        this.notify = new EventEmitter();
    }
    StarComponent.prototype.ngOnChanges = function (event) {
        this.starWidth = this.rating * 86 / 5;
    };
    StarComponent.prototype.onClick = function () {
        this.notify.emit("the rating " + this.rating + " was clicked!");
    };
    StarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ai-star',
                    templateUrl: './star.component.html'
                },] },
    ];
    StarComponent.ctorParameters = [];
    StarComponent.propDecorators = {
        'rating': [{ type: Input },],
        'notify': [{ type: Output },],
    };
    return StarComponent;
}());
