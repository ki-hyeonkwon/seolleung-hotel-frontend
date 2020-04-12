import React, { Component } from "react";
import styled from "styled-components";

class JoinLink extends Component {
  render() {
    return (
      <SectionButtonBox>
        <SectionButton onClick={this.props.buttonCancel} type="button">
          취소
        </SectionButton>
        <SectionButton next onClick={this.props.buttonSubmit} type="button">
          {this.props.buttonText}
        </SectionButton>
      </SectionButtonBox>
    );
  }
}

const SectionButtonBox = styled.div`
  margin: 40px 0 20px;
  text-align: center;

  button:first-child {
    margin-right: 10px;
  }
`;

const SectionButton = styled.button`
  position: relative;
  width: 140px;
  height: 40px;
  font-size: 14px;
  background-color: ${props => (props.next ? "#a68164" : "#fff")};
  border: 1px solid #a68164;
  outline: 0;
  cursor: pointer;

  -webkit-transition: color 0.5s ease;
  transition: color 0.5s ease;

  &:after {
    content: "";
    position: absolute;
    background: ${props => (props.next ? "#000" : "#f1eeee")};
    opacity: ${props => (props.next ? 0.2 : 1)};
    width: 100%;
    height: 0%;
    left: 0%;
    bottom: 0;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    z-index: -1;
  }

  &:hover:after {
    height: 100%;
    color: ${props => (props.next ? "" : "#000")};
    z-index: ${props => (props.next ? 1 : -1)};
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  &:hover {
    color: ${props => (props.next ? "#fff" : "#000")};
    transition: ${props => (props.next ? "" : "color 0.5s ease")};
    z-index: 10;
  }
`;

export default JoinLink;
