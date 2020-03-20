import React, { Component, useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import RoomListItem from "Pages/Reservation/Component/RoomListItem";
// import BookModal from "Pages/Reservation/Component/BookModal";

const RoomList = props => {
  return (
    <>
      {/* <BookModal /> */}
      <RoomListWrapper>
        <RoomListContainer>
          {/* 이 친구 맵돌려야된다 */}
          {props.room &&
            props.room.map((roomInfo, idx) => {
              // const roomId = roomInfo.id;
              return (
                <RoomListItem
                  key={idx + 1}
                  roomName={roomInfo.name}
                  roomImage={roomInfo.image}
                  roomPrice={parseInt(Number(roomInfo.price))}
                  modalOpenMid={(tog, id) => props.modalOpen(tog, id)}
                  roomId={roomInfo.id}
                  lookIdMid={id => props.lookId(id)}
                  selectedId={props.selectedId}
                />
              );
            })}
        </RoomListContainer>
      </RoomListWrapper>
    </>
  );
};

export default RoomList;

const RoomListWrapper = styled.div`
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
