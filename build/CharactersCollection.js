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
        var characters = this.data.split('');
        var temp = characters[j];
        characters[j] = characters[i];
        characters[i] = temp;
        this.data = characters.join('');
    };
    // compare takes two indeces and compares whether these two chars should be swapped or not ! Remember we are sorting using bubblesort
    // For general usecase we are converting them to lowercase and then comparing
    CharactersCollection.prototype.compare = function (i, j) {
        return this.data[i].toLowerCase() > this.data[j].toLowerCase();
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
