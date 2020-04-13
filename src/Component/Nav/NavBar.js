import React, { Component } from "react";
import DropDownNav from "../Nav/DropDownNav";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  constructor() {
    super();
    this.test = React.createRef();
    this.state = {
      place: ["경주", "울산", "목포", "포항", "진주", "seanarQ"],
      other: ["membership", "로그인", "가입"],
      findHotel: "Find hotel",
      clubLahan: "Club Lahan"
    };
  }

  componentDidMount() {
    this.setState({
      other: window.localStorage.getItem("Authorization")
        ? ["mypage"]
        : ["membership", "login", "join"]
    });
  }

  render() {
    const { place, other, findHotel, clubLahan } = this.state;
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
                <Link
                  to={"/book"}
                  style={{ display: "block", color: "#181a1c" }}
                >
                  <DropDownNav menu={place} title={findHotel}></DropDownNav>
                </Link>
                <NavBoxLi>
                  <DropDownTitle>Brand story</DropDownTitle>
                </NavBoxLi>
                {/* <Link
                  to={"/login"}
                  style={{ display: "block", color: "#181a1c" }}
                > */}
                <DropDownNav menu={other} title={clubLahan} />
                {/* </Link> */}
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
  position: fixed;
  top: 60px;
  right: 100px;
  width: 340px;
  height: 117px;
  z-index: 100;
  border: solid 1px #232937;
  background: #fff;
`;

const Pad = styled.div`
  position: relative;
  width: 340px;
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

const NavBox = styled.div`
  border-top: 1px solid #232937;
  background: #fff;
  transition: background 0.5s;

  &:hover {
    background: #232937;
  }
`;

const NavBoxUl = styled(RowList.withComponent("ul"))``;

const NavBoxLi = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 44px;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
`;

const DropDownTitle = styled(Center.withComponent("div"))`
  width: 112px;
  height: 44px;
  text-align: center;
  font-size: 14px;
  background-color: transparent;
  color: #181a1c;
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
