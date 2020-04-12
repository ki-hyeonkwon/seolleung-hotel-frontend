import React, { Component } from "react";
import { SubnavData } from "./SubnavData";
import styled, { css } from "styled-components";

export default class Subnav extends Component {
  state = {
    movePX: 0,
    moveTitle: false,
    moveList: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    console.log(scrollTop);
    if (scrollTop > 3000) {
      console.log("in");
      this.setState({ moveTitle: true });
      this.setState({ moveList: true });
    } else {
      console.log("in");
      this.setState({ moveList: false });
      this.setState({ moveTitle: false });
    }
  };
  render() {
    return (
      <SubnavContainer>
        <Inner>
          <Deco changeColor={this.state.moveTitle}></Deco>
          <SubnavCtn>
            {SubnavData.map((el, i) => (
              <li
                changeColor={this.state.moveTitle}
                key={i}
                section={this.props.section[i]}
                onClick={this.handleClick}
              >
                {el.title}
              </li>
            ))}
          </SubnavCtn>
        </Inner>
      </SubnavContainer>
    );
  }
}

const SubnavContainer = styled.div`
  position: fixed;
  left: 60px;
  right: 60px;
  bottom: 30px;
  z-index: 100;
`;

const Inner = styled.div`
  position: relative;
  max-width: 1480px;
  margin-left: auto;
  margin-right: auto;
`;

const Deco = styled.div`
  position: absolute;
  left: -20px;
  right: -20px;
  bottom: 0;
  border-bottom: solid 1px #fff;

  ${props => {
    if (props.changeColor) {
      return css`
        border-bottom: solid 1px #232937;
      `;
    }
  }}
  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 35px;
    border-left: solid 1px #fff;
  }
`;

const SubnavCtn = styled.ul`
  position: absolute;
  left: 0;
  bottom: 35px;
  text-align: left;
  -webkit-transition: bottom 0.5s;
  transition: bottom 0.5s;

  li {
    font-size: 22px;
    line-height: 35px;
    cursor: pointer;
    color: #fff
      ${props => {
        if (props.changeColor) {
          return css`
            color: #232937;
          `;
        }
      }};
  }
`;
