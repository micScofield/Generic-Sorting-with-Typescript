"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
        this.length = this.data.length;
    }
    NumbersCollection.prototype.swap = function (i, j) {
        var temp = this.data[j];
        this.data[j] = this.data[j + 1];
        this.data[j + 1] = temp;
    };
    // compare takes two indeces and compares whether these two should be swapped or not ! Remember we are sorting using bubblesort
    NumbersCollection.prototype.compare = function (i, j) {
        return this.data[i] > this.data[j];
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
