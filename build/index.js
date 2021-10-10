"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var sorter_1 = require("./sorter");
var numbers = new NumbersCollection_1.NumbersCollection([3, 0, -5, 10]);
var sorter = new sorter_1.Sorter(numbers);
sorter.bubbleSort();
