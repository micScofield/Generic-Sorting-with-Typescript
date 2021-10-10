"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.bubbleSort = function () {
        var noSwaps;
        for (var i = this.collection.length; i > 0; i--) {
            noSwaps = true;
            for (var j = 0; j < i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var temp = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = temp;
                    noSwaps = false;
                }
            }
            if (noSwaps)
                break;
        }
    };
    return Sorter;
}());
var sorter = new Sorter([3, -5, 10, 0]);
sorter.bubbleSort();
console.log(sorter.collection);
