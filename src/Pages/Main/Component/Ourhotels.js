import React, { Component } from "react";
import styled from "styled-components";

export default class Ourhotels extends Component {
  render() {
    return (
      <OurhotelsContainer>
        <OurhotelsCnt>
          <FirstWord>
            <Word gyeongju></Word>
            <Word ulsan></Word>
            <Word mokpo></Word>
            <Word pohang></Word>
            <Word seamarq></Word>
          </FirstWord>
          <HotelsTxt>
            <HotelIntro>
              <p>Enjoy a wonderful experience</p>
              <p> with Hotel Hyundai Gyeongju,</p>
              <p> an ancient city of a thousand years.</p>
              <button>View site</button>
            </HotelIntro>
            <HotelIntro>
              <p>Hotel Hyundai by Lahan</p>
              <p> turns your everyday life into</p>
              <p> a special experience.</p>
              <button>View site</button>
            </HotelIntro>
            <HotelIntro>
              <p>The moment the stunning view</p>
              <p> of Dadohae captures your eyes,</p>
              <p> the wonderful journey of</p>
              <p> Namdo begins.</p>
              <button>View site</button>
            </HotelIntro>
            <HotelIntro>
              <p>Hotel Hyundai by Lahan</p>
              <p> turns your everyday life into</p>
              <p> a special experience.</p>
              <button>View site</button>
            </HotelIntro>
            <HotelIntro>
              <p>A place where the comfort</p>
              <p> and relaxation of guests</p>
              <p> reaches a peak.</p>
              <button>View site</button>
            </HotelIntro>
          </HotelsTxt>
          <HotelsImg>
            <ImgSet>
              <GjImg1
                src="https://www.lahanhotels.com/intro/images/img_gj-1.jpg"
                alt="경주소개이미지"
              />
              <GjImg2
                src="https://www.lahanhotels.com/intro/images/img_gj-2.jpg"
                alt="경주소개이미지"
              />
            </ImgSet>
            <ImgSet>
              <UsImg1
                src="https://www.lahanhotels.com/intro/images/img_us-1.jpg"
                alt="울산소개이미지"
              />
              <UsImg2
                src="https://www.lahanhotels.com/intro/images/img_us-2.jpg"
                alt="울산소개이미지"
              />
            </ImgSet>
            <ImgSet>
              <MpImg1
                src="https://www.lahanhotels.com/intro/images/img_mp-1.jpg"
                alt="목포소개이미지"
              />
              <MpImg2
                src="https://www.lahanhotels.com/intro/images/img_mp-2.jpg"
                alt="목포소개이미지"
              />
            </ImgSet>
            <ImgSet>
              <PhImg1
                src="https://www.lahanhotels.com/intro/images/img_ph-1.jpg"
                alt="포항소개이미지"
              />
              <PhImg2
                src="https://www.lahanhotels.com/intro/images/img_ph-2.jpg"
                alt="포항소개이미지"
              />
            </ImgSet>
            <ImgSet>
              <SmqImg
                src="https://www.lahanhotels.com/intro/images/img_smq-1.jpg"
                alt="씨마크소개이미지"
              />
            </ImgSet>
          </HotelsImg>
          <Letter></Letter>
          <SecondWord>
            <Word2 gyeongju></Word2>
            <Word2 ulsan></Word2>
            <Word2 mokpo></Word2>
            <Word2 pohang></Word2>
            <Word2 seamarq></Word2>
          </SecondWord>
        </OurhotelsCnt>
      </OurhotelsContainer>
    );
  }
}

const OurhotelsContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const OurhotelsCnt = styled.div`
  position: relative;
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

const GjImg1 = styled.img`
  width: 247px;
  height: 174px;
  bottom: -262px;
  right: 112px;
`;

const GjImg2 = styled.img`
  width: 204px;
  height: 270px;
  bottom: -262px;
`;

const UsImg1 = styled.img`
  width: 166px;
  height: 117px;
  z-index: 2;
  right: 248px;
  bottom: -236px;
`;

const UsImg2 = styled.img`
  width: 320px;
  height: 216px;
  bottom: -236px;
  right: 23px;
`;

const MpImg1 = styled.img`
  width: 248px;
  height: 165px;
  bottom: -313px;
  right: 13px;
  z-index: 2;
`;

const MpImg2 = styled.img`
  width: 200px;
  height: 280px;
  bottom: -214px;
  right: 213px;
`;

const PhImg1 = styled.img`
  width: 166px;
  height: 117px;
  z-index: 2;
  right: 248px;
  bottom: -236px;
`;

const PhImg2 = styled.img`
  width: 320px;
  height: 216px;
  bottom: -236px;
  right: 23px;
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
