import { Pipe } from '@angular/core';
export var ProductFilterPipe = (function () {
    function ProductFilterPipe() {
    }
    ProductFilterPipe.prototype.transform = function (value, filterBy) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter(function (product) {
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        }) : value;
    };
    ProductFilterPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'productFilter'
                },] },
    ];
    ProductFilterPipe.ctorParameters = [];
    return ProductFilterPipe;
}());
