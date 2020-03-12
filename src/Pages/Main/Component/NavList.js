import React, { Component } from "react";
import styled, { css } from "styled-components";

export default class NavList extends Component {
  handleClick = e => {
    this.props.section.current.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };

  render() {
    return <List onClick={this.handleClick}>{this.props.title}</List>;
  }
}

const List = styled.li`
  font-size: 22px;
  line-height: 35px;
  cursor: pointer;
  ${props => {
    if (props.color) {
      return css`
        color: #333;
      `;
    } else {
      return css`
        color: #fff;
      `;
    }
  }}
`;
