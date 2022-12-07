import styled from "styled-components";
import AppHeader from "../components/AppHeader";
import InputForm from "../components/InputForm";
import List from "../components/List";
import Ycomputer from "../font/Ycomputer.ttf";

/* Body Style */

function TodoHome() {
  const Layout = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 1600px;
    max-height: 800px;
    background-image: url(https://betawiki.net/images/9/9c/Windows98-4.1.1602-Desktop.png);
    background-size: cover;
    @font-face {
      font-family: "Ycomputer";
      src: local("Ycomputer");
      font-style: normal;
      src: url(${Ycomputer}) format("truetype");
    }
    font-family: "Ycomputer";
  `;
  /* Body Style */

  return (
    <div id="app_body">
      <Layout>
        <AppHeader></AppHeader>
        <InputForm
          label_1="Title"
          label_2="Contents"
          button="Create"
        ></InputForm>
        <List>a</List>
      </Layout>
    </div>
  );
}

export default TodoHome;
