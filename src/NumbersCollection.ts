import { Collection } from "./sorter";

export class NumbersCollection implements Collection {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  swap(i: number, j: number): void {
    let temp = this.data[j];
    this.data[j] = this.data[i];
    this.data[i] = temp;
  }

  // compare takes two indeces and compares whether these two should be swapped or not ! Remember we are sorting using bubblesort
  compare(i: number, j: number): boolean {
    return this.data[i] > this.data[j];
  }
}
