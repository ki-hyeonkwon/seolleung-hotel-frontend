import React, { Component, useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

const SelectList = props => {
  const [item, setItem] = useState(props.listTitle);
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(true);

  const onChangeItem = e => {
    setItem(e.target.innerText);
    setOpen(!open);
    // props.getNumPeo(e);
  };

  const openList = e => {
    console.log("open :", open);
    setOpen(!open);
  };

  return (
    <BookBox>
      <BookButton for="roomKind" name="room" onClick={openList}>
        {props.fix}
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
      </BookUl>
    </BookBox>
  );
};

export default SelectList;

const BookBox = styled.div`
  /* background-color: #9ba2b3; */
  position: absolute;
  left: 20px;
  width: 89%;
  height: 100%;
`;

const BookButton = styled.button`
  position: relative;
  display: block;
  width: 340px;
  height: 50px;
  border: none;
  border-bottom: 2px solid white;
  outline: none;
  color: white;
  background-color: transparent;
  font-family: "PerpetuaStd";
  text-align: left;
  font-size: 22px;
  font-weight: 200;
  line-height: 60px;
  margin-bottom: 15px;
  cursor: pointer;
  z-index: 10;
  padding-left: 10px;
  :hover {
    color: #a8bae6;
    border-bottom: 2px #a8bae6 solid;
  }
`;

const BookUl = styled.ul`
  position: relative;
  width: 340px;
  list-style: none;
  color: #a8bae6;
  background-color: transparent;
  bottom: 0px;
  z-index: 15;
`;

const BookLi = styled.li`
  display: ${props => (props.open ? "block" : "none")};
  /* ${props => (props.open ? { display: "block" } : { display: "none" })} */
  height: 60px;
  font-size: 14px;
  line-height: 60px;
  text-align: left;
  background-color: #fff;
  padding-left: 5px;
  color:#a8bae6;
  /* opacity: 0.7; */
  transition: 0.3s;
  /* font-weight: 300; */
  &:hover {
    opacity: 1;
    background-color: #a8bae6;
    /* rgb(166, 129, 100); */
    color:#5c4a72;
    font-size: 15px;
  }
`;
