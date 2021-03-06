import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
// import RoomList from "./RoomList";
import { address } from "../../../Config/config";

const BookLeftBottom = props => {
  const [index, setIndex] = useState(props.pickRoomId);
  const [roomInfo, setRoomInfo] = useState(props.room);

  const postInfo = () => {
    fetch(`${address}/reservation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Authorization")
      },
      body: JSON.stringify({
        adult: props.gotPeo,
        checkin: `2020-${props.dateData[0] && props.dateData[0]}-${props
          .dateData[1] && props.dateData[1]}`,
        room_id: props.pickRoomId,
        stay_nights:
          props.room[props.pickRoomId - 1] &&
          props.room[props.pickRoomId - 1].stay_nights,
        price:
          props.room[props.pickRoomId - 1] &&
          Math.floor(props.room[props.pickRoomId - 1].price),
        room_name:
          props.room[props.pickRoomId - 1] &&
          props.room[props.pickRoomId - 1].name
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.token) {
          localStorage.setItem("wtw-token", response.token);
        }
      });
  };
  console.log("결제창 아이디: ", props.pickRoomId);
  console.log("인덱스: ", props.pickRoomId, typeof props.pickRoomId);
  console.log("객체일껄?", props.room);
  console.log(typeof props.pickRoomId);
  // console.log(props.room[0]);
  // console.log("인덱스 값:", Number(props.pickRoomId));
  return (
    <FinalWrapper pickRoomId={props.pickRoomId && props.pickRoomId}>
      <FinalContainer>
        <FianlTop>
          <FinalTopLocaCon>Hotel </FinalTopLocaCon>
          <FinalTopLoca>{props.gotLocation && props.gotLocation}</FinalTopLoca>
          {/* <FinalTopBoxCon>Room:</FinalTopBoxCon>
          <FinalTopBox>
            {props.room &&
              props.room[props.pickRoomId] &&
              props.pickRoomId &&
              props.room[props.pickRoomId] &&
              props.pickRoomId.name}
          </FinalTopBox> */}
        </FianlTop>
        <FianlMid>
          {/* <FinalMidPeoCon>Number of People :</FinalMidPeoCon>
          <FinalMidPeo>{props.gotPeo && props.gotPeo}</FinalMidPeo> */}
          <FinalMidDateCon>Date</FinalMidDateCon>
          <FinalMidDate>
            2020.{props.dateData[0] && props.dateData[0]}.
            {props.dateData[1] && props.dateData[1]} ~ 2020.
            {props.dateData[2] && props.dateData[2]}.
            {props.dateData[3] && props.dateData[3]}
          </FinalMidDate>
        </FianlMid>
        <FianlBottom>
          <DaysNightsCon>How many days </DaysNightsCon>
          <DaysNights>
            {props.room &&
              props.room[props.pickRoomId - 1] &&
              props.room[props.pickRoomId - 1].stay_nights}{" "}
            Days -
            {props.room &&
              props.room[props.pickRoomId - 1] &&
              props.room[props.pickRoomId - 1].stay_nights + 1}
            Nights
          </DaysNights>
          {/* <MoneyCon>Fee :</MoneyCon>
          <Money>
            {props.room &&
              props.room[props.pickRoomId - 1] &&
              Math.floor(props.room[props.pickRoomId - 1].price) *
                props.room[props.pickRoomId - 1].stay_nights}
          </Money> */}
        </FianlBottom>
        <BookNow onClick={postInfo}>Book Now</BookNow>
      </FinalContainer>
    </FinalWrapper>
  );
};

export default withRouter(BookLeftBottom);

const FinalWrapper = styled.div`
  /* display: block; */
  display: ${props => (props.pickRoomId ? "block" : "none")};
  /* background-color: red; */
  position: absolute;
  bottom: 13px;
  left: 7px;
  /* transform: translate(1%, -23%); */
  width: 23vw;
  height: 150px;
  cursor: pointer;
  font-family: "PerpetuaStd";
  color: #fff;
  font-size: 20px;
`;

const FinalContainer = styled.div`
  /* background-color: black; */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* vertical-align: center; */
`;

const FianlTop = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  margin-top: 10px;
`;

// const FinalTopBoxCon = styled.div`
//   width: 20%;
//   text-align: center;

//   padding-left: 5px;
//   padding-top: 15px;
// `;

// const FinalTopBox = styled.div`
//   width: 80%;
//   text-align: left;

//   padding-top: 15px;
//   padding-bottom: 10px;
// `;

const FinalTopLocaCon = styled.div`
  width: 40%;
  text-align: center;
  padding-left: 3px;
`;
const FinalTopLoca = styled.div`
  width: 50%;
  text-align: center;
  padding-left: 45px;
`;

const FianlMid = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
`;

// const FinalMidPeoCon = styled.div`
//   width: 70%;
//   text-align: center;
//   padding-top: 10px;
// `;
// const FinalMidPeo = styled.div`
//   width: 30%;
//   text-align: left;
//   padding-top: 10px;
// `;

const FinalMidDateCon = styled.div`
  width: 41%;
  text-align: center;
`;
const FinalMidDate = styled.div`
  width: 50%;
  text-align: center;
  padding-left: 45px;
`;

const FianlBottom = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
`;

const DaysNightsCon = styled.div`
  width: 40%;
  text-align: center;
`;
const DaysNights = styled.div`
  width: 50%;
  text-align: center;
  padding-left: 45px;
`;

// const MoneyCon = styled.div`
//   width: 20%;
//   padding: 11px;
//   text-align: right;
// `;

// const Money = styled.div`
//   width: 70%;
//   padding: 11px;
// `;

const BookNow = styled.div`
  width: 40%;
  padding: 6px 0;
  margin-top: 20px;
  text-align: center;
  cursor: pointer;
  border: 1px solid white;
  background-color: rgba(168, 186, 230, 0.4);
  :hover {
    color: #a8bae6;
    font-weight: 700;
    border: 1px solid #a8bae6;
    background-color: transparent;
  }
`;
