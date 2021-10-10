import { Collection } from "./sorter";

export class CharactersCollection implements Collection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  swap(i: number, j: number): void {
    
  }

  // compare takes two indeces and compares whether these two should be swapped or not ! Remember we are sorting using bubblesort
  compare(i: number, j: number): boolean {
    return this.data[i] > this.data[j];
  }
}
