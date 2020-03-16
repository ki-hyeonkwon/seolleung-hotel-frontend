import React, { Component } from "react";
import styled from "styled-components";

export default class Mainvisual extends Component {
  render() {
    return (
      <MainvisualContainer>
        {this.props.children}
        <MainvisualCnt>
          <MainvisualImg>
            <img
              src="https://www.lahanhotels.com/intro/images/kv-1.jpg"
              alt="비주얼배경1"
            />
            <img
              src="https://www.lahanhotels.com/intro/images/kv-2.jpg"
              alt="비주얼배경2"
            />
            <img
              src="https://www.lahanhotels.com/intro/images/kv-3.jpg"
              alt="비주얼배경3"
            />
          </MainvisualImg>
          <MainvisualTxt>
            <img
              src="https://www.lahanhotels.com/intro/images/hero_logo.png"
              alt="로고이미지"
            />
            <h3>JOURNEY BEYOND</h3>
            <div>
              라한에서의 모든 순간은 즐거운 <br />
              기억이 됩니다.
            </div>
          </MainvisualTxt>
        </MainvisualCnt>
      </MainvisualContainer>
    );
  }
}

const MainvisualContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MainvisualCnt = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  left: 0;
  top: 0;
  z-index: 1;
`;
const MainvisualImg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  img {
    position: absolute;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    background-color: transparent;
    width: auto;
    height: auto;
  }
`;

const MainvisualTxt = styled.div`
  position: absolute;
  top: 40vh;
  right: 200px;
  color: #fff;
  text-align: center;
  z-index: 10;

  img {
    width: 131px;
  }

  h3 {
    font-size: 42px;
    font-family: "GothamLight";
    line-height: 54px;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-right: 13px;
    letter-spacing: 3px;
  }

  div {
    font-size: 18px;
    line-height: 32px;
  }
`;
