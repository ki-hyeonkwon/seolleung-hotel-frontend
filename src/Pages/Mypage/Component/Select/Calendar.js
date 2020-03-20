import React, { Component } from "react";
import styled from "styled-components";
import "flatpickr/dist/themes/dark.css";
import Flatpickr from "react-flatpickr";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Calendar extends Component {
  constructor() {
    super();
    this.test = React.createRef();
    this.state = {
      date: new Date(),
      checkIn: false,
      checkInDay: "",
      checkOutDay: "",
      checkInMonth: "",
      checkOutMonth: ""
    };
  }
  handleClick = e => {
    this.refs.refDatePicker.flatpickr.clear();
    console.log(e);
  };

  handelCheckBox = e => {
    const checkInDate = Object.values(e)[0];
    const checkOutDate = Object.values(e)[1];
    if (checkInDate !== undefined && checkOutDate !== undefined) {
      const checkInDay = checkInDate.getDate();
      const checkOutDay = checkOutDate.getDate();
      const checkInMonth = checkInDate.getMonth() + 1;
      const checkOutMonth = checkOutDate.getMonth() + 1;
      console.log(checkInDate);
      console.log("checkIn", checkInDay);
      console.log("checkOut", checkOutDay);
      console.log("checkInMonth", checkInDate.getMonth() + 1);
      console.log("checkOutMonth", checkOutDate.getMonth() + 1);
      this.setState({ checkInDay: checkInDate.getDate() });
      this.setState({ checkOutDay: checkOutDate.getDate() });
      this.setState({ checkInMonth: checkInDate.getMonth() + 1 });
      this.setState({ checkOutMonth: checkOutDate.getMonth() + 1 });
    }
  };

  // handleSubmit = () => {
  //   fetch(, {
  //         method: "post",
  //         headers: {
  //           "Content-Type": "application/json",
  //           // Authorization: localStorage.getItem("wtw-token")
  //         },
  //         body: JSON.stringify({
  //           checkIn: `${this.state.checkInMonth}- ${this.state.checkInDay}`,
  //           checkOut: `${this.state.checkOutMonth}- ${this.state.checkOutDay}`
  //         })
  //       })
  //         // .then(res => res.json())
  //         .then(res => {
  //           console.log(res);
  //         })
  //         .catch(error => {
  //           console.error(error);
  //         });
  //         // 에러나면 알려주는 거
  //     };
  // };

  render() {
    const { date } = this.state;
    // console.log(this.test);
    return (
      <CalendarContainer>
        <CalendarBox>
          <Calender>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              style={{ color: "white", fontSize: "25px" }}
            />
            <Flatpickr
              ref="refDatePicker"
              onClick={this.handleClick}
              date={date}
              options={{
                plugins: [new rangePlugin({ input: ".secondRangeInput" })]
              }}
              placeholder="Check in"
              style={{
                position: "absolute",
                left: "5px",
                border: "none",
                backgroundColor: "transparent",
                textAlign: "center",
                fontSize: "13px",
                width: "74px",
                overflow: "hidden",
                zIndex: "3",
                marginRight: "10px"
              }}
              value={date}
              onChange={date => {
                this.setState({ date });
                // this.handelCheckBox();
              }}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              onChange={this.handelCheckBox}
            />
            <SecondRangeInput
              onClick={this.handleClick}
              className="secondRangeInput"
              placeholder="Check out"
              onChange={this.handelCheckBox}
            />
          </Calender>
        </CalendarBox>
      </CalendarContainer>
    );
  }
}

const CalendarContainer = styled.div`
  top: 10px;
  right: 0;
  color: #000;
  width: 200px;
  border-bottom: 1px solid #dbd6d2;
  position: relative;
  position: absolute;
`;

const CalendarBox = styled.div`
  position: relative;
`;

const Calender = styled.div`
  position: relative;
`;

const SecondRangeInput = styled.input`
  position: absolute;
  right: 5px;
  border: none;
  background-color: transparent;
  text-align: center;
  width: 75px;
  font-size: 13px;
  ::placeholder {
    color: "#757575";
  }
`;
