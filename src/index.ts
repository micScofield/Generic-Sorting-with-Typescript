import { CharactersCollection } from "./CharactersCollection";
import { SinglyLinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./sorter";

const numbers = new NumbersCollection([3, 0, -5, 10])
const characters = new CharactersCollection('sanyam')

new Sorter(numbers).bubbleSort()
new Sorter(characters).bubbleSort()

const sll = new SinglyLinkedList()
sll.push(3)
sll.push(0)
sll.push(-5)
sll.push(10)

new Sorter(sll).bubbleSort()
sll.print()