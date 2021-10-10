"use strict";
// Quick Note: Earlier generic sorting was done using interface but in this use case abstract classes make more sense. Hence, made the changes
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// export interface Collection {
//   swap(i: number, j: number): void;
//   compare(i: number, j: number): boolean;
//   length: number;
// }
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    // constructor(public collection: Collection) {}
    Sorter.prototype.bubbleSort = function () {
        for (var i = 0; i < this.length; i++) {
            for (var j = 0; j < this.length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
        console.log(this);
    };
    return Sorter;
}());
exports.Sorter = Sorter;
