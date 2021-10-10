import { CharactersCollection } from "./CharactersCollection";
import { SinglyLinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

new NumbersCollection([3, 0, -5, 10]).bubbleSort();
new CharactersCollection("sanyam").bubbleSort();

const sll = new SinglyLinkedList();
sll.push(3);
sll.push(0);
sll.push(-5);
sll.push(10);

sll.bubbleSort()
sll.print();