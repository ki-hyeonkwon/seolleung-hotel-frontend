import React, { Component } from "react";
import styled from "styled-components";
import logo from "Images/logo.svg";

export default class Footer extends Component {
  render() {
    return (
      <>
        <FooterContainer>
          <FooterWrap>
            <img src={logo} alt="로고이미지"></img>
            <FooterCnt>
              <ul>
                <li>Brand Story</li>
                <li>Club Lahan</li>
              </ul>
              <ul>
                <li>Notice</li>
                <li>Contact us</li>
                <li>Career</li>
              </ul>
              <ul>
                <li>개인정보처리방침</li>
                <li>영상정보처리기기 운영, 관리방침</li>
                <li>윤리강령</li>
                <li>제안/제보</li>
              </ul>
              <FooterRight>
                <ul>
                  <li>
                    <img
                      src="https://www.lahanhotels.com/intro/images/icon_fb.png"
                      alt="sns이미지"
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.lahanhotels.com/intro/images/icon_insta.png"
                      alt="sns이미지"
                    />
                  </li>
                </ul>
              </FooterRight>
            </FooterCnt>
          </FooterWrap>
        </FooterContainer>
      </>
    );
  }
}

const FooterContainer = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  background-color: #161e27;
`;

const FooterWrap = styled.div`
  width: 80vw;
  margin-top: 80px;
  position: relative;
  display: flex;
  justify-content: space-between;

  img {
    position: absolute;
    top: 0;
  }
`;

const FooterCnt = styled.div`
  position: absolute;
  right: 0;
  width: 60%;
  display: flex;
  justify-content: space-between;
  ul {
    font-size: 14px;
    color: #fff;
    font-family: "MaisonNeue-Light";

    li {
      margin-top: 10px;
    }
    &:nth-child(2) {
    }
  }
`;

const FooterRight = styled.div`
  width: 100px;
  position: relative;
  ul {
    position: absolute;
    right: 20px;
    top: 10px;
    li {
      &:nth-child(2) {
        margin-left: 40px;
      }
      img {
        width: 20px;
        height: 20px;
        transform: rotate(90deg);
      }
    }
  }
`;
