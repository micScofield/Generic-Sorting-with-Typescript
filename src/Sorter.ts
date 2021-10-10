export interface Collection {
  data: number[]
  swap(i: any, j: any): void
  compare(i: any, j: any): boolean
  length: number
}

export class Sorter {
  constructor(public collection: Collection) {}

  bubbleSort(): void {
    let noSwaps: boolean;

    for (var i = this.collection.length; i > 0; i--) {
      noSwaps = true;

      for (let j = 0; j < i - 1; j++) {
        if (this.collection.compare(i, j)) {
          this.collection.swap(i, j)
        }
        // if (this.collection[j] > this.collection[j + 1]) {
        //   let temp = this.collection[j];
        //   this.collection[j] = this.collection[j + 1];
        //   this.collection[j + 1] = temp;
        //   noSwaps = false;
        // }
      }
      if (noSwaps) break;
    }
  }
}