import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { createText } from "../redux/modules/todos";
import uuid from "react-uuid";
import Ycomputer from "../font/Ycomputer.ttf";

const StyledForm = styled.div`
  display: flex;
  @font-face {
    font-family: "Ycomputer";
    src: local("Ycomputer");
    font-style: normal;
    src: url(${Ycomputer}) format("truetype");
  }
  font-family: "Ycomputer";
  color: white;
  #input_zone {
    width: 80%;
    height: 100px;

    margin: 0 auto;
    align-items: center;
    display: flex;
  }
  #input_zone label {
    margin-left: 60px;
    margin-right: 10px;
    font-size: 24px;
  }

  #input_zone input {
    margin-left: 30px;
    margin-right: 10px;
    background: transparent;
    border-bottom: 1px solid white;
    box-shadow: none;
    font-size: 24px;
    color: white;
  }
  #input_zone button {
    justify-content: flex-end;
  }
`;

function InputForm(props) {
  const label_1 = props.label_1;
  const label_2 = props.label_2;
  const button_1 = props.button;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  function addTextHandler() {
    dispatch(
      createText({
        id: uuid(),
        title: title,
        content: content,
        isDone: false,
      })
    );
  }

  return (
    <StyledForm>
      <div id="input_zone">
        <label>TITLE</label>:
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <label>CONTENT</label>:
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></input>
        <button onClick={addTextHandler}>{button_1}</button>
      </div>
    </StyledForm>
  );
}
export default InputForm;
