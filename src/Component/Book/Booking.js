import React, { Component, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import BookList from "Component/Book/BookList.js";
import Calendar from "Component/Book/Calendar.js";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <BookingAreaWrapper>
      <BookingArea>
        <BookingOn>
          {/* <Calendar />
          <BookList
            listTitle="ROOM"
            firstList="DELUXE"
            secondList="FAMILY"
            thirdList="DELUXE SUITE"
            forthList="CORNER SUITE"
            fifthList="PREMIUM SUITE"
            sixthList="FAMILY SUITE"
          />
          <BookList
            fix="Adult"
            listTitle=""
            firstList="1"
            secondList="2"
            thirdList="3"
            forthList="4"
            fifthList="5"
            sixthList="6"
          />
          <BookList
            fix="Chidren"
            listTitle=""
            firstList="1"
            secondList="2"
            thirdList="3"
            forthList="4"
            fifthList="5"
            sixthList="6"
          /> */}
        </BookingOn>
        <BookButton>
          <Link to={"/reservation"} style={{ color: "white" }}>
            Book Now
          </Link>
        </BookButton>
      </BookingArea>
    </BookingAreaWrapper>
  );
};
export default Booking;

const BookingAreaWrapper = styled.div`
  position: absolute;
  bottom: 20%;
  left: 10%;
`;
const BookingArea = styled.div`
  width: 482px;
  height: 372px;
  border-bottom: 3px solid white;
  position: relative;
`;

const BookingOn = styled.div`
  width: 280px;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  bottom: -322px;
`;

const BookButton = styled.div`
  position: absolute;
  width: 130px;
  height: 28px;
  right: 0;
  bottom: 10px;
  color: white;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
`;
