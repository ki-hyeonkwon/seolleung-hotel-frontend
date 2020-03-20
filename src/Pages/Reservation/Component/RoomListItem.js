import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

// 리액트
// 외부라이브러리(프레임워크 -> 가벼운 UI 라이브러리)
// 공통부분
// 가장 먼 컴포넌트
// 가장 가까운 컨포넌트트트

const RoomListItem = props => {
  // console.log("나는 각각 아이템 아이디 :", props.roomId);
  // console.log("나는 토글 아이디:", props.selectedId);

  //  밑에 이친구는 스테이트 저장하지 말고 바로 전달했음
  // const [Tprice, setTprice] = useState(
  //   (props.roomPrice * 1.1).toLocaleString(undefined, {
  //     maximumFractionDigits: 2
  //   })
  // );
  const [select, setSelect] = useState("Select");
  // const [itemId, setId] = useState(props.roomId);
  const [toggleId, setToggleId] = useState(props.selectedId);
  const [toggle, setToggle] = useState(true);

  // 여기서 fetch도 같이 해야해
  const openModal = () => {
    props.modalOpenMid(true, props.roomId);
    console.log("roomListItem :", props.roomId);
    // props.historsetToggley.push(`/reservation?id=${props.roomId}`);
  };

  // const captureId = () => {
  // };

  const handleSelect = e => {
    if (props.selectedId === props.roomId) {
      props.lookIdMid("");
    } else {
      props.lookIdMid(props.roomId);
    }
    e.target.innerText === "Select" ? setSelect("Calcel") : setSelect("Select");
    // console.log(e.target.innerText);
    // console.log("나는 각각 아이템 아이디 :", itemId);
    // console.log("나는 토글 아이디:", props.selectedId);
    // if (props.selectedId === props.roomId) {
    //   setToggle(true);
    // } else {
    //   setToggle(false);
    // }
  };
  console.log(props.selectedId === props.roomId, props.roomId);
  return (
    <RoomListItemAb>
      <RoomListItemRe>
        <RoomListLeftSec>
          <ImgCantainer roomImage={props.roomImage}></ImgCantainer>
        </RoomListLeftSec>
        <IconicInfoSec>
          <RoomNameBox onClick={openModal}>{props.roomName}</RoomNameBox>
        </IconicInfoSec>
        <RoomPriceSec>
          <PriceBox>
            ₩{" "}
            {(props.roomPrice * 1.1).toLocaleString(undefined, {
              maximumFractionDigits: 2
            })}
          </PriceBox>
          <TaxBox>
            <TaxSpan>tax 10% </TaxSpan>₩{" "}
            {props.roomPrice.toLocaleString(undefined, {
              maximumFractionDigits: 2
            })}
          </TaxBox>
          <Detail
            onClick={handleSelect}
            // onMouseEnter={captureId}
            select={select}
            // itemId={itemId}
            // toggle={toggle}
            show={props.selectedId === props.roomId || props.selectedId === ""}
          >
            {select}
          </Detail>
        </RoomPriceSec>
      </RoomListItemRe>
    </RoomListItemAb>
  );
};

export default withRouter(RoomListItem);

const RoomListItemAb = styled.div`
  margin-bottom: 15px;
  border: 1px solid rgba(168, 186, 230, 0.9);
  border-radius: 8px;
  overflow: hidden;
`;

const RoomListItemRe = styled.div`
  width: 58vw;
  height: 200px;
  display: flex;
`;

// 왼쪽 사진, 룸 이름
const RoomListLeftSec = styled.div`
  height: 100%;
  width: 30%;
  border-right: 1px solid rgba(168, 186, 230, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(168, 186, 230, 0.4);
`;
const ImgCantainer = styled.div`
  width: 90%;
  height: 90%;
  background-image: ${props => "url(" + props.roomImage + ")"};
  background-position: center;
  background-repeat: none;
  background-size: cover;
  border-top: 2px solid rgba(168, 186, 230, 0.9);
  border-bottom: 2px solid rgba(168, 186, 230, 0.9);
  /* padding: 5px; */
`;

// 중간 방 정보
const IconicInfoSec = styled.div`
  width: 50%;
  height: 100%;
  border-right: 1px solid rgba(168, 186, 230, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const RoomNameBox = styled.div`
  width: 100%;
  margin-top: 10px;
  color: #fff;
  text-align: center;
  font-family: "PerpetuaStd";
  font-size: 25px;
  padding: 15px 0 0px 0;
  cursor: pointer;
`;

//오른쪽 방 가격 및 선택
const RoomPriceSec = styled.div`
  width: 30%;
  height: 100%;
`;

const PriceBox = styled.div`
  width: 200px;
  /* margin-top: 10px; */
  color: #fff;
  text-align: right;
  font-family: "PerpetuaStd";
  font-size: 25px;
  padding: 5px 10px 0 0;
  border-bottom: 1px solid rgba(180, 200, 250, 1);
  margin-left: auto;
  margin-top: 60px;
`;

const TaxBox = styled.div`
  width: 200px;
  margin-top: 10px;
  color: #fff;
  text-align: right;
  font-family: "PerpetuaStd";
  font-size: 20px;
  padding: 5px 10px 0 0;
  margin-left: auto;
`;

const TaxSpan = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;

const Detail = styled.button`
  /* display: block; */
  display: ${props => (props.show ? "block" : "none")};
  /* visibility: ${props =>
    props.itemId === props.selectedId ? "visible" : "hidden"}; */
  border: 1px solid white;
  background-color: transparent;
  text-align: left;
  width: 100px;
  margin-top: 10px;
  color: #fff;
  text-align: right;
  font-family: "PerpetuaStd";
  font-size: 20px;
  padding: 5px 25px 0 10px;
  margin-left: auto;
  cursor: pointer;
  background-color: ${props =>
    props.select === "Select" ? "transparent" : "rgb(28, 58, 148)"};
  &:hover {
    color: #a8bae6;
    font-weight: 500;
    border: 1px solid #a8bae6;
    background-color: rgb(28, 58, 148);
  }
`;
