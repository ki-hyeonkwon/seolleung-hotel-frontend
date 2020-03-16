import React, { Component } from "react";
import styled from "styled-components";

class JoinSubTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: ["약관 동의", "정보 입력", "가입 완료"],
      pageSubTitle1: [
        "라한호텔 고객님의 소중한 개인정보 보호를 위해 최선을 다하고 있으며",
        "개인 정보 보호 관련 법규를 준수합니다."
      ],
      pageSubTitle2: [
        "편리한 클럽 라한 이용 및 가입 완료를 위하여 고객님의 멤버십 및",
        "개인 정보를 입력해주시기 바랍니다."
      ],
      pageSubTitle3: [
        "환영합니다. 클럽 라한 가입을 축하드립니다. 고객님의 가입 정보는",
        "다음과 같으며, 클럽 라한의 다양한 서비스를 경험해보시기 바랍니다."
      ]
    };
  }

  render() {
    return (
      <SectionHeader>
        <SectionTitile>
          {this.state.pageTitle[this.props.pageNum - 1]}
        </SectionTitile>
        <SectionSubTitle>
          {this.state["pageSubTitle" + this.props.pageNum][0]}
          <span>{this.state["pageSubTitle" + this.props.pageNum][1]}</span>
        </SectionSubTitle>
      </SectionHeader>
    );
  }
}

const SectionHeader = styled.div`
  padding: 0 30px;
`;

const SectionTitile = styled.h3`
  font-size: 28px;
  font-weight: 400;
  font-family: "Noto Sans KR", sans-serif;
`;

const SectionSubTitle = styled.p`
  margin-top: 17px;
  font-size: 15px;

  span {
    display: block;
  }
`;

export default JoinSubTitle;
