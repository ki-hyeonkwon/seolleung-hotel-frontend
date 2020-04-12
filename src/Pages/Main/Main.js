import React, { Component } from "react";
import NavBar from "Component/Nav/NavBar";
import Mainvisual from "./Component/Mainvisual";
import Ourhotels from "./Component/Ourhotels";
import Offers from "./Component/Offers";
import Instagram from "./Component/Instagram";
import Subnav from "./Component/Subnav";
import Footer from "./Component/Footer";
import { SubnavData } from "./Component/SubnavData";
// import "fullpage.js/vendors/scrolloverflow";
import styled, { css } from "styled-components";

export default class Main extends Component {
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
    if (scrollTop > 280 && scrollTop < 3400) {
      console.log("in");
      this.setState({ moveTitle: true });
      this.setState({ moveList: true });
    } else {
      console.log("in");
      this.setState({ moveList: false });
      this.setState({ moveTitle: false });
    }
  };

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

  render() {
    console.log(window.offsetTop);
    // const { section } = this.state;
    return (
      <Container>
        <NavBar />
        <section ref={ref => (this.section0 = ref)}>
          <Mainvisual />
        </section>
        <section ref={ref => (this.section1 = ref)}>
          <Ourhotels />
        </section>
        <section ref={ref => (this.section2 = ref)}>
          <Offers />
        </section>
        <section ref={ref => (this.section3 = ref)}>
          <Instagram />
        </section>
        <section ref={ref => (this.section4 = ref)}>
          <Footer />
        </section>
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
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 100vh;

  section {
    position: relative;
    display: flex;
    width: 100%;
    height: 100vh;
  }
`;

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
