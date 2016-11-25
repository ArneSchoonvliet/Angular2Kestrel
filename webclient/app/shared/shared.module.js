import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from '../shared/star.component';
export var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [
                        CommonModule,
                        FormsModule,
                        StarComponent
                    ],
                    declarations: [StarComponent],
                    providers: [],
                },] },
    ];
    SharedModule.ctorParameters = [];
    return SharedModule;
}());
