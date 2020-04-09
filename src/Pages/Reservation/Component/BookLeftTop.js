import React, { Component, useState } from "react";
import styled from "styled-components";
import SelectList from "Pages/Reservation/Component/SelectList.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import "flatpickr/dist/themes/dark.css";
import Flatpickr from "react-flatpickr";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";

export default class BookLeftTop extends Component {
  constructor() {
    super();
    this.test = React.createRef();
    this.state = {
      date: new Date(),
      checkIn: false,
      checkInDay: "",
      checkOutDay: "",
      checkInMonth: "",
      checkOutMonth: "",
      placeList: ["Gyeongju", "Ulsan", "Mokpo", "Pohang", "Deagu", "Seamarq"],
      roomList: [
        "HILL SIDE DELUXE DOUBLE",
        "HILL SIDE DELUXE TWIN",
        "LAKE SIDE DELUXE DOUBLE",
        "HILL SIDE FAMILY TWIN",
        "LAKE SIDE PREMIUM SUITE"
      ],
      numPeoList: ["1", "2", "3", "4", "5", "6"],
      place: "",
      roomKind: "",
      numPeo: "0"
      // modalClose: true
    };
  }

  handleClick = e => {
    this.refs.refDatePicker.flatpickr.clear();
    // console.log(e);
  };
  handelCheckBox = e => {
    const checkInDate = Object.values(e)[0];
    const checkOutDate = Object.values(e)[1];
    if (checkInDate !== undefined && checkOutDate !== undefined) {
      // const checkInDay = checkInDate.getDate();
      // const checkOutDay = checkOutDate.getDate();
      // const checkInMonth = checkInDate.getMonth() + 1;
      // const checkOutMonth = checkOutDate.getMonth() + 1;
      // console.log(checkInDate);
      // console.log("checkIn", checkInDay);
      // console.log("checkOut", checkOutDay);
      // console.log("checkInMonth", checkInDate.getMonth() + 1);
      // console.log("checkOutMonth", checkOutDate.getMonth() + 1);
      this.setState({ checkInDay: checkInDate.getDate() });
      this.setState({ checkOutDay: checkOutDate.getDate() });
      this.setState({ checkInMonth: checkInDate.getMonth() + 1 });
      this.setState({ checkOutMonth: checkOutDate.getMonth() + 1 });
      this.props.getD(
        checkInDate.getMonth() + 1,
        checkInDate.getDate(),
        checkOutDate.getMonth() + 1,
        checkOutDate.getDate()
      );
    }
  };

  handlePlace = place => {
    console.log("나는 부모:", place);
    this.setState({ place: place }, () => {
      console.log(" 장소: ", this.state.palce);
    });
    this.props.getLo(place);
  };

  handleRoomKind = roomKind => {
    console.log("나는 부모:", roomKind);
    this.setState({ roomKind: roomKind });
    console.log(" 방: ", this.state.roomKind);
  };

  handleNumPeo = peo => {
    console.log("나는 부모:", peo);
    this.setState({ numPeo: peo });
    console.log(" 사람수: ", this.state.numPeo);
    this.props.getPeo(peo);
  };

  handleSubmit = () => {
    const CheckIn = `2020-0${this.state.checkInMonth}-${this.state.checkInDay}`;
    const CheckOut = `2020-0${this.state.checkOutMonth}-${this.state.checkOutDay}`;
    // fetch(
    //   `http://10.58.3.122:8000/room?CheckIn=${CheckIn}&CheckOut=${CheckOut}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json"
    //       // Authorization: localStorage.getItem("wtw-token")
    //     }
    //   }
    // )
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    // // 에러나면 알려주는 거

    this.props.getData(CheckIn, CheckOut);
  };

  render() {
    const { date, modalClose, placeList, roomList, numPeoList } = this.state;
    // const Nights = {{this.state.previousDays} + {this.state.nextDays}!==0 && this.state.previousDays + this.state.nextDays}
    return (
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
                // this.handelCheckBox();
              }}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              onChange={this.handelCheckBox}
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
              // onChange={this.handleCheckIn}
              placeholder="Check Out"
              // eslint-disable-next-line react/jsx-no-duplicate-props
              onChange={this.handelCheckInBox}
            />
          </CalenderBox>
        </CalenderContainer>
        {/* 여기에 다음거 형제로 */}
        <HotelContainer>
          <HotelBox>
            <SelectList
              getPlace={place => this.handlePlace(place)}
              listTitle="Hotel Lahan"
              dropLists={placeList}
            />
          </HotelBox>
        </HotelContainer>
        <RoomSelectContainer>
          <RoomSelectBox>
            {/* <RoomSelect> */}
            <SelectList
              getPlace={room => this.handleRoomKind(room)}
              listTitle="Rooms"
              dropLists={roomList}
            />
            {/* </RoomSelect> */}
          </RoomSelectBox>
        </RoomSelectContainer>
        <AdultContainer>
          <AdultBox>
            {/* <Adult> */}
            <SelectList
              getPlace={numPeo => this.handleNumPeo(numPeo)}
              listTitle="Number of people"
              dropLists={numPeoList}
            />
          </AdultBox>
        </AdultContainer>
        <BookNowButtonContainer onClick={this.handleSubmit}>
          Search Rooms
        </BookNowButtonContainer>
      </ReservationBox>
    );
  }
}
const ReservationBox = styled.section`
  width: 23%;
  height: 477px;
  /* background-color: #e0c3af; */
  /* opacity: 0.5; */
  border-radius: 5px;
  padding: 32px 32px 24px 32px;
  z-index: 10;
  position: relative;
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
  font-family: "PerpetuaStd";
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
  width: 75%;
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
  width: 75%;
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
  width: 75%;
  height: 35px;
  top: 300px;
`;

const AdultBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const BookNowButtonContainer = styled.button`
  position: absolute;
  font-family: "PerpetuaStd";
  display: block;
  width: 75%;
  height: 35px;
  top: 450px;
  left: 55px;
  border: 1px solid white;
  color: white;
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
  background-color: rgba(168, 186, 230, 0.4);
  :hover {
    color: #a8bae6;
    font-weight: 500;
    border: 1px solid #a8bae6;
    background-color: transparent;
  }
`;
