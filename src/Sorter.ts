export interface Collection {
  data: number[] | string
  swap(i: any, j: any): void
  compare(i: any, j: any): boolean
  length: number
}

export class Sorter {
  constructor(public collection: Collection) {}

  bubbleSort(): void {
    for (var i = this.collection.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (this.collection.compare(i, j)) {
          this.collection.swap(i, j)
        }
      }
    }
    console.log(this.collection)
  }
}