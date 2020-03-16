import React, { Component, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import BookMainContent from "./BookMainContent.js";
import BookMainRoom from "./BookMainRoom.js";
import BookMainAD from "./BookMainAD";
import RoomMainVisual from "Component/Book/RoomMainVisual.js";

const BookMain = () => {
  return (
    <BookMainWrapper>
      <BookMainContent />
      <BookMainRoom />
      <BookMainAD />
      <RoomMainVisual />
    </BookMainWrapper>
  );
};
export default BookMain;

const BookMainWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding: 70px 0 70px 0; */
`;
