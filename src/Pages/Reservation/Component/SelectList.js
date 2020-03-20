import React, { Component, useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

const SelectList = props => {
  const [item, setItem] = useState(props.listTitle);
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(true);

  const onChangeItem = e => {
    setItem(e.target.innerText);
    setOpen(!open);
    console.log("나는 자식", e.target.innerText);
    props.getPlace(e.target.innerText);
  };

  const openList = e => {
    // console.log("open :", open);
    setOpen(!open);
    // console.log("list:", props.dropLists);
  };

  // const handleListChange = e => {
  //   props.getPlace(e.target.innerText);
  //   props.getRoomKind(e.target.innerText);
  //   props.getNumPeo(e.target.innerText);
  // };

  return (
    <BookBox>
      <BookButton for="roomKind" name="room" onClick={openList}>
        {props.fix}
        {item}
      </BookButton>
      <BookUl open={open}>
        {props.dropLists.map((list, i) => {
          return (
            <BookLi open={open} key={i} onClick={e => onChangeItem(e)}>
              {list}
            </BookLi>
          );
        })}
      </BookUl>
    </BookBox>
  );
};

export default SelectList;

const BookBox = styled.div`
  /* background-color: #9ba2b3; */
  position: absolute;
  left: 20px;
  width: 100%;
  height: 100%;
`;

const BookButton = styled.button`
  position: relative;
  display: block;
  width: 100%;
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
  /* display: ${props => (props.open ? "block" : "none")}; */
`;

const BookLi = styled.li`
  /* display:block; */
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
