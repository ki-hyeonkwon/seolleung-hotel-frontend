import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { address } from "../../../Config/config";

const BookModal = props => {
  // const [modalOpen, setModalOpen] = useState(props.modal);
  const [gotRoomId, setGotRoomId] = useState(props.roomId);
  const [details, setDetails] = useState([]);
  const [images, setImages] = useState([]);

  const handleModal = () => {
    // console.log("자식 모달", modalOpen);
    props.controlModal(false);
  };

  useEffect(() => {
    // props.roomId &&
    /* 여기는 http://localhost:8000/room/details/${props.roomId}로 주소 바꿔줘야함*/
    fetch(`${address}/${props.roomId && props.roomId}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setDetails(res.datails);
        setImages(res.details.images);
        // console.log("왔다왔다 내가 왔다.");
        // console.log(res.details.images);
      });
  }, [props.roomId]);

  // console.log(
  //   "모달창으로 들오는 프롭스 토글/룸아이디 :",
  //   props.modal,
  //   "/",
  //   props.roomId
  // );
  // console.log("모달창 스테이트 토글", modalOpen);

  return (
    <WholeWrapper modal={props.modal}>
      <BG></BG>
      <ModalWrapper>
        <ModalContainer>
          <ModalBox>
            <HeaderContainer>
              <CloseButtonBox onClick={handleModal}>
                <FontAwesomeIcon icon={faTimes} />
              </CloseButtonBox>
            </HeaderContainer>
            <ModalContentContainer>
              <ImgWrapper>
                <ImagesContainer>
                  {images.map((image, idx) => {
                    // console.log(image);
                    return <ImgBox key={idx + 1} roomImages={image}></ImgBox>;
                  })}
                </ImagesContainer>
              </ImgWrapper>
              <IconicContainer></IconicContainer>
              <RoomInfoContainer></RoomInfoContainer>
              <FacilityInfoContainer></FacilityInfoContainer>
            </ModalContentContainer>
          </ModalBox>
        </ModalContainer>
      </ModalWrapper>
    </WholeWrapper>
  );
};

export default BookModal;

const WholeWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* z-index: 50; */
  overflow: hidden;
  display: ${props => (props.modal ? "block" : "none")};
  /* display:block; */
`;

const BG = styled.div`
  background-color: black;
  opacity: 0.6;
  position: absolute;
  z-index: 100;
  width: 100vw;
  height: 100vh;
`;

const ModalWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;
const ModalContainer = styled.div`
  border-radius: 8px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
  margin: auto;

  /* display:flex; */
`;

const ModalBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 35vw;
  padding: 30px;
`;

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10%;
  background-color: rgba(168, 186, 230, 0.4);
`;

const ModalContentContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  width: 97%;
  padding: 1.5%;
`;

const ModalContentBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ImgWrapper = styled.div`
  position: relative;
  left: 15%;
  width: 70%;
  height: 300px;
  overflow: hidden;
`;

const ImagesContainer = styled.div`
  /* background-color: green; */
  /* width: 30%; */
  /* padding: 100px; */
  /* overflow: hidden;  */
  display: flex;
  width: 600%;
`;

const ImgBox = styled.div`
  width: 70%;
  height: 300px;
  background-image: ${props => "url(" + props.roomImages + ")"};
  background-position: center;
  background-repeat: none;
  background-size: cover;
`;

const IconicContainer = styled.div``;

const RoomInfoContainer = styled.div``;

const FacilityInfoContainer = styled.div``;

const CloseButtonBox = styled.div`
  width: 20px;
  position: absolute;
  top: 23%;
  right: 10px;
  color: white;
  font-size: 25px;
  cursor: pointer;
`;
