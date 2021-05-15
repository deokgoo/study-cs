import { IStack, IStackNode } from './type';

// linked list로 구현한 Stack
class LinkedListStack<T> implements IStack<T> {
  private currentNode: IStackNode<T> = null;
  private cnt: number = 0;
  private readonly maxStack: number;

  constructor(maxStack) {
    this.maxStack = maxStack;
  }
  isEmpty() {
    return !!this.currentNode;
  }
  push(data: T) {
    if(this.cnt+1 > this.maxStack) throw new Error('stack overflow');
    const newNode: IStackNode<T> = {
      next: this.currentNode,
      data,
    }
    this.currentNode = newNode;
    this.cnt+=1;
  }
  pop() {
    if(!this.currentNode) throw new Error('stack is empty');
    const topData = this.currentNode.data;
    this.currentNode = this.currentNode.next;
    this.cnt-=1;
    return topData;
  }
  peek() {
    if(!this.currentNode) throw new Error('stack is empty');
    return this.currentNode.data;
  }
}
