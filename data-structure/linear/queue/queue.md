# Queue
## Queue이란
- FIFO(First In First Out) 들어온 순서대로 처리되는 자료구조.
## 시간복잡도
- 원소를 삽입/삭제 : O(1)
### 장점
- 데이터의 삽입과 삭제가 빠르다. 
### 단점
- 중간에 위치한 데이터로의 접근이 어렵다
### 구현시 Method
- isEmpty: 스택이 비어 있는지 boolean으로 표현
- enQueue: 자료를 삽입
- deQueue: 먼저들어온 자료를 처리한다.
- peek: 먼저들어온 자료의 데이터를 표시
