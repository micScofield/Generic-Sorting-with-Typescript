"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.bubbleSort = function () {
        for (var i = this.collection.length; i > 0; i--) {
            for (var j = 0; j < i - 1; j++) {
                if (this.collection.compare(i, j)) {
                    this.collection.swap(i, j);
                }
            }
        }
        console.log(this.collection);
    };
    return Sorter;
}());
exports.Sorter = Sorter;
