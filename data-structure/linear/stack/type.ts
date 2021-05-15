export interface IStack<T> {
  isEmpty: () => boolean;
  push: (T) => void;
  pop: () => T;
  peek: () => T;
}
export interface IStackNode<T> {
  data: T;
  next: IStackNode<T> | null;
}
