"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.swap = function (i, j) {
    };
    // compare takes two indeces and compares whether these two should be swapped or not ! Remember we are sorting using bubblesort
    CharactersCollection.prototype.compare = function (i, j) {
        return this.data[i] > this.data[j];
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
