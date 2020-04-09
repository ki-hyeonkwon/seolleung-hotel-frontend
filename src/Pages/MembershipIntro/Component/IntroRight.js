import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bgImg from "Images/club_kv.jpg";

class IntroRight extends Component {
  render() {
    return (
      <IntroRightSection>
        <IntroBg src={bgImg} alt="배경화면" />
        <IntroRightBox>
          <StrongText>
            Exclusive privileges <span>of CLUB LAHAN</span>
          </StrongText>
          <Link to="/login">
            <IntroButton>Join</IntroButton>
          </Link>
          <IntroKaKao>
            <dt>카카오 로그인하시겠습니까?</dt>
            <dd>
              <Link to="/login">카카오 로그인</Link>
            </dd>
          </IntroKaKao>
        </IntroRightBox>
      </IntroRightSection>
    );
  }
}

const IntroRightSection = styled.div`
  position: relative;
`;

const IntroRightBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: 10px;
  margin-left: -150px;
`;

const IntroBg = styled.img`
  width: 100%;
  height: auto;
`;

const StrongText = styled.strong`
  display: block;
  padding-bottom: 60px;
  font-weight: normal;
  font-family: "PerpetuaStd";
  font-size: 46.5px;
  line-height: 50px;
  text-align: center;
  color: #fff;

  span {
    display: block;
  }
`;

const IntroButton = styled.span`
  display: block;
  width: 100%;
  padding: 15px 0 10px;
  text-align: center;
  font-size: 26px;
  font-family: "PerpetuaStd";
  color: #000;
  background-color: #a68164;
  cursor: pointer;
`;

const IntroKaKao = styled.dl`
  display: flex;
  margin-top: 20px;

  dt {
    margin-right: 10px;
    color: #fff;
    text-shadow: 0px 0px 12px black;
  }

  a {
    color: #fff;
    text-shadow: 0px 0px 12px black;
  }
`;

export default IntroRight;
