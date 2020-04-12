import React, { Component } from "react";
import styled, { keyframes, css } from "styled-components";
import insta1 from "Images/lahan_insta1.jpeg";
import insta2 from "Images/lahan_insta2.jpg";
import insta3 from "Images/lahan_insta3.jpg";
import insta4 from "Images/lahan_insta4.jpg";
import insta5 from "Images/lahan_insta5.jpg";

export default class Instagram extends Component {
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
    if (scrollTop > 2950) {
      this.setState({ moveTitle: true });
      this.setState({ moveList: true });
    } else {
      this.setState({ moveList: false });
      this.setState({ moveTitle: false });
    }
  };
  render() {
    return (
      <SnsContainer className="Instagram">
        <Sns>
          <Title movetitle={this.state.moveTitle}>
            <h3>@lahan_hotel</h3>
            <button>Follow</button>
          </Title>
          <Panel>
            <ItemList moveImg={this.state.moveList}>
              <img
                src="https://www.lahanhotels.com/intro/images/sns_img-1.jpg"
                alt=""
              />
              <img src={insta1} alt="" />
              <img src={insta2} alt="" />
              <img src={insta3} alt="" />
              <img src={insta4} alt="" />
              <img src={insta5} alt="" />
            </ItemList>
          </Panel>
        </Sns>
      </SnsContainer>
    );
  }
}

const moveTitle = keyframes`
  from { padding-top: 200px; }
      to   { padding-top: 100px; }
`;

const moveImg = keyframes`
  from { top: 10vh; }
      to   { top: 0; }
`;

// const fadeout = keyframes`
//   0% { opacity: 0; }
//   100% { opacity: 1; }
// `;

const SnsContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
`;

const Sns = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  padding-top: 100px;
  text-align: center;
  ${props => {
    if (props.movetitle) {
      return css`
        animation-name: ${moveTitle};
        animation-duration: 2s;
        animation-iteration-count: linear infinite;
      `;
    }
  }}

  h3 {
    font-size: 32px;
    font-weight: normal;
  }

  button {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    color: #a68164;
    font-size: 14px;
    display: block;
    padding-bottom: 2px;
    border: none;

    &:after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background: #a68164;
      -webkit-transition: 0.3s width;
      transition: 0.3s width;
    }
    &:hover:after {
      width: 100%;
    }
  }
`;

const Panel = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  max-width: 1140px;
  font-size: 0;
  margin-left: -570px;
  left: 50%;
  top: 15vh;
`;

const ItemList = styled.div`
  position: absolute;
  ${props => {
    if (props.moveImg) {
      return css`
        animation-name: ${moveImg};
        animation-duration: 2s;
        animation-iteration-count: linear infinite;
      `;
    }
  }}

  img {
    width: 30%;
    height: 350px;
    float: left;
    margin-right: 5%;
    margin-top: 50px;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
`;
