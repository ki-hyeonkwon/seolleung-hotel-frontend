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
  width: 140px;
  height: 40px;
  font-size: 14px;
  background-color: ${props => (props.next ? "#a68164" : "#fff")};
  border: 1px solid #a68164;
  outline: 0;
  cursor: pointer;
`;

export default JoinLink;
