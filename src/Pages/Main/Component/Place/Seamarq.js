import React, { Component } from "react";
import styled, { keyframes, css } from "styled-components";

export default class Seamarq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgShow: true
    };
  }

  render() {
    return (
      <SeamarqContainer>
        <WordContainer firstword>
          <Word seamarq fadeImg></Word>
        </WordContainer>
        <HotelsTxt>
          <HotelIntro>
            <p>A place where the comfort</p>
            <p> and relaxation of guests</p>
            <p> reaches a peak.</p>
            <button>View site</button>
          </HotelIntro>
        </HotelsTxt>
        <HotelsImg>
          <ImgSet>
            <SmqImg
              src="https://www.lahanhotels.com/intro/images/img_smq-1.jpg"
              alt="씨마크소개이미지"
            />
          </ImgSet>
        </HotelsImg>
        <Letter fadeImg></Letter>
        <WordContainer secondword>
          <Word2 seamarq fadeImg></Word2>
        </WordContainer>
      </SeamarqContainer>
    );
  }
}

const SeamarqContainer = styled.div`
  position: relative;
  width: 60%;
  height: 70%;
  top: 50%;
  transform: translate(0, -50%);
  left: 25%;
`;

const WordContainer = styled.div`
  position: absolute;

  ${props => {
    if (props.firstword) {
      return css`
        left: 0;
        top: 0;
      `;
    } else if (props.secondword) {
      return css`
        right: 40%;
        top: 50%;
      `;
    }
  }}
`;

const moveText = keyframes`
  from { height: 0; }
      to   { height: 250px; }
`;

const Word = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  background-size: cover;
  background-image: ${props =>
    props.gyeongju
      ? `url(${"https://www.lahanhotels.com/intro/images/txt_ani-0-1.png"})`
      : props.ulsan
      ? `url(${"https://www.lahanhotels.com/intro/images/txt_ani-1-1.png"})`
      : props.mokpo
      ? `url(${"https://www.lahanhotels.com/intro/images/txt_ani-2-1.png"})`
      : props.pohang
      ? `url(${"https://www.lahanhotels.com/intro/images/txt_ani-3-1.png"})`
      : props.seamarq
      ? `url(${"https://www.lahanhotels.com/intro/images/txt_ani-4-1.png"})`
      : "none"};
  ${props => {
    if (props.fadeImg) {
      return css`
        animation: ${moveText} 2s 1;
      `;
    }
  }}
`;

const HotelsTxt = styled.div`
  position: absolute;
  width: 380px;
  height: 300px;
  right: 0;
  &:before {
    content: "";
    position: absolute;
    width: 175px;
    height: 175px;
    top: -86px;
    right: 92px;
    background-image: url("https://www.lahanhotels.com/intro/images/hotel_sect_bg.png");
    background-size: cover;
  }
`;

const HotelIntro = styled.div`
  position: absolute;
  margin-top: 30px;
  font-size: 26px;
  line-height: 1;

  p {
    color: #232937;
    margin-top: 10px;
  }

  button {
    position: relative;
    width: 130px;
    line-height: 30px;
    margin-top: 28px;
    color: #a68164;
    font-size: 22px;
    text-align: left;
    background: none;
    border: none;

    &:before {
      content: "";
      position: absolute;
      background: url("https://www.lahanhotels.com/intro/images/ico_view_arr.png")
        no-repeat center center;
      width: 27px;
      background-size: 27px auto;
      position: absolute;
      right: 0px;
      top: 0;
      height: 100%;
    }
  }
`;

const HotelsImg = styled.div`
  position: absolute;
  right: 13%;
  top: 50%;
`;

const ImgSet = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  img {
    position: absolute;
  }
`;

const SmqImg = styled.img`
  width: 210px;
  height: 280px;
  top: -100px;
`;

const Letter = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  width: 250px;
  height: 250px;
  background-size: cover;
  background-image: url("https://www.lahanhotels.com/intro/images/txt_ani-4-3.png");
  ${props => {
    if (props.fadeImg) {
      return css`
        animation: ${moveText} 2s 1;
      `;
    }
  }}
`;

const Word2 = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  background-size: cover;
  background-image: ${props =>
    props.gyeongju
      ? `url(${"https://www.lahanhotels.com/intro/images/txt_ani-0-2.png"})`
      : props.ulsan
      ? `url(${"https://www.lahanhotels.com/intro/images/txt_ani-1-2.png"})`
      : props.mokpo
      ? `url(${"https://www.lahanhotels.com/intro/images/txt_ani-2-2.png"})`
      : props.pohang
      ? `url(${"https://www.lahanhotels.com/intro/images/txt_ani-3-2.png"})`
      : props.seamarq
      ? `url(${"https://www.lahanhotels.com/intro/images/txt_ani-4-2.png"})`
      : "none"};
  ${props => {
    if (props.fadeImg) {
      return css`
        animation: ${moveText} 2s 1;
      `;
    }
  }}
`;
