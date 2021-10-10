"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersCollection.prototype.swap = function (i, j) {
        var temp = this.data[j];
        this.data[j] = this.data[i];
        this.data[i] = temp;
    };
    // compare takes two indeces and compares whether these two should be swapped or not ! Remember we are sorting using bubblesort
    NumbersCollection.prototype.compare = function (i, j) {
        return this.data[i] > this.data[j];
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
