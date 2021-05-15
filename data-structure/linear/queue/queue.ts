import { IQueue, IQueueNode } from './type';

// linked list로 구현한 Queue
class LinkedListQueue<T> implements IQueue<T> {
  private front: IQueueNode<T>;
  private rear: IQueueNode<T>;

  isEmpty() {
    return !this.front;
  }
  enQueue(data: T) {
    const newQueueNode: IQueueNode<T> = {
      data,
      next: null,
    }
    if(this.isEmpty()) {
      this.front = newQueueNode;
      this.rear = newQueueNode;
    } else {
      this.rear.next = newQueueNode;
      this.rear = newQueueNode;
    }
  }
  dequeue() {
    if(this.isEmpty()) throw new Error('queue is empty');
    const frontData = this.front.data;
    this.front = this.front.next;
    return frontData;
  }
  peek() {
    if(this.isEmpty()) throw new Error('queue is empty');
    return this.front.data;
  }
}
