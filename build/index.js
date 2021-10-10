"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./CharactersCollection");
var NumbersCollection_1 = require("./NumbersCollection");
var sorter_1 = require("./sorter");
var numbers = new NumbersCollection_1.NumbersCollection([3, 0, -5, 10]);
var characters = new CharactersCollection_1.CharactersCollection('sanyam');
new sorter_1.Sorter(numbers).bubbleSort();
new sorter_1.Sorter(characters).bubbleSort();
