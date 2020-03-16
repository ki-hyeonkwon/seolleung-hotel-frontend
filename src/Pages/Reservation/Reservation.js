import React, { Component, useState } from "react";
import styled from "styled-components";
import SelectList from "Pages/Reservation/Component/SelectList.js";
// import BookButton from "Pages/Reservation/Component/BookButton.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import "flatpickr/dist/themes/dark.css";
import Flatpickr from "react-flatpickr";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";

export default class extends Component {
  constructor() {
    super();
    this.test = React.createRef();
    this.state = {
      date: new Date(),
      checkIn: false
    };
  }
  handleClick = () => {
    this.refs.refDatePicker.flatpickr.clear();
  };
  handleCheckIn = () => {
    this.setState({ checkIn: !this.state.checkIn });
  };
  render() {
    const { date } = this.state;
    return (
      <ReservationWrapper>
        <ReservationContainer>
          <OpacityBox></OpacityBox>
          <FinalBookOpacity></FinalBookOpacity>
          <HotelsOpacity></HotelsOpacity>
          <ReservationBox>
            <CalenderContainer>
              <CalenderBox>
                <CalenderLogoBox>
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    style={{ color: "white", fontSize: "25px" }}
                  />
                </CalenderLogoBox>
                <Flatpickr
                  ref="refDatePicker"
                  onClick={this.handleClick}
                  date={date}
                  options={{
                    plugins: [new rangePlugin({ input: ".secondRangeInput" })]
                  }}
                  value={date}
                  onChange={date => {
                    this.setState({ date });
                  }}
                  onChange={this.handleCheckIn}
                  style={{
                    position: "absolute",
                    left: "62px",
                    border: "none",
                    backgroundColor: "transparent",
                    textAlign: "center",
                    fontSize: "22px",
                    width: "100px",
                    overflow: "hidden",
                    zIndex: "3",
                    marginRight: "10px",
                    cursor: "pointer",
                    fontFamily: "PerpetuaStd",
                    color: "white",
                    padding: "0 2px 0 2px"
                  }}
                />
                <ArrowBox>
                  <FontAwesomeIcon icon={faLongArrowAltRight} />
                </ArrowBox>
                <SecondRangeInput
                  onClick={this.handleClick}
                  className="secondRangeInput"
                  // placeholder="Check out"
                  onChange={this.handleCheckIn}
                  placeholder="Check Out"
                />
              </CalenderBox>
            </CalenderContainer>
            {/* 여기에 다음거 형제로 */}
            <HotelContainer>
              <HotelBox>
                <SelectList
                  listTitle="Hotel Lahan"
                  firstList="Gyeongju"
                  secondList="Ulsan"
                  thirdList="Mokpo"
                  forthList="Pohang"
                  fifthList="Deagu"
                  sixthList="Seamarq"
                />
              </HotelBox>
            </HotelContainer>
            <RoomSelectContainer>
              <RoomSelectBox>
                {/* <RoomSelect> */}
                <SelectList
                  listTitle="Rooms"
                  firstList="HILL SIDE DELUXE DOUBLE"
                  secondList="HILL SIDE DELUXE TWIN"
                  thirdList="LAKE SIDE DELUXE DOUBLE"
                  forthList="HILL SIDE FAMILY TWIN"
                  fifthList="LAKE SIDE PREMIUM SUITE"
                />
                {/* </RoomSelect> */}
              </RoomSelectBox>
            </RoomSelectContainer>
            <AdultContainer>
              <AdultBox>
                {/* <Adult> */}
                <SelectList
                  listTitle="Number of people"
                  firstList="1"
                  secondList="2"
                  thirdList="3"
                  forthList="4"
                  fifthList="5"
                  sixthList="6"
                />
                {/* </Adult> */}
              </AdultBox>
            </AdultContainer>
            <BookNowButtonContainer>Book Now</BookNowButtonContainer>
          </ReservationBox>
        </ReservationContainer>
      </ReservationWrapper>
    );
  }
}

const ReservationWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(" https://www.lahanhotels.com/upfile/images/contents/bafe0c3f-de19-4fbf-a42d-ce1a29f8077f.jpg");
  background-repeat: none;
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReservationContainer = styled.div`
  margin: auto;
  width: 90vw;
  height: 726px;
  position: relative;
`;

const ReservationBox = styled.div`
  width: 395px;
  height: 477px;
  /* background-color: #e0c3af; */
  /* opacity: 0.5; */
  border-radius: 5px;
  padding: 32px 32px 24px 32px;
  z-index: 10;
  position: relative;
`;

const OpacityBox = styled.div`
  width: vw;
  height: 477px;
  background-color: #9ba2b3;
  opacity: 0.6;
  border-radius: 5px;
  padding: 32px 32px 24px 32px;
  position: absolute;
  top: 0;
  left: 0;
`;

/*calender Box top :100px*/
const CalenderContainer = styled.div`
  position: absolute;
  top: 60px;
`;

const CalenderBox = styled.div`
  width: 400px;
  height: 22px;
  display: flex;
  position: relative;
  align-items: center;
  z-index: 100;
`;

const SecondRangeInput = styled.input`
  border: none;
  background-color: transparent;
  text-align: center;
  width: 117px;
  font-size: 22px;
  color: white;
  position: absolute;
  left: 254px;
  font-family: PerpetuaStd;
  cursor: pointer;
  ::placeholder {
    color: white;
  }
`;

const CalenderLogoBox = styled.div`
  position: absolute;
  left: 20px;
  top: -5px;
`;
const ArrowBox = styled.div`
  position: absolute;
  top: -10px;
  font-size: 22px;
  color: white;
  left: 200px;
`;

/*Place*/

const HotelContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 35px;
  top: 140px;
`;

const HotelBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

/*Room Box*/
const RoomSelectContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 35px;
  top: 220px;
`;

const RoomSelectBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

/*Number of people*/

const AdultContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 35px;
  top: 300px;
`;

const AdultBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

/*경희님 한테 여쭤보고 만들자*/

const BookNowButtonContainer = styled.button`
  position: absolute;
  font-family: "PerpetuaStd";
  display: block;
  width: 340px;
  height: 35px;
  top: 450px;
  left: 55px;
  border: 1px solid white;
  color: white;
  background-color: transparent;
  font-family: "PerpetuaStd";
  text-align: left;
  font-size: 22px;
  font-weight: 200;
  line-height: 60px;
  margin-bottom: 15px;
  cursor: pointer;
  z-index: 10;
  padding-left: 15px;
  padding-bottom: 49px;
  :hover {
    color: #a8bae6;
    font-weight: 500;
    border: #a8bae6;
  }
`;

// 컴포넌트로 분리하기
const FinalBookOpacity = styled.div`
  width: vw;
  height: 120px;
  background-color: #9ba2b3;
  opacity: 0.6;
  border-radius: 5px;
  padding: 32px 32px 24px 32px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const HotelsOpacity = styled.div`
  width: 390px;
  height: 120px;
  background-color: #9ba2b3;
  opacity: 0.6;
  border-radius: 5px;
  padding: 32px 32px 24px 32px;
  position: absolute;
  bottom: 0;
  right: 0;
`;
