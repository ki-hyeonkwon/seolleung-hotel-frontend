import React, { Component } from "react";
import { Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

class JoinStep3 extends Component {
  render() {
    return (
      <section>
        <div>
          <JoinCompleteList>
            <li>
              <JoinCompleteTitle>고객명</JoinCompleteTitle>
              <p>{this.props.name}</p>
            </li>
            <li>
              <JoinCompleteTitle>아아디</JoinCompleteTitle>
              <p>{this.props.id}</p>
            </li>
            <li>
              <JoinCompleteTitle>클럽 라한 번호</JoinCompleteTitle>
              <p>{this.props.mem_num}</p>
            </li>
          </JoinCompleteList>
        </div>
        <div>
          <Link to="/login">
            <LoginBtn>Login</LoginBtn>
          </Link>
        </div>
      </section>
    );
  }
}

const JoinCompleteList = styled.ul`
  margin: 60px 0 20px;
  padding: 0 60px;

  li {
    display: flex;
    padding: 20px 0;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: 0;
    }
  }
`;

const JoinCompleteTitle = styled.em`
  display: inline-block;
  width: 35%;
  font-style: normal;
  letter-spacing: -0.6px;
  font-family: "Noto Sans KR", sans-serif;
`;

const LoginBtn = styled.a`
  display: block;
  width: calc(100% - 120px);
  margin: 0 60px;
  padding: 15px 0 10px;
  text-align: center;
  font-size: 26px;
  font-family: "PerpetuaStd";
  color: #000;
  background-color: #a68164;
`;

export default JoinStep3;
