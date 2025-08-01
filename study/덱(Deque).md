---
title: 덱(Deque)
notion_id: 242b8196-5542-808f-9dc3-e96d650a72f3
---
  
# 덱  
  
  
## 덱(deque; Double-Ended Queue)이란  
  
- 양쪽에서 모두 데이터를 넣고(Insert) 가져오는(Delete) 구조  
- Array로 구현 가능하다!  
    - 변수  
        - 배열로 선언된 deque  
        - 맨 앞에 넣었던 위치를 가리키는 front  
        - 맨 뒤에 넣을 위치를 가리키는 rear  
            - front와 rear의 정의를 반대로 할 경우, 그에 맞춰서 구현한다.  
        - 최대 덱 사이즈 maxDequeSize  
        - 현재 덱 사이즈 length  
    1. 초기화  
        - front = 0, rear = 0  
    2. 맨 앞에 추가  
        1. maxDequeSize === length 일 경우, 추가 x  
        2. front = (front - 1 + maxDequeSize) % maxDequeSize;  
            - 맨 뒤에서부터 차례대로 앞으로 채워 나가는 모양, 맨 앞에 도달했다면 맨 뒤로 보냄  
        3. deque[front] = value;  
        4. length++;  
    3. 맨 앞에 추가  
        1. maxDequeSize === length 일 경우, 추가 x  
        2. deque[rear] = value;  
        3. rear = (rear - 1 + maxDequeSize) % maxDequeSize;  
            - 맨 앞에서부터 차례대로 뒤로 채워 나가는 모양, 맨 뒤에 도달했다면 맨 앞으로 보냄  
        4. length++;  
    4. 맨 앞에 삭제  
        1. length === 0 일 경우, 삭제 x  
        2. value = deque[front]  
        3. front = (front + 1 + maxDequeSize) % maxDequeSize;  
        4. length--;  
    5. 맨 뒤에 삭제  
        1. length === 0 일 경우, 삭제 x  
        2. rear = (rear - 1 + maxDequeSize) % maxDequeSize;  
        3. value = deque[rear];  
        4. length--;  
    6. 길이 구하기  
        1. length 반환  
        2. 또는 (maxDequeSize - front + rear) % maxDequeSize, 이 방식은 마지막 동작이 삭제인지 추가인지 알아야 비어있는지 꽉찼는지 알 수 있음  
        3. 아니면 단순하게 최대 크기보다 1개만 더 크게 만들면 언제나 길이를 알 수 있음  
            - front === rear인 경우는, 비어있는지 꽉차있는지의 두가지 상태이기 때문  
  
[참조]  
  
  
[눈으로 개발하는 블로그 - JavaScript Deque(Double-Ended Queue) - 덱/데크 만들기, Data Structures](https://carrotweb.tistory.com/193)  
  
