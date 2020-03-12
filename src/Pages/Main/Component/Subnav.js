import React, { Component } from "react";
import NavList from "./NavList";
import { SubnavData } from "./SubnavData";
import styled, { css } from "styled-components";

export default class Subnav extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     index: 0
  //   };
  // }
  // handleClick = e => {
  //   // console.log(this.props.section[0].current);
  //   this.props.section.current &&
  //     this.props.section.current.scrollIntoView({
  //       block: "start",
  //       behavior: "smooth"
  //     });

  // if (this.props.section.current.offsetTop === 1000) {
  //   this.props.onChange();
  // } else {
  //   this.props.onChange("move-section");
  // }
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
                onClick={e => this.props.handleClick(e)}
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
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: rgb(255, 255, 255);
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
