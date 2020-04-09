import React, { Component } from "react";
import styled from "styled-components";
import Information from "./Information";
import Points from "./Points";
import Benefits from "./Benefits";

class IntroLeft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabText: ""
    };
  }

  TabClick = e => {
    this.setState({
      tabText: e.target.getAttribute("data-name")
    });
  };

  SwitchRender = () => {
    switch (this.state.tabText) {
      case "Information":
        return <Information />;

      case "Points":
        return <Points />;

      case "Benefits":
        return <Benefits />;

      default:
        return <Information />;
    }
  };

  render() {
    return (
      <SectionLeft>
        <IntroSubTitle>membership</IntroSubTitle>
        <IntroTitle>
          클럽 라한은 라한호텔 전 지점에서 포인트
          <span>적립 및 멤버 전용 혜택을 누리실 수 있는 무료</span>
          <span>멤버십입니다. 멤버 등급에 따라 객실</span>
          <span>업그레이드, 체크아웃 시간 연장 등 다양한</span>
          특전이 제공됩니다.
        </IntroTitle>
        <div>
          <IntroButtonList>
            <li>
              <IntroButton data-name="Information" onClick={this.TabClick}>
                Information
              </IntroButton>
            </li>
            <li>
              <IntroButton data-name="Points" onClick={this.TabClick}>
                Points
              </IntroButton>
            </li>
            <li>
              <IntroButton data-name="Benefits" onClick={this.TabClick}>
                Benefits
              </IntroButton>
            </li>
          </IntroButtonList>
          <div>{this.SwitchRender()}</div>
        </div>
      </SectionLeft>
    );
  }
}

const SectionLeft = styled.div`
  padding: 200px 0 0 70px;
`;

const IntroSubTitle = styled.em`
  display: block;
  margin-bottom: 25px;
  text-transform: uppercase;
  font-family: "Gotham-Light";
  font-size: 14px;
  font-style: normal;
  letter-spacing: 0px;
`;

const IntroTitle = styled.h2`
  color: #1d212a;
  margin-bottom: 80px;
  padding-right: 120px;
  font-size: 28px;
  line-height: 1.56;
  font-weight: 400;
  font-family: "Noto Sans KR", sans-serif;

  span {
    display: block;
  }
`;

const IntroButtonList = styled.ul`
  display: flex;
  margin-bottom: 40px;

  li {
    margin-right: 30px;
  }
`;

const IntroButton = styled.button`
  font-size: 16px;
  font-family: "MaisonNeue-Light";
  color: #1d212a;
  outline: 0;
  border: 0;
  cursor: pointer;
`;

export default IntroLeft;
