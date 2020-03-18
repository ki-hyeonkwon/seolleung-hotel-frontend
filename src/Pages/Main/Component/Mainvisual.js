import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

export default class Mainvisual extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     slicIdx: 1,
  //     autoSlic: setInterval(this.handlerSlic, 3000)
  //   };
  // }

  // handlerSlic = () => {
  //   this.state.slicIdx !== 3
  //     ? this.setState({ slicIdx: this.state.slicIdx + 1 })
  //     : this.setState({ slicIdx: 1 });
  // };

  // componentWillUnmount = () => {
  //   clearInterval(this.state.autoSlic);
  // };

  render() {
    //const { slicIdx } = this.state;
    return (
      <MainvisualContainer>
        <MainvisualCnt>
          <MainvisualImg>
            <Slide1></Slide1>
            <Slide2></Slide2>
            <Slide3></Slide3>
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
  width: 100%;
  height: 100%;
`;

const fade1 = keyframes`
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fade2 = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const fade3 = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const Slide1 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://www.lahanhotels.com/intro/images/kv-1.jpg");
  animation: ${fade1} 8s infinite;
`;

const Slide2 = styled(Slide1.withComponent("div"))`
  background-image: url("https://www.lahanhotels.com/intro/images/kv-2.jpg");
  animation: ${fade2} 8s infinite;
`;

const Slide3 = styled(Slide1.withComponent("div"))`
  background-image: url("https://www.lahanhotels.com/intro/images/kv-3.jpg");
  animation: ${fade3} 8s infinite;
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
