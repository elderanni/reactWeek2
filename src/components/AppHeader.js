import styled from "styled-components";
import Ycomputer from "../font/Ycomputer.ttf";

const Header = styled.div`
  width: 80%;
  height: 30px;
  color: white;
  font-size: 16px;
  margin: 0 auto;

  @font-face {
    font-family: "Ycomputer";
    src: local("Ycomputer");
    font-style: normal;
    src: url(${Ycomputer}) format("truetype");
  }
  font-family: "Ycomputer";
  .h_l_span {
    margin-left: 40px;
    float: left;
  }
  .h_r_span {
    float: right;
    margin-right: 20px;
    font-size: 14px;
  }
`;
function AppHeader() {
  return (
    <Header>
      <div>
        <span className="h_l_span">TODOLIST</span>
        <span className="h_r_span">REACT</span>
      </div>
    </Header>
  );
}

export default AppHeader;
