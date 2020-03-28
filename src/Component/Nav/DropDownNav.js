import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

export default class DropDownNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseToggle: false
    };
  }
  mouseOn = () => {
    this.state.mouseToggle
      ? this.setState({ mouseToggle: false })
      : this.setState({ mouseToggle: true });
  };

  render() {
    console.log("hi", this.props.menu);

    return (
      <NavBoxLi onMouseEnter={this.mouseOn} onMouseLeave={this.mouseOn}>
        <DropDownTitle>{this.props.title}</DropDownTitle>
        <DropDownUl hotel onOff={this.state.mouseToggle}>
          {this.props.menu.map((list, i) => {
            return <DropDownLi key={i}>{list}</DropDownLi>;
          })}
        </DropDownUl>
      </NavBoxLi>
    );
  }
}

// 공용CSS
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBoxLi = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 44px;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
`;

const DropDownTitle = styled(Center.withComponent("div"))`
  width: 112px;
  height: 44px;
  text-align: center;
  font-size: 14px;
  background-color: transparent;
  color: #181a1c;
  &:hover {
    color: rgb(166, 129, 100);
  }
`;
const DropDownUl = styled.ul`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 112px;
  top: 45px;
  padding: 25px 0 20px 30px;
  font-size: 14px;
  background-color: #fff;
  display: ${props => (props.onOff ? "block" : "none")};
  ${props => {
    if (props.hotel) {
      return css`
        animation: ${fadeOn} 0.5s linear;
      `;
    }
  }}
`;

const DropDownLi = styled.li`
  height: 30px;
  cursor: pointer;
`;

const fadeOn = keyframes`
from{
  opacity:0;
  top: 64px;
}to{
  opacity:1;
  top: 45px;
}
`;
