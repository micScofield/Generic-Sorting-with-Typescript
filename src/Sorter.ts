/* Quick Note: Earlier generic sorting was done using interface but in this use case abstract classes make more sense. Hence, made the changes.
If we feel the need to add a new Collection, all we need to do is extend this Sorter class and redefine the abstract methods with correct functionality. We never ever need to touch this Sorter class
*/

// export interface Collection {
//   swap(i: number, j: number): void;
//   compare(i: number, j: number): boolean;
//   length: number;
// }

export abstract class Sorter {
  abstract swap(i: number, j: number): void;
  abstract compare(i: number, j: number): boolean;
  abstract length: number;

  // constructor(public collection: Collection) {}

  bubbleSort(): void {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length -i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
    console.log(this);
  }
}
