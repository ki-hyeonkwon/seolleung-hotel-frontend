import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";
import Booking from "Component/Book/Booking.js";

export default class BookEnter extends Component {
  render() {
    return (
      <BookEnterWrapper>
        <BookTopSect zoom>
          <Header>
            <LogoBox>
              <LahanLogo
                src="https://www.lahanhotels.com/upfile/images/branch/e702cf14-4c1b-4185-8eff-29fd5ddd9ff6.png"
                alt=" 라한로고"
              />
            </LogoBox>
          </Header>
          <TopWrapper>
            <TopLeftWrapper>
              <Booking />
            </TopLeftWrapper>
            <TopRigthWrapper>
              <LahanContentBox>
                <LahanContent>
                  <ContentHeader>LAHAN SELECT</ContentHeader>
                  <TopContent>
                    2020년 4월 1일,
                    <br />
                    아름다운 보문호수를 배경으로 펼쳐질
                    <br />
                    라한셀렉트 경주의 새로운 모습을 소개합니다.
                    <br />
                    온가족을 위한 실내외 수영장과 키즈라운지, 볼링장,
                    <br />
                    프리미엄 푸드코트, 라이프스타일 북스토어&카페
                    <br />
                    그리고 다채로운 Leisure&Culture 프로그램 등
                    <br />
                    천년고도 경주 문화유산의 중심 라한셀렉트 경주에서
                    <br />
                    럭셔리 그 이상의 경험을 선사합니다.
                  </TopContent>
                </LahanContent>
                <Num>01</Num>
              </LahanContentBox>
            </TopRigthWrapper>
          </TopWrapper>
        </BookTopSect>
      </BookEnterWrapper>
    );
  }
}

// 공용CSS
// const Center = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// 각 CSS
const BookEnterWrapper = styled.div``;
// position: absolute;
// top: 0;
// left: 0;

const BookTopSect = styled.section`
  position: realative;
  border: 5px solid #fff;
  /* max-width: auto !important; */
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  background-image: url("https://www.lahanhotels.com/upfile/images/contents/dc6e1c8b-7198-40a7-9413-b26f74638fbc.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* background-origin: center; */
  ${props => {
    if (props.zoom) {
      return css`
        animation: ${zoomIn} 3s liner;
        /* animation-fill-mode: forwards; */
      `;
    }
  }}
`;

const zoomIn = keyframes`
  from{
    transform: scale(1);
      /* background-size:100% */
  }to{
    transform: scale(2);
      /* background-size:2000% */
  }
`;

// 헤더

const Header = styled.div`
  width: 100%;
  height: 150px;
  background-color: transparent;
  position: relative;
`;

const TopWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
`;

const TopLeftWrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  position: relative;
`;

const TopRigthWrapper = styled.div`
  height: 100%;
  width: 50%;
  right: 0;
  background-color: rgba(0, 0, 0, 0);
`;

// const LogoBox = styled(Center.withComponent("div"))`
//   background-color: red;
//   width: 130px;
//   height: 60px;
//   background-color: rgba(0, 0, 0, 0);
//   position: absolute;
//   right: 90px;
//   top: 70px;
// `;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 45px;
  /* background-color: rgba(0, 0, 0, 0); */
  position: absolute;
  right: 90px;
  top: 50px;
`;

const LahanLogo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
`;

//오른쪽 글

const LahanContent = styled.div`
  width: 433px;
  height: 353px;
  color: #fff;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 50%;
  left: 20%;
`;

const LahanContentBox = styled.p`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ContentHeader = styled.strong`
  width: 100%;
  height: 57px;
  font-size: 48px;
  display: block;
  font-weight: 310;
  font-family: "GothamLight";
  line-height: 1.2;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 8px;
`;

const TopContent = styled.span`
  font-size: 20px;
  line-height: 34px;
  font-weight: 300;
`;

const Num = styled.div`
  width: 46px;
  height: 33px;
  font-size: 30px;
  font-weight: 200;
  line-height: 34px;
  text-align: center;
  color: #fff;
  position: absolute;
  bottom: 30%;
  left: 20%;
`;
