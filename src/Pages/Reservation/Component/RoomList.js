import React, { Component, useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import RoomListItem from "Pages/Reservation/Component/RoomListItem";

const RoomList = props => {
  const [room, setRooms] = useState([]);
  const [images, setImg] = useState("");
  // const [iconicInfo, setIconic] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/Data/RoomList.json")
      .then(res => res.json())
      .then(res => {
        setRooms(res.rooms);
        console.log(
          "anj :",
          res.rooms[0].room_info.view,
          "방 이름 :",
          res.rooms[0].roomName
        );
      });
  }, []);

  console.log({ room });
  return (
    <RoomListWrapper>
      <RoomListContainer>
        {/* 이 친구 맵돌려야된다 */}
        {room.map((roomInfo, idx) => {
          return (
            <RoomListItem
              roomName={roomInfo.roomName}
              roomImage={roomInfo.images}
              roomPrice={parseInt(Number(roomInfo.iconic_info.price))}
            />
          );
        })}
      </RoomListContainer>
    </RoomListWrapper>
  );
};

export default RoomList;

const RoomListWrapper = styled.section`
  width: 60vw;
  height: 670px;
  background-color: transparent;
  /* opacity: 0.6; */
  border-radius: 5px;
  padding: 32px 32px 24px 32px;
  position: absolute;
  bottom: 0;
  right: 0;
  overflow-y: scroll;
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
    border-radius: 10px;
  }
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0.44, rgb(168, 186, 230)),
      color-stop(0.72, rgb(73, 125, 189)),
      color-stop(0.86, rgb(28, 58, 148))
    );
  }
`;

const RoomListContainer = styled.div`
  position: relative;
  /* padding-left: 15px; */
`;
