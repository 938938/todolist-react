# TodoList - React.ver

[한입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지](https://inf.run/2XT4) 강의를 참고로 하여 만들어본 TodoList 입니다.<br>
[TodoList](https://938-todo-list.web.app)를 통해 직접 사용해보실 수 있습니다.
<br>
자세한 제작 기록은 블로그의 [React 로 Todo List 만들기](https://fdaytday.tistory.com/category/Project) 카테고리에서 확인하실 수 있습니다.<br>
(해당 카테고리의 첫 글 [
React 로 Todo List 만들기(1)
](https://fdaytday.tistory.com/46))

<br>

---

<br>

![ver2.0](https://user-images.githubusercontent.com/92746200/172867128-f7c0df84-f81b-404c-b9c6-921a51f5d271.png)

## 업데이트 기록

- ver1 <br>
  기본적인 TodoList의 기능 구현. 할일 입력, 제거, 완료한 할일 표시, 중요한 할일 표시를 할 수 있습니다.
- ver1.1 <br>
  시계 기능 구현.
- ver1.2 <br>
  React.memo, useCallback, useReducer을 사용하여 최적화 진행.
- ver1.2.1 <br>
  Context를 사용하여 최적화를 진행.
- ver1.2.2 <br>
  localStorage를 사용, 데이터 저장이 가능해짐.
- ver1.2.3 <br>
  가독성 고려 완료한 할 일을 아래로, 중요한 할 일은 위로 배치되도록 변경.<br>
  완료한 할 일도 남은 할 일에 포함되는 오류 수정.
- ver1.2.4 <br>
  CSS 수정.
  배포 시작.
- ver1.3.0<br>
  CSS 수정(할 일의 중요도를 체크 했을 경우 아이콘 변경. 가독성 개선.)
  메모장으로 이동할 수 있는 버튼 추가(메모장 기능은 아직 미구현)
- ver1.3.1<br>
  CSS 일부 수정(타이틀을 위로 변경)
  할 일 - 수행 여부 체크를 해도 중요도 체크가 되어있으면 아래로 내려가지 않는 오류 수정.
  메모장 - 메모장 메인 페이지 구성. 새 메뉴 추가 기능 구현(저장, 삭제, 수정은 아직 미구현입니다)
- ver1.3.2<br>
  메모장의 수정, 삭제, 상세 페이지 기능 구현. 저장 기능은 아직 미구현입니다.
- ver1.4.0<br>
  메모장의 데이터를 localStorgage에 연결, 입력된 데이터를 보존할 수 있습니다.

## 앞으로 업데이트 할 내용(예정, 순서 무관)

- ~~시계 기능 추가~~
- ~~localState를 이용한 데이터 저장~~
- ~~완료한 할일을 할일리스트 아래로 이동하는 기능~~
- ~~중요한 할일을 할일리스트 위로 이동~~
- ~~중요한 할일을 체크했을 경우, 아이콘을 색칠된 별로 변경~~
- 가장 처음 접속했을 경우, 안내 페이지 띄우기?
- ~~상단에 TodoList 페이지 버튼 추가하고 옆에 메모장 버튼 추가.~~
- ~~메모장 페이지를 구현 - 진행중.~~
- 사용하기 편한 CSS 구현
