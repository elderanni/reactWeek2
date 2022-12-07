import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteText, updateDone } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

function Done() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function deleteTextHandler(e, id) {
    console.log("call deletebutton");

    dispatch(deleteText({ id: id }));
    console.log("dispatch" + id);
  }

  function updateDoneHandler(e, id) {
    console.log("call updatebutton");
    console.log("dispatch" + id);

    dispatch(updateDone({ id: id }));
    console.log("dispatch" + id);
  }

  return (
    <div>
      {todos
        .filter((todo) => todo.isDone !== false)
        .map((temp) => (
          <div className="content_box" key={temp.id}>
            <div className="cb_title">{temp.title}</div>
            <div className="cb_content">{temp.content}</div>
            <div
              className="cb_read"
              onClick={() => {
                navigate("/todolist/" + temp.id);
              }}
            >
              상세보기
            </div>
            <div className="cb_button">
              <button
                className="cb_btnDel"
                onClick={(e) => {
                  deleteTextHandler(e, temp.id);
                }}
              >
                흊
              </button>

              <button
                className="cb_btnUpd"
                onClick={(e) => {
                  updateDoneHandler(e, temp.id);
                }}
              >
                {temp.isDone ? "취소" : "수정"}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
function Working() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function deleteTextHandler(e, id) {
    console.log("call deletebutton");

    dispatch(deleteText({ id: id }));
    console.log("dispatch" + id);
  }

  function updateDoneHandler(e, id) {
    console.log("call updatebutton");
    console.log("dispatch" + id);

    dispatch(updateDone({ id: id }));
    console.log("dispatch" + id);
  }

  return (
    <div>
      {todos
        .filter((todo) => todo.isDone === false)
        .map((temp) => (
          <div className="content_box" key={temp.id}>
            <div className="cb_title">{temp.title}</div>
            <div className="cb_content">{temp.content}</div>
            <div
              className="cb_read"
              onClick={() => {
                navigate("/todolist/" + temp.id);
              }}
            >
              상세보기
            </div>
            <div className="cb_button">
              <button
                className="cb_btnDel"
                onClick={(e) => {
                  deleteTextHandler(e, temp.id);
                }}
              >
                흊
              </button>
              <button
                className="cb_btnUpd"
                onClick={(e) => {
                  updateDoneHandler(e, temp.id);
                }}
              >
                {temp.isDone ? "취소" : "수정"}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

function List() {
  return (
    <StyledList>
      <h1>WORKING!</h1>
      <div className="row">
        <Working></Working>
      </div>
      <h1>Done!</h1>
      <div className="row">
        <Done></Done>
      </div>
    </StyledList>
  );
}
/*CSS for List*/
const StyledList = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  h1 {
    width: 100%;
    height: fit-content;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: white;
  }

  .row {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;

    gap: 12px;
    max-height: inherit;
  }
  .content_box {
    width: 200px;
    height: 200px;
    background-image: url("https://t1.daumcdn.net/cfile/tistory/1435863D4F244ECC23");
    background-size: cover;
    display: inline-block;
    margin: 12px;
  }

  .cb_title {
    margin-top: 20px;
    width: 100%;
    height: 10%;
    text-align: center;
    font-weight: bold;
  }

  .cb_content {
    padding: 15px;
    width: 100%;
    height: 35%;
  }

  .cb_read {
    width: 100%;
    height: fit-content;
    text-align: center;
  }
  .cb_read:hover {
    color: blue;
  }

  .cb_button {
    width: 100%;
    height: 20%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cb_button button {
    margin-left: 5px;
    font-size: 12px;
    width: 30%;
    border: 1px solid black;
    font-family: "Ycomputer";
  }
`;

export default List;
