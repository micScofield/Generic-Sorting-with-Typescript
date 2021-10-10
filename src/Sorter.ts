export interface Collection {
  data: number[] | string;
  swap(i: any, j: any): void;
  compare(i: any, j: any): boolean;
  length: number;
}

export class Sorter {
  constructor(public collection: Collection) {}

  bubbleSort(): void {
    for (let i = 1; i <= this.collection.length; i++) {
      for (let j = 0; j < i; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
    console.log(this.collection);
  }
}
