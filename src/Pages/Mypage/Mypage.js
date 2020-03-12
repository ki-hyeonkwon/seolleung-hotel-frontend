import React, { Component } from "react";
import LeftArea from "./Component/LeftArea";
import RightArea from "./Component/RightArea";
import styled from "styled-components";

export default class Mypage extends Component {
  render() {
    return (
      <>
        <MypageContainer>
          <MypageContent>
            <MypageBox>
              <LeftArea></LeftArea>
              <RightArea></RightArea>
            </MypageBox>
          </MypageContent>
          <FooterContainer>
            <Footer></Footer>
          </FooterContainer>
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
  border: 1px solid #cec2b8;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 720px;
    width: 1100px;
}
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 280px;
  background-color: #161e27;
`;

const Footer = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  background: #161e27;
`;
