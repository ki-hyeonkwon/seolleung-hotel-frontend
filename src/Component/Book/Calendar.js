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
            <CheckIn checkIn={this.state.checkIn}>Check In</CheckIn>
            <Flatpickr
              ref="refDatePicker"
              onClick={this.handleClick}
              date={date}
              options={{
                plugins: [new rangePlugin({ input: ".secondRangeInput" })]
              }}
              // placeholder="Check in"
              style={{
                border: "none",
                backgroundColor: "transparent",
                textAlign: "center",
                fontSize: "22px",
                width: "140px",
                overflow: "hidden",
                zIndex: "3",
                marginLeft: "10px",
                color: "white"
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
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  color: white;
  width: 400px;
  height: 53px;
  position: absolute;
  bottom: 489px;
`;

const CalendarBox = styled.div`
  position: relative;
`;

const Calender = styled.div`
  position: relative;
`;

const CheckIn = styled.span`
  position: absolute;
  left: 60px;
  font-size: 22px;
  z-index: ${props => (props.checkIn ? "1" : "-1")};
`;

const SecondRangeInput = styled.input`
  border: none;
  background-color: transparent;
  text-align: center;
  width: 140px;
  font-size: 22px;
  color: white;
  ::placeholder {
    color: white;
  }
`;
