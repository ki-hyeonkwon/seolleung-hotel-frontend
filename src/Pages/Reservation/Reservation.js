import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import BookLeftTop from "Pages/Reservation/Component/BookLeftTop";
import RoomList from "Pages/Reservation/Component/RoomList";
import BookModal from "Pages/Reservation/Component/BookModal";
import BookLeftBottom from "Pages/Reservation/Component/BookLeftBottom";
import * as URL from "../../config";

const Reservation = () => {
  const [room, setRooms] = useState([]);
  const [selectedRoom, setselectedRoom] = useState("");
  const [modal, setModal] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [date, setDate] = useState([]);
  const [gotId, setGotId] = useState("");
  const [gotPeo, setGotPeo] = useState("");
  const [gotLocation, setGotLocation] = useState("");
  const [dateData, setDateData] = useState([]);

  const lookDate = (im, id, om, od) => {
    setDateData([im, id, om, od]);
  };
  const lookPeo = peo => {
    setGotPeo(peo);
    console.log("사람사람사람", peo);
  };

  const lookLocation = lo => {
    setGotLocation(lo);
  };

  const lookId = id => {
    console.log("자식한테서 올라온 아이템 아이디", id);
    setGotId(id);
  };

  const getDate = (checkIn, checkOut) => {
    setDate([checkIn, checkOut]);
  };

  //모달 onoff => RoomList.js와 연결됨
  const modalOpen = (e, roomId) => {
    console.log("reservation:", e);
    setModal(e);
    console.log("여기로 들어온다: ", roomId);
    setRoomId(roomId);
  };

  // 모달 onoff => BookModal.js와 연결됨
  const handleModal = (modalTog, roomId) => {
    console.log("나는 부모:", modalTog);
    // console.log("나는 룸 아이디: ", roomId);
    setModal(modalTog);
  };

  // {모달창에 정보 전달용}
  // const handleSelect = selectedSth => {
  //   setselectedRoom(selectedSth);
  //   setModal(!modal);
  // };

  useEffect(
    () => {
      fetch(
        `http://10.58.3.163:8000/room?CheckIn=${date[0]}&CheckOut=${date[1]}`
      )
        // fetch("http://localhost:3000/Data/RoomList.json")
        .then(res => res.json())
        .then(res => {
          setRooms(res.room_list);
        });
    },
    // [date]);
    [date]
  );

  return (
    <ReservationWrapper>
      {/* 여기에 홈으로 가는 라우터 연결 */}
      <HomeIconBox></HomeIconBox>
      <ReservationContainer>
        <OpacityBox></OpacityBox>
        <FinalBookOpacity></FinalBookOpacity>
        {/* 얘는 뺄지 안뺄지 결정 x */}
        {/* <RoomLsitOpacity></RoomLsitOpacity> */}

        <BookLeftTop
          getData={(checkIn, checkOut) => getDate(checkIn, checkOut)}
          getPeo={peo => lookPeo(peo)}
          getLo={lo => lookLocation(lo)}
          getD={(im, id, om, od) => lookDate(im, id, om, od)}
        />
        <RoomList
          room={room}
          lookId={id => lookId(id)}
          selectedId={gotId}
          modalOpen={(tog, roomId) => modalOpen(tog, roomId)}
          // id={room.id}
        />
        <BookLeftBottom
          room={room}
          pickRoomId={gotId}
          gotPeo={gotPeo}
          gotLocation={gotLocation}
          dateData={dateData}
        />
      </ReservationContainer>
      <BookModal
        modal={modal}
        roomId={roomId}
        controlModal={tog => handleModal(tog)}
      />
    </ReservationWrapper>
  );
};

export default Reservation;

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

const HomeIconBox = styled.div`
  width: 160px;
  height: 70px;
  background-image: url("https://www.lahanhotels.com/upfile/images/branch/e702cf14-4c1b-4185-8eff-29fd5ddd9ff6.png");
  background-position: -30px;
  background-repeat: none;
  background-size: cover;
  position: absolute;
  /* top: 50%; */
  /* transform: translateX(-50%); */
  /* transform: rotate(-90deg); */
  /* left: -50px; */
  top: 20px;
  right: 100px;
  padding-right: 50px;
  cursor: pointer;
`;

// 20.5vw
const OpacityBox = styled.div`
  width: 20.5vw;
  height: 477px;
  background-color: #9ba2b3;
  opacity: 0.6;
  border-radius: 5px;
  padding: 32px 32px 24px 32px;
  position: absolute;
  top: 0;
  left: 0;
`;

// 컴포넌트로 분리하기, realative 가지는 div 하나 넣기
const FinalBookOpacity = styled.div`
  width: 20.5vw;
  height: 120px;
  background-color: #9ba2b3;
  opacity: 0.6;
  border-radius: 5px;
  padding: 32px 32px 24px 32px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

// const HotelsOpacity = styled.div`
//   width: 500px;
//   height: 120px;
//   background-color: red;
// `;
const RoomLsitOpacity = styled.div`
  width: 60vw;
  height: 670px;
  background-color: #9ba2b3;
  opacity: 0.6;
  border-radius: 5px;
  padding: 32px 32px 24px 32px;
  position: absolute;
  bottom: 0;
  right: 0;
`;
