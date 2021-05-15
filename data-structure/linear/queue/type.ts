export interface IQueue<T> {
  isEmpty: () => boolean;
  enQueue: (T) => void;
  dequeue: () => T;
  peek: () => T;
}

export interface IQueueNode<T> {
  data: T;
  next: IQueueNode<T>;
}
