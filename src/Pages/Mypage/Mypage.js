import React, { Component } from "react";
import NavBar from "Component/Nav/NavBar";
import LeftArea from "./Component/LeftArea";
import RightArea from "./Component/RightArea";
import Footer from "Components/Footer/Footer";
import styled from "styled-components";

export default class Mypage extends Component {
  render() {
    return (
      <>
        <MypageContainer>
          <NavBar />
          <MypageContent>
            <MypageBox>
              <LeftArea></LeftArea>
              <RightArea></RightArea>
            </MypageBox>
          </MypageContent>
          <Footer></Footer>
        </MypageContainer>
      </>
    );
  }
}

const MypageContainer = styled.div`
  width: 100vw;
`;

const MypageContent = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MypageBox = styled.div`
margin-top: 100px;
  border: 1px solid #cec2b8;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 720px;
    width: 1100px;
}
`;
