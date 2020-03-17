import React, { useState, useEffect } from "react";
import styled from "styled-components";

const RoomListItem = props => {
  const [Tprice, setTprice] = useState(
    (props.roomPrice * 1.1).toLocaleString(undefined, {
      maximumFractionDigits: 2
    })
  );
  return (
    <RoomListItemAb>
      <RoomListItemRe>
        <RoomListLeftSec>
          <ImgCantainer roomImage={props.roomImage}></ImgCantainer>
        </RoomListLeftSec>
        <IconicInfoSec>
          <RoomNameBox>{props.roomName}</RoomNameBox>
        </IconicInfoSec>
        <RoomPriceSec>
          <PriceBox> ₩ {Tprice}</PriceBox>
          <TaxBox>
            <TaxSpan>tax 10% </TaxSpan>₩{" "}
            {props.roomPrice.toLocaleString(undefined, {
              maximumFractionDigits: 2
            })}
          </TaxBox>
          <Detail></Detail>
        </RoomPriceSec>
      </RoomListItemRe>
    </RoomListItemAb>
  );
};

export default RoomListItem;

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
  margin-top: 10px;
  color: #fff;
  text-align: right;
  font-family: "PerpetuaStd";
  font-size: 25px;
  padding: 5px 10px 0 0;
  border-bottom: 1px solid rgba(180, 200, 250, 0.9);
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

const Detail = styled.div`
  width: 100px;
  margin-top: 10px;
  color: #fff;
  text-align: right;
  font-family: "PerpetuaStd";
  font-size: 20px;
  padding: 5px 10px 0 0;
  margin-left: auto;
`;
