import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";
import Slider from "react-slick";

export default class Rtl extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      rtl: true
    };
    return (
      <Slider {...settings}>
        <RoomSliderBox>
          <RoomSlider>배경화면</RoomSlider>
          <RoomInfo>
            <RoomInfoHead>
              <RoomName>이름</RoomName>
              <RoomCmt>코멘트</RoomCmt>
            </RoomInfoHead>
            <RoomInfoMain>
              <RoomInfoes>
                <InfoTitle>Capacity</InfoTitle>
                <Info>카페시티</Info>
                <InfoTitle>Rooms</InfoTitle>
                <Info>룸</Info>
                <InfoTitle>Bed</InfoTitle>
                <Info>정보</Info>
              </RoomInfoes>
            </RoomInfoMain>
          </RoomInfo>
        </RoomSliderBox>
      </Slider>
    );
  }
}

const RoomSliderBox = styled.div`
  display: flex;
  margin: 0 auto;
`;

const RoomSlider = styled.div`
  height: 810px;
  width: 905px;
  background-image: url(${props =>
    `https://www.lahanhotels.com${props.bgImg}`});
  margin-right: 50px;
`;

const RoomInfo = styled.div`
  width: 40%;
`;

const RoomInfoHead = styled.div`
  /* width: 100%; */
  height: 173px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 208px;
`;

const RoomName = styled.strong`
  display: block;
  /* width: 90%; */
  height: 44px;
  font-size: 32px;
  line-height: 1.375;
  font-family: "GothamLight";
  font-weight: 200;
  margin-bottom: 25px;
  /* text-transform: uppercase; */
  letter-spacing: 1px;
  text-align: center;
`;

const RoomCmt = styled.div`
  width: 390px;
  height: 104px;
  /* font-family: YoonGothicPro730; */
  font-size: 15px;
  line-height: 32px;
  padding: 0 20px;
  text-align: center;
  color: rgb(117, 105, 99);
`;

const RoomInfoMain = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const RoomInfoes = styled.dl`
  display: block;
  text-align: center;
  width: 273px;
`;

const InfoTitle = styled.dt`
  display: block;
  font-size: 14px;
  margin-bottom: 10px;
  color: rgb(117, 105, 99);
`;

const Info = styled.dd`
  display: block;
  font-size: 16px;
  margin-bottom: 50px;
  color: rgb(29, 33, 42);
`;
