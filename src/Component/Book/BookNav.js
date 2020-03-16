import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";

export default class BookNav extends Component {
  render() {
    return (
      <Header>
        <LogoBox>
          <LahanLogo
            src="https://www.lahanhotels.com/upfile/images/branch/e702cf14-4c1b-4185-8eff-29fd5ddd9ff6.png"
            alt=" 라한로고"
          />
        </LogoBox>
      </Header>
    );
  }
}

const Header = styled.div`
  width: 100vw;
  height: 100px;
  background-color: transparent;
  position: fixed;
  top: 4px;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 45px;
  /* background-color: rgba(0, 0, 0, 0); */
  position: absolute;
  right: 90px;
  top: 30px;
`;

const LahanLogo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
`;
