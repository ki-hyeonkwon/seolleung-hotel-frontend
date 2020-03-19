import React, { Component } from "react";
import NavBar from "Component/Nav/NavBar";
import Mainvisual from "./Component/Mainvisual";
import Ourhotels2 from "./Component/Ourhotels2";
import Offers from "./Component/Offers";
import Instagram from "./Component/Instagram";
import Footer from "./Component/Footer";
import { SubnavData } from "./Component/SubnavData";
import ReactFullpage from "@fullpage/react-fullpage";
import styled, { css } from "styled-components";

const ANCHORS = ["section1", "section2", "section3", "section4"];

export default class Main extends Component {
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
          <Ourhotels2 />
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
            <Deco></Deco>
            <SubnavCtn>
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
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  scroll-behavior: smooth;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;

  section {
    position: relative;
    display: flex;
    width: 100%;
    height: 100vh;
    flex-flow: column wrap;
    scroll-snap-align: start;
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
