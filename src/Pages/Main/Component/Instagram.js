import React, { Component } from "react";
import styled from "styled-components";

export default class Instagram extends Component {
  render() {
    return (
      <SnsContainer className="Instagram">
        <Sns>
          <Title>
            <h3>@lahan_hotel</h3>
            <button>Follow</button>
          </Title>
          <Panel>
            <ItemList>
              <img
                src="https://www.lahanhotels.com/intro/images/sns_img-1.jpg"
                alt=""
              />
              <img
                src="https://www.lahanhotels.com/intro/images/sns_img-1.jpg"
                alt=""
              />
              <img
                src="https://www.lahanhotels.com/intro/images/sns_img-1.jpg"
                alt=""
              />
              <img
                src="https://www.lahanhotels.com/intro/images/sns_img-1.jpg"
                alt=""
              />
              <img
                src="https://www.lahanhotels.com/intro/images/sns_img-1.jpg"
                alt=""
              />
              <img
                src="https://www.lahanhotels.com/intro/images/sns_img-1.jpg"
                alt=""
              />
            </ItemList>
          </Panel>
        </Sns>
      </SnsContainer>
    );
  }
}

const SnsContainer = styled.div`
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
  padding-top: 14vw;
  text-align: center;

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
    margin-top: 2.78vw;
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
  display: block;
  width: 100%;

  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  font-size: 0;
`;

const ItemList = styled.div`
  margin-top: 5vh;

  img {
    width: 30%;
    float: left;
    margin-right: 5%;
    margin-top: 5%;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
`;
