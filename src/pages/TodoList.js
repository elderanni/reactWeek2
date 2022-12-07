import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Ycomputer from "../font/Ycomputer.ttf";

const StyledRead = styled.div`
  background: rgb(0, 0, 168);
  color: white;
  @font-face {
    font-family: "Ycomputer";
    src: local("Ycomputer");
    font-style: normal;
    src: url(${Ycomputer}) format("truetype");
  }
  font-family: "Ycomputer";
  max-width: 1600px;
  max-height: 800px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .fake_error {
    text-align: center;
    font-size: 20px;
    width: fit-content;
    height: fit-content;
    background: white;
    color: rgb(0, 0, 168);
  }

  div {
    margin-top: 15px;
  }
  button {
    margin-top: 20px;
    font-family: "Ycomputer";
    background: white;
    color: rgb(0, 0, 168);
  }
`;
function TodoList() {
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname.split("/");
  const id = path[2];
  console.log(id);
  const todos = useSelector((state) => state.todos);
  const text = todos.filter((todo) => todo.id == id);
  console.log(text.id);
  return (
    <StyledRead>
      <div className="fake_error">Windows</div>
      <div>
        <div>*ID : {text[0].id} 인 곳에서 치명적인 에러가 발생 했습니다.</div>
        <div>
          * 실행중인 프로그램 TITLE: {text[0].title} 응용 프로그램이 종료됩니다.
        </div>
        <div>* 에러가 발생한 내용은 CONTENT : {text[0].content} 입니다.</div>
        <div>* 시스템을 다시 시작하려면 버튼을 누르십시오</div>
        <div>
          실행중의 프로그램의 정보는 useNavigate로 처리해 손실되지 않습니다.
        </div>
        <div> 계속 진행하려면 아래 버튼을 누르십시오.</div>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        뒤로가기
      </button>
    </StyledRead>
  );
}

export default TodoList;
