import React, { Component, useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

const BookList = props => {
  const [item, setItem] = useState(props.listTitle);
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(true);

  const onChangeItem = e => {
    setItem(e.target.innerText);
  };

  const openList = e => {
    console.log("open :", open);
    setOpen(!open);
  };

  // useEffect(() => {
  //   openList();
  // });

  return (
    <BookBox>
      <BookButton for="roomKind" name="room" onClick={openList}>
        {props.fix}&nbsp;&nbsp;
        {item}
      </BookButton>
      <BookUl open={open}>
        <BookLi open={open} onClick={onChangeItem}>
          {props.firstList && props.firstList}
        </BookLi>
        <BookLi open={open} onClick={onChangeItem}>
          {props.secondList && props.secondList}
        </BookLi>
        <BookLi open={open} onClick={onChangeItem}>
          {props.thirdList && props.thirdList}
        </BookLi>
        <BookLi open={open} onClick={onChangeItem}>
          {props.forthList && props.forthList}
        </BookLi>
        <BookLi open={open} onClick={onChangeItem}>
          {props.fifthList && props.fifthList}
        </BookLi>
        <BookLi open={open} onClick={onChangeItem}>
          {props.sixthList && props.sixthList}
        </BookLi>
      </BookUl>
    </BookBox>
  );
};

export default BookList;

const BookBox = styled.div`
  width: 280px;
  height: 60px;
`;

const BookButton = styled.button`
  position: relative;
  display: block;
  width: 280px;
  height: 60px;
  border: none;
  border-bottom: 2px solid white;
  outline: none;
  color: white;
  background-color: transparent;
  font-family: PerpetuaStd;
  text-align: left;
  font-size: 22px;
  font-weight: 200;
  line-height: 60px;
  margin-bottom: 15px;
  cursor: pointer;
  z-index: 1;
`;

const BookUl = styled.ul`
  position: relative;
  width: 280px;
  list-style: none;
  color: #ada2a4;
  background-color: transparent;
  bottom: 0;
  z-index: 2;
`;

const BookLi = styled.li`
  display: ${props => (props.open ? "block" : "none")};
  /* ${props => (props.open ? { display: "block" } : { display: "none" })} */
  height: 60px;
  font-size: 14px;
  line-height: 60px;
  text-align: left;
  color: black;
  background-color: #fff;
  padding-left: 5px;
  /* opacity: 0.7; */
  transition: 0.3s;
  font-weight:300;
  z-index: 2;
  &:hover {
    opacity: 1;
    background-color: rgb(166, 129, 100);
    z-index: 2;
  }
`;
