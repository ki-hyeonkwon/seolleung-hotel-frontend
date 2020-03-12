import React, { Component } from "react";
import Item from "Components/Item/Item";
import styled from "styled-components";

export default class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/item_data.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          items: res.item
        });
      });
  };
  render() {
    const { items } = this.state;
    return (
      <OfferContainer>
        <Offer>
          <BgWrap>
            <BackFace></BackFace>
            <Bg></Bg>
          </BgWrap>
          <OfferList>
            <Inner>
              <ItemContainer>
                {items.length > 0 &&
                  items.map(item => {
                    if (item.id % 2 == 0) {
                      return <Item data={item} key={item.id} even />;
                    } else {
                      return <Item data={item} key={item.id} even={false} />;
                    }
                  })}
              </ItemContainer>
            </Inner>
          </OfferList>
        </Offer>
      </OfferContainer>
    );
  }
}

const OfferContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Offer = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const BgWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -171px;
  width: 1214px;
  height: 342px;
`;

const BackFace = styled.div`
  position: absolute;
  bottom: 2px;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #232937;
  opacity: 0;
  -webkit-transition: opacity 2.5s,
    height 0.9s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: opacity 2.5s, height 0.9s cubic-bezier(0.215, 0.61, 0.355, 1);
`;

const Bg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("https://www.lahanhotels.com/intro/images/offers_masker.png");
  background-repeat: no-repeat;
  background-size: 100%;
  z-index: 81;
`;

const OfferList = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 0;
  line-height: 1;
  text-align: center;
  z-index: 82;
  overflow-y: scroll;
`;

const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

const ItemContainer = styled.div`
  padding-top: 100vh;
  padding-bottom: 20vh;
`;
