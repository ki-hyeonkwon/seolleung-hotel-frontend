import React, { Component, useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const BookModal = props => {
  const [modalClose, setModalClose] = useState(false);

  const handleModal = () => {
    setModalClose(!modalClose);
  };

  return (
    <WholeWrapper modalClose={modalClose}>
      <BG></BG>
      <ModalWrapper>
        <ModalContainer>
          <ModalBox>
            <HeaderContainer></HeaderContainer>
            <CloseButtonBox onClick={handleModal}>
              <FontAwesomeIcon icon={faTimes} />
            </CloseButtonBox>
            <ImagesContainer></ImagesContainer>
            <IconicContainer></IconicContainer>
            <RoomInfoContainer></RoomInfoContainer>
            <FacilityInfoContainer></FacilityInfoContainer>
            <CloseButtonBox></CloseButtonBox>
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
  /* z-index: 50; */
  overflow: hidden;
  /* display: none; */
  display: ${props => (props.modalClose ? "none" : "block")};
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
`;

const ModalBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 45vw;
  height: 35vw;
  padding: 30px;
`;

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  background-color: rgba(168, 186, 230, 0.4);
`;

const ImagesContainer = styled.div``;

const IconicContainer = styled.div``;

const RoomInfoContainer = styled.div``;

const FacilityInfoContainer = styled.div``;

const CloseButtonBox = styled.div`
  width: 20px;
  position: absolute;
  top: 5px;
  right: 10px;
  color: white;
  font-size: 25px;
`;
