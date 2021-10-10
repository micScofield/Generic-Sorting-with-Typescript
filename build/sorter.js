"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.bubbleSort = function () {
        for (var i = 1; i <= this.collection.length; i++) {
            for (var j = 0; j < i; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
        console.log(this.collection);
    };
    return Sorter;
}());
exports.Sorter = Sorter;
