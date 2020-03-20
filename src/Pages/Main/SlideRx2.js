import React, { Component } from "react";
import NavBar from "Component/Nav/NavBar";
import SlideRx from "./SlideRx";
import Offers from "./Component/Offers";
import SlideRx2 from "./SlideRx2";
import { SubnavData } from "./Component/SubnavData";
import styled, { css } from "styled-components";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vIndex: 0,
      moveTitle: false
    };
  }

  handleClick = id => {
    id === 0 &&
      this.section0.scrollIntoView({ block: "start", behavior: "smooth" });
    id === 1 &&
      this.section1.scrollIntoView({ block: "start", behavior: "smooth" });
    id === 2 &&
      this.section2.scrollIntoView({ block: "start", behavior: "smooth" });
    id === 3 &&
      this.section3.scrollIntoView({ block: "start", behavior: "smooth" });
    id === 4 &&
      this.section4.scrollIntoView({ block: "start", behavior: "smooth" });
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
    if (scrollTop > 104 && scrollTop < 3367) {
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
      <div>
        <NavBar />
        <SlideRx></SlideRx>
        {/* <section ref={ref => (this.section2 = ref)}> */}
        <Offers />
        {/* </section> */}
        <SlideRx2></SlideRx2>
        <SubnavContainer>
          <Inner>
            <Deco changeColor={this.state.moveTitle}></Deco>
            <SubnavCtn changeColor={this.state.moveTitle}>
              {SubnavData.map((el, i) => (
                <li
                  key={i}
                  onClick={() => {
                    this.handleClick(i);
                  }}
                >
                  {el.title}
                </li>
              ))}
            </SubnavCtn>
          </Inner>
        </SubnavContainer>
      </div>
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
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: rgb(255, 255, 255);

    ${props => {
      if (props.changeColor) {
        return css`
          border-left: solid 1px #232937;
        `;
      }
    }}
  }
`;

const SubnavCtn = styled.ul`
  position: absolute;
  left: 0;
  bottom: 35px;
  text-align: left;
  -webkit-transition: bottom 0.5s;
  transition: bottom 0.5s;
  color: #fff
    ${props => {
      if (props.changeColor) {
        return css`
          color: #232937;
        `;
      }
    }};

  li {
    font-size: 22px;
    line-height: 35px;
    cursor: pointer;
  }
`;
