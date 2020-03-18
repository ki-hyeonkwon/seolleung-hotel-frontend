import React, { Component } from "react";
import { SubnavData } from "./SubnavData";
import styled, { css } from "styled-components";

export default class Subnav extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     index: 0
  //   };
  // }
  // handleClick = () => {
  //   console.log(this.props.example);

  //   this.props.example &&
  //     this.props.example.scrollIntoView({
  //       block: "start",
  //       behavior: "smooth"
  //     });
  // };

  render() {
    return (
      <SubnavContainer>
        <Inner>
          <Deco></Deco>
          <SubnavCtn>
            {SubnavData.map((el, i) => (
              <li
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
  }
`;
