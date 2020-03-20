import React, { Component } from "react";
import Gyeongju from "./Place/Gyeongju";
import Ulsan from "./Place/Ulsan";
import Mokpo from "./Place/Mokpo";
import Pohang from "./Place/Pohang";
import Seamarq from "./Place/Seamarq";
import styled from "styled-components";

export default class Ourhotels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: 1
    };
  }

  changePlace = num => {
    this.setState({
      place: num
    });
  };

  render() {
    const obj = {
      1: <Gyeongju />,
      2: <Ulsan />,
      3: <Mokpo />,
      4: <Pohang />,
      5: <Seamarq />
    };

    const { place } = this.state;
    return (
      <OurhotelsContainer>
        <OurhotelsCnt>
          {obj[place]}
          <SuvnavPlaceContainer>
            <SuvnavPlace>
              <div onClick={() => this.changePlace(1)}>GYEONGJU</div>
              <div onClick={() => this.changePlace(2)}>ULSAN</div>
              <div onClick={() => this.changePlace(3)}>MOKPO</div>
              <div onClick={() => this.changePlace(4)}>POHANG</div>
              <div onClick={() => this.changePlace(5)}>SEAMARQ</div>
            </SuvnavPlace>
          </SuvnavPlaceContainer>
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
`;

const SuvnavPlaceContainer = styled.div`
  position: absolute;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  bottom: 30px;
`;

const SuvnavPlace = styled.div`
  opacity: 1;
  transform: rotate(-90deg) translate(34px, 0);
  div {
    position: relative;
    letter-spacing: 3px;
    padding-left: 50px;
    font-size: 11px;
    line-height: 15px;
    // color: rgba(24, 26, 28, 0);
    -webkit-transition: color 0.6s;
    transition: color 0.6s;
    cursor: pointer;
  }
`;
