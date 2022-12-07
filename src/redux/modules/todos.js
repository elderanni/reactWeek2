// action create case문의 상수

const CREATE_TEXT = "CREATE_TEXT";
const UPDATE_DONE = "UPDATE_DONE";
const DELETE_TEXT = "DELETE_TEXT";
const READ_TEXT = "READ_TEXT";

//action create export 해줄 함수들

export const createText = (payload) => {
  return {
    type: CREATE_TEXT,
    payload: payload,
  };
};

export const updateDone = (payload) => {
  return {
    type: UPDATE_DONE,
    payload: payload,
  };
};

export const deleteText = (payid) => {
  return {
    type: DELETE_TEXT,
    payid: payid,
  };
};

export const readText = (payid) => {
  return {
    type: READ_TEXT,
    payid: payid,
  };
};

// 초기 상태값
const initialState = [
  {
    id: 1, // id는 모두 고유값이어야 합니다.
    title: "리액트 강의보기",
    content: "챕터 1부터 챕터 12까지 학습",
    isDone: false,
  },
  {
    id: 2, // id는 모두 고유값이어야 합니다.
    title: "점심 먹기",
    content: "점심 뭐먹지..?",
    isDone: false,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TEXT:
      let copyState = [...state];
      copyState.push(action.payload);
      console.log(action.payload);
      return copyState;

    case UPDATE_DONE:
      console.log("ap" + action.payload);
      const tempUpdate = state.map(function (obj) {
        let obj2 = { ...obj }; // arr의 배열을 전개연산자로 복사해준다.

        console.log("uppay", action.payload.id);
        if (obj2.id == action.payload.id) {
          if (obj2.isDone == false) {
            obj2.isDone = true;
          } else if (obj2.isDone == true) {
            obj2.isDone = false;
          }
        }
        console.log("obj2", obj2);
        return obj2;
      });

      return tempUpdate;
    case DELETE_TEXT:
      console.log("payload" + action.payid.id);
      let tempDelete = state.filter((todo) => todo.id !== action.payid.id);
      console.log("temp" + tempDelete);

      return tempDelete;

    case READ_TEXT:
      console.log("payid + action.pa");
      let tempRead = state.filter((todo) => todo.id === action.payid.id);
      console.log("read" + tempRead);
      return tempRead;

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;
