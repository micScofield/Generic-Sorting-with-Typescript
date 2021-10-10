import { Collection } from "./sorter";

export class NumbersCollection implements Collection {
    constructor(public data: number[]) {}

    length = this.data.length

    swap(i: number, j: number) {

    }

    // compare takes two indeces and compares whether these two should be swapped or not ! Remember we are sorting using bubblesort
    compare(i: number, j: number): boolean {
        return this.data[i] > this.data[j]
    }
}