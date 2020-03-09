import React, { Component } from "react";
import styled from "styled-components";

class JoinTitle extends Component {
  render() {
    return (
      <SectionHeaderBox>
        <SectionHeaderTitle>
          JOIN <span>MEMBERSHIP</span>
        </SectionHeaderTitle>
        <SectionHeaderCont>
          <SectionHeaderListItem color={this.props.titleFirst}>
            약관 동의 <span>1</span>
          </SectionHeaderListItem>
          <SectionHeaderListItem color={this.props.titleSecond}>
            정보 입력 <span>2</span>
          </SectionHeaderListItem>
          <SectionHeaderListItem color={this.props.titleThird}>
            가입 완료 <span>3</span>
          </SectionHeaderListItem>
        </SectionHeaderCont>
      </SectionHeaderBox>
    );
  }
}

const SectionHeaderBox = styled.section`
  position: absolute;
  left: 100px;
`;

const SectionHeaderTitle = styled.h2`
  margin-bottom: 20px;
  font-family: "Gotham-Light";
  font-size: 32px;
  font-weight: 300;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: 1px;

  span {
    display: block;
  }
`;

const SectionHeaderCont = styled.ul`
  span {
    display: inline-block;
    margin-left: 6px;
    font-size: 14px;
    font-family: "PerpetuaStd";
    vertical-align: middle;
  }
`;

const SectionHeaderListItem = styled.li`
  font-size: 22px;
  font-family: "Noto Sans KR", sans-serif;
  color: ${props =>
    props.color === "active"
      ? "#a68164"
      : props.color === "pass"
      ? "#1d212a"
      : "#e3e0de"};
`;

export default JoinTitle;
