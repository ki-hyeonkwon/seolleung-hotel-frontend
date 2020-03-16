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
      checkIn: true
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
              onChange={this.handleCheckIn}
            />
            <SecondRangeInput
              onClick={this.handleClick}
              className="secondRangeInput"
              placeholder="Check out"
              onChange={this.handleCheckIn}
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
  color: #ccc;
  ::placeholder {
    color: #c7c7c7;
  }
`;
