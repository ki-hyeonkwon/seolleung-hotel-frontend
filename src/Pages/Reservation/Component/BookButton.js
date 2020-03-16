import React, { Component, useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

const BookButton = props => {
  const [spin, setSpin] = useState(false);

  const handleSpin = () => {
    setSpin(!spin);
  };

  return (
    <BookButtonBox onClick={handleSpin} spin={spin}>
      <BookButtonImg
        src="https://www.lahanhotels.com//upfile/images/branch/c164b993-4b4d-4cf2-9550-75f1e525e2f4.png"
        alt="라한로고"
      ></BookButtonImg>
    </BookButtonBox>
  );
};

export default BookButton;

const BookButtonBox = styled.div`
  /* background-image: url("https://www.lahanhotels.com//upfile/images/branch/c164b993-4b4d-4cf2-9550-75f1e525e2f4.png");
  background-repeat: none;
  background-size: cover;
  background-position: center; */
  width: 150px;
  height: 45px;
  position: absolute;
  ${props => {
    if (props.spin) {
      return css`
        animation: ${spinner} 0.5s linear;
      `;
    }
  }}
`;

const BookButtonImg = styled.image`
  width: 150px;
  height: 45px;
`;

const spinner = keyframes`
from{
  transform: rotateY(0deg);
}to{
  transform: rotateY(-360deg);
}
`;

// const BookLi = styled.li`
//   display: ${props => (props.open ? "block" : "none")};
//   /* ${props => (props.open ? { display: "block" } : { display: "none" })} */
//   height: 60px;
//   font-size: 14px;
//   line-height: 60px;
//   text-align: left;
//   color: black;
//   background-color: #fff;
//   padding-left: 5px;
//   /* opacity: 0.7; */
//   transition: 0.3s;
//   /* font-weight: 300; */
//   &:hover {
//     opacity: 1;
//     background-color: #9ba2b3;
//     /* rgb(166, 129, 100); */
//     color:#fff;
//     font-size: 15px;
//   }
// `;
