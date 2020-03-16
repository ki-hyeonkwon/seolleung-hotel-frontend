import React, { Component, useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
// import SlickSlider from "Component/Book/SlickSlider";

const BookMainRoom = () => {
  const [roomDatas, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [autoSelect, setAutoSelect] = useState(1);
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [rooms, setRooms] = useState("");
  const [bed, setBed] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/Data/Room.json")
      .then(res => res.json())
      .then(res => {
        // console.log("data", res);
        // roomdatas에 data가 담김
        setData(res.data);
        setSelectedId(res.data[0][1].id);
        setImg(res.data[0][1].image);
        setContent(res.data[0][1].content);
        setName(res.data[0][1].name);
        setCapacity(res.data[0][1].capacity);
        setRooms(res.data[0][1].rooms);
        setBed(res.data[0][1].bed);
      });
  }, []);

  const roomChange = e => {
    console.log(e.target.innerText);
    for (let i in roomDatas) {
      if (e.target.innerText === roomDatas[i][0]) {
        // setSelectedId(roomDatas[0][i].id);
        setImg(roomDatas[i][1].image);
        setContent(roomDatas[i][1].content);
        setName(roomDatas[i][1].name);
        setCapacity(roomDatas[i][1].capacity);
        setRooms(roomDatas[i][1].rooms);
        setBed(roomDatas[i][1].bed);
        console.log(i);
      }
    }
  };

  return (
    <BookMainRoomBox>
      <RoomCategoryBox>
        <RoomCategoryUl>
          <RoomCategoryLi onClick={roomChange}>
            {roomDatas[0] && roomDatas[0][0]}
          </RoomCategoryLi>
          <RoomCategoryLi onClick={roomChange}>
            {roomDatas[1] && roomDatas[1][0]}
          </RoomCategoryLi>
          <RoomCategoryLi onClick={roomChange}>
            {roomDatas[2] && roomDatas[2][0]}
          </RoomCategoryLi>
          <RoomCategoryLi onClick={roomChange}>
            {roomDatas[3] && roomDatas[3][0]}
          </RoomCategoryLi>
          <RoomCategoryLi onClick={roomChange}>
            {roomDatas[4] && roomDatas[4][0]}
          </RoomCategoryLi>
          <RoomCategoryLi onClick={roomChange}>
            {roomDatas[5] && roomDatas[5][0]}
          </RoomCategoryLi>
        </RoomCategoryUl>
      </RoomCategoryBox>
      <RoomSliderBox>
        <RoomSlider bgImg={img}></RoomSlider>
        <RoomInfo>
          <RoomInfoHead>
            <RoomName>{name}</RoomName>
            <RoomCmt>{content}</RoomCmt>
          </RoomInfoHead>
          <RoomInfoMain>
            <RoomInfoes>
              <InfoTitle>Capacity</InfoTitle>
              <Info>{capacity}</Info>
              <InfoTitle>Rooms</InfoTitle>
              <Info>{rooms}</Info>
              <InfoTitle>Bed</InfoTitle>
              <Info>{bed}</Info>
            </RoomInfoes>
          </RoomInfoMain>
        </RoomInfo>
      </RoomSliderBox>
    </BookMainRoomBox>
  );
};
export default BookMainRoom;

const BookMainRoomBox = styled.div`
  /* width: 1460px; */
  width: 80%;
  height: 900px;
`;

const RoomCategoryBox = styled.div`
  width: 100%;
  height: 22px;
  margin-bottom: 55px;
`;

const RoomCategoryUl = styled.ul`
  display: flex;
  float: left;
`;

const RoomCategoryLi = styled.li`
  display: inline;
  margin-right: 40px;
  /* font-family: "MaisonNeue-Light"; */
  font-weight: 100;
  cursor: pointer;
  transition: 0.3s width;
  position: relative;

  &:hover {
    color: #a68164;
  }

  &:after {
    content: "";
    position: absolute;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    left: 0;
    bottom: -1px;
    width: 0;
    height: 1px;
    background: #a68164;
    transition: 0.3s width;
  }
  &:hover:after {
    transition: 0.3s width;
    width: 100%;
  }
`;

// const ListBar = styled.span`
//   width: ${props => (props.underline ? "0" : "110px")};
//   height: 2px;
//   background-color: rgb(166, 129, 100);
//   :&after ;
// `;

// const UnderLine = keyframes`
// from{
//  opacity:0;
//   width: 1px;
// }to{
// animation-play-state: pause;
// opacity:1;
//   width: 110px;
// }
// `;

const RoomSliderBox = styled.div`
  display: flex;
  margin: 0 auto;
`;

const RoomSlider = styled.div`
  height: 810px;
  width: 905px;
  background-image: url(${props =>
    `https://www.lahanhotels.com${props.bgImg}`});
  margin-right: 50px;
`;

const RoomInfo = styled.div`
  width: 40%;
`;

const RoomInfoHead = styled.div`
  /* width: 100%; */
  height: 173px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 208px;
`;

const RoomName = styled.strong`
  display: block;
  /* width: 90%; */
  height: 44px;
  font-size: 32px;
  line-height: 1.375;
  font-family: "GothamLight";
  font-weight: 200;
  margin-bottom: 25px;
  /* text-transform: uppercase; */
  letter-spacing: 1px;
  text-align: center;
`;

const RoomCmt = styled.div`
  width: 390px;
  height: 104px;
  /* font-family: YoonGothicPro730; */
  font-size: 15px;
  line-height: 32px;
  padding: 0 20px;
  text-align: center;
  color: rgb(117, 105, 99);
`;

const RoomInfoMain = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const RoomInfoes = styled.dl`
  display: block;
  text-align: center;
  width: 273px;
`;

const InfoTitle = styled.dt`
  display: block;
  font-size: 14px;
  margin-bottom: 10px;
  color: rgb(117, 105, 99);
`;

const Info = styled.dd`
  display: block;
  font-size: 16px;
  margin-bottom: 50px;
  color: rgb(29, 33, 42);
`;

// const settings = {
//   dots: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   rtl: true
// };

// const handleUnderLine = () => {
//   console.log("lineon :", underline);
//   underline ? setUnderLine(false) : setUnderLine(true);
// };
