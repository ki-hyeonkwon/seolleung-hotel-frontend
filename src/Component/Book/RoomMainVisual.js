import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

export default class RoomMainVisual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slicIdx: 1,
      autoSlic: setInterval(this.handlerSlic, 2700)
    };
  }

  handlerSlic = () => {
    console.log(this.state.slicIdx);
    this.state.slicIdx !== 5
      ? this.setState({ slicIdx: this.state.slicIdx + 1 })
      : this.setState({ slicIdx: 1 });
  };

  componentWillUnmount = () => {
    clearInterval(this.state.autoSlic);
  };

  render() {
    const { slicIdx } = this.state;

    return (
      <SlicContainer>
        <SlicImgContainer>
          <SlicImgContent slicIdx={slicIdx}>
            <SlicImg
              bgImg={
                "https://www.lahanhotels.com/upfile/images/taste/70715c7b-c65b-49d9-a104-9cd07b3e2efd.jpg"
              }
            ></SlicImg>
            <SlicImg
              bgImg={
                "https://www.lahanhotels.com/upfile/images/taste/6a4425a5-cc92-4060-b94a-bed2ada0ee38.jpg"
              }
            ></SlicImg>
            <SlicImg
              bgImg={
                "https://www.lahanhotels.com/upfile/images/taste/b9289e11-bfd5-4315-866a-a43ff2705c5a.jpg"
              }
            ></SlicImg>
          </SlicImgContent>
        </SlicImgContainer>
        <SlicRightContainer></SlicRightContainer>
      </SlicContainer>
    );
  }
}

const SlicContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SlicImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 900px;
  margin-top: 88px;
  overflow: hidden;
`;

const SlicImgContent = styled.div`
  display: flex;
  width: 300%;
  ${props =>
    props.slicIdx === 1
      ? `transition-duration: 1s;
    transition-timing-function: linear;
    transform: translateX(-50vw);`
      : props.slicIdx === 2
      ? `transition-duration: 1s;
    transition-timing-function: linear;
    transform: translateX(0vw);`
      : props.slicIdx === 3
      ? `transition-duration: 1s;
    transition-timing-function: linear;
    transform: translateX(50vw);`
      : props.slicIdx === 4
      ? `transition-duration: 1s;
    transition-timing-function: linear;
    transform: translateX(0vw);`
      : `transition-duration: 1s;
    transition-timing-function: linear;
    transform: translateX(-50vw);`}
`;

const SlicImg = styled.div`
  width: 50vw;
  height: 900px;
  background-image: ${props => `url(${props.bgImg})`};
  background-repeat: none;
  background-size: cover;
`;

const SlicRightContainer = styled.div`
  margin-top: 88px;
  width: 50vw;
  height: 900px;
  background-color: rgb(215, 205, 197);
`;
