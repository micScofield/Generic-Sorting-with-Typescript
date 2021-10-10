import { Sorter } from "./sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  swap(i: number, j: number): void {
    const characters = this.data.split("");
    let temp = characters[j];
    characters[j] = characters[i];
    characters[i] = temp;

    this.data = characters.join("");
  }

  // compare takes two indeces and compares whether these two chars should be swapped or not ! Remember we are sorting using bubblesort
  // For general usecase we are converting them to lowercase and then comparing
  compare(i: number, j: number): boolean {
    return this.data[i].toLowerCase() > this.data[j].toLowerCase();
  }
}
