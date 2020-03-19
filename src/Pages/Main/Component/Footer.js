import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonShow: true
    };
  }

  handleButton = () => {
    this.setState({
      buttonShow: !this.state.buttonShow
    });
  };
  render() {
    return (
      <FooterContainer>
        <FooterCnt>
          <BgWrap></BgWrap>
          <ContentWrap>
            <Slogan>
              <p>
                Exclusive privileges <br />
                of CLUB LAHAN
              </p>
              <button>View more</button>
            </Slogan>
            <Membership>
              Lahan <br />
              Membership
            </Membership>
            <SnsWrap>
              <Sns>
                <img
                  src="https://www.lahanhotels.com/intro/images/icon_insta.png"
                  alt="sns이미지"
                />
              </Sns>
              <Sns>
                <img
                  src="https://www.lahanhotels.com/intro/images/icon_fb.png"
                  alt="sns이미지"
                />
              </Sns>
            </SnsWrap>
            <Info>
              <MenuWrap>
                <Menu1>
                  <li>Notice</li>
                  <li>Contact Us</li>
                  <li>Career</li>
                </Menu1>
                <Menu2>
                  <li>개인정보처리방침</li>
                  <li>영상정보처리기기 운영, 관리방침</li>
                  <li>윤리강령</li>
                  <li>제안/제보</li>
                </Menu2>
              </MenuWrap>
              <Copy>© 2019 by LAHAN Hotel Hyundai Co., Ltd</Copy>
              <FamilySite>
                <Select onClick={this.handleButton}>
                  Family Site
                  <span
                    style={{
                      transform: !this.state.buttonShow
                        ? "rotate(180deg)"
                        : "none"
                    }}
                  ></span>
                </Select>
                <SelectBox
                  style={{
                    display: !this.state.buttonShow ? "block" : "none"
                  }}
                >
                  <li>LAHAN</li>
                  <li>Gyeongju</li>
                  <li>Ulsan</li>
                  <li>Mokpo</li>
                  <li>Pohang</li>
                  <li>Jeonju</li>
                  <li>Seamarq</li>
                </SelectBox>
              </FamilySite>
            </Info>
          </ContentWrap>
        </FooterCnt>
      </FooterContainer>
    );
  }
}

const FooterContainer = styled.div`
  width: 100vw;
  height: 76vh;
`;

const FooterCnt = styled.div`
  position: relative;
  left: 0;
  top: 24vh;
  width: 100%;
  height: 100%;
  color: #fff;
`;

const BgWrap = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url("https://www.lahanhotels.com/intro/images/foot_bg.jpg") no-repeat center; 
  background-size: cover;
  }
`;

const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  max-width: 1480px;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
  z-index: 10;
`;

const Slogan = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  p {
    font-family: "PerpetuaStd";
    font-size: 38px;
    line-height: 42px;
    margin-bottom: 38px;
  }

  button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    line-height: 20px;
    font-size: 14px;
    color: #fff;
    position: relative;
    border: none;
    background: none;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -1px;
      height: 1px;
      width: 0;
      background: #a68164;
      -webkit-transition: 0.3s width;
      transition: 0.3s width;
    }

    &:hover:after {
      width: 100%;
    }
  }
`;

const Membership = styled.div`
  position: absolute;
  top: 60px;
  left: 80px;
  margin-top: -4px;
  font-size: 18px;
  line-height: 26px;
  text-align: left;
`;

const SnsWrap = styled.div`
    position: absolute;
    top: 40%;
    right: 60px;
}
`;

const Sns = styled.span`
    display: block;   
    padding: 4px;
    margin-top: 20px;
    margin-bottom: 20px;
    -webkit-transition: padding-right .3s, opacity .3s;
    transition: padding-right .3s, opacity .3s;
    opacity: 1;
    img {
        width: 19px;
    }

    &:hover {
        opacity: .7;
    }
}
`;

const Info = styled.div`
  position: absolute;
  left: 40px;
  right: 40px;
  bottom: 30px;
  text-align: center;
`;

const MenuWrap = styled.div`
  position: relative;
  margin-left: 17px;
  margin-right: 17px;
  margin-bottom: 4px;
  text-align: left;
`;

const Menu1 = styled.ul`
  position: absolute;
  display: inline-block;
  bottom: 0;
  left: 25%;
  line-height: 22px;
`;

const Menu2 = styled(Menu1.withComponent("ul"))`
  left: 50%;
`;

const Copy = styled.div`
  text-align: right;
  font-size: 12px;
  margin-bottom: 16px;
  padding-right: 22px;
`;

const FamilySite = styled.div`
    position: absolute;
    right: 6px;
    bottom: 75px;
    width: 210px;
    text-align: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #fff;
    border: 1px solid #fff;
    
}
`;

const boxShow = keyframes`
  from {
    height: 0;
  }
  to {
    height: 170px;
  }
`;

const SelectBox = styled.ul`
    position: absolute;
    background-color: #fff;
    display: none;
    bottom: 100%;
    left: 0;
    right: 0;
    height: 170px;
    margin-bottom: 10px;
    line-height: 25px;
    padding: 15px 20px;
    color: #232937;
    animation: ${boxShow} 1s 1;
    z-index: -1;

    li {
        font-size: 10px;
    }
}
`;

const Select = styled.div`
    position: relative;
    padding-right: 50px;
    padding-left: 20px;
    line-height: 33px;
    font-size: 13px;
    cursor: pointer;
    z-index: 100;

    span {
    position: absolute;
    display: inline-block;
    right: 15px;
    top: 7px;
    width: 13px;
    height: 15px;
    background-image: url("https://www.lahanhotels.com/intro/images/footer_ico-01.svg");
    background-size: cover;
    -webkit-transition: -webkit-transform .5s;
    transition: -webkit-transform .5s;
    transition: transform .5s;
    transition: transform .5s, -webkit-transform .5s;

    }
}
`;
