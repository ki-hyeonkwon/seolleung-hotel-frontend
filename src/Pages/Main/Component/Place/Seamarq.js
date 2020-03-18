import React, { Component } from "react";
import styled from "styled-components";

export default class Seamarq extends Component {
  //     constructor(props) {
  //     super(props);
  //     this.state = {
  //       place: gyeongju
  //     };
  //   }

  render() {
    return (
      <SeamarqContainer>
        <FirstWord>
          <Word seamarq></Word>
        </FirstWord>
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
        <Letter></Letter>
        <SecondWord>
          <Word2 seamarq></Word2>
        </SecondWord>
      </SeamarqContainer>
    );
  }
}

const SeamarqContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const FirstWord = styled.div`
  position: absolute;
  left: 45vw;
  top: 40vh;
  width: 500px;
  height: 300px;
  margin-left: -250px;
  margin-top: -150px;
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
`;

const HotelsTxt = styled(FirstWord.withComponent("div"))`
  left: 75vw;
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

const HotelsImg = styled(FirstWord.withComponent("div"))`
  left: 25vw;
  top: 75vh;
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
  bottom: -140px;
  right: -660px;
`;

const Letter = styled.div`
  position: absolute;
  left: 27vw;
  top: 60vh;
  width: 250px;
  height: 250px;
  background-size: cover;
  background-image: url("https://www.lahanhotels.com/intro/images/txt_ani-4-3.png");
`;

const SecondWord = styled(FirstWord.withComponent("div"))`
  left: 75vw;
  top: 75vh;
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
`;
