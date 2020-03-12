import React, { Component } from "react";
import DropDownNav from "../Nav/DropDownNav";
import styled from "styled-components";

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper>
        <Pad>
          <TopRightMenu>
            <LogoBox>
              <div className="logo_image_box">
                <LahanLogo
                  src="https://www.lahanhotels.com//intro/images/intro_logo.png"
                  alt=" 라한로고"
                />
              </div>
            </LogoBox>
            <NavBox>
              <NavBoxUl>
                <DropDownNav
                  menu1="경주"
                  menu2="울산"
                  menu3="목포"
                  menu4="포항"
                  menu5="진주"
                  menu6="seanarQ"
                />
                <NavBoxLi>
                  <DropDownTitle>Brand story</DropDownTitle>
                </NavBoxLi>
                <DropDownNav menu1="맴버십 소개" menu2="로그인" menu3="가입" />
              </NavBoxUl>
            </NavBox>
          </TopRightMenu>
        </Pad>
      </NavWrapper>
    );
  }
}

// 공용CSS
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RowList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// 각 CSS
const NavWrapper = styled.header`
  position: absolute;
  top: 60px;
  width: 100vw;
  height: 117px;
`;

const Pad = styled.div`
  position: relative;
  width: 60vw;
  height: 117px;
  margin: 0 auto;
`;

const TopRightMenu = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const LogoBox = styled(Center.withComponent("div"))`
  width: 340px;
  height: 72px;
`;

const LahanLogo = styled.img`
  width: 88px;
  height: 40px;
`;

const NavBox = styled.div``;

const NavBoxUl = styled(RowList.withComponent("ul"))``;

const NavBoxLi = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 44px;
  margin: 0 auto;
  position: relative;
`;

const DropDownTitle = styled(Center.withComponent("div"))`
  width: 112px;
  height: 44px;
  text-align: center;
  font-size: 14px;
  background-color: transparent;
  color: white;
  &:hover {
    color: rgb(166, 129, 100);
  }
`;
// const DropDownUl = styled.ul`
//   position: absolute;
//   top: 44px;
//   font-size: 14px;
//   background-color: transparent;
//   display: ${props => (props.onOff ? "block" : "none")};
//   ${props => {
//     if (props.hotel) {
//       return css`
//         animation: ${fadeOn} 0.5s linear;
//       `;
//     }
//   }}
// `;

// const fadeOn = keyframes`
// from{
//   opacity:0;
//   top: 64px;
// }to{
//   opacity:1;
//   top: 44px;
// }
// `;

// const DropDownLi = styled.li`
//   position: absolute;
//   top: 64px;
// `;
