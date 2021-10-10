import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./sorter";

const numbers = new NumbersCollection([3, 0, -5, 10])

const sorter = new Sorter(numbers)

sorter.bubbleSort()