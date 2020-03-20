import React, { Component, useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

const SelectList = props => {
  const [item, setItem] = useState(props.listTitle);
  const [open, setOpen] = useState(false);

  const openList = e => {
    console.log("open :", open);
    setOpen(!open);
  };
  // useEffect(() => {
  //   openList();
  // });
  console.log(item);
  return (
    <BookBox>
      <BookButton
        for="roomKind"
        innerText={item}
        name="room"
        onClick={openList}
      >
        {item}
      </BookButton>
      <BookUl open={open}>
        {props.dropLists.map((list, i) => {
          return (
            <BookLi
              open={open}
              key={i}
              onClick={() => {
                props.onChangeItem(list.id, list.name);
                setItem(list.name);
                setOpen(!open);
              }}
            >
              {list.name}
            </BookLi>
          );
        })}
      </BookUl>
    </BookBox>
  );
};
export default SelectList;
const BookBox = styled.div`
  width: 44%;
  height: 60px;
`;
const BookButton = styled.button`
  position: relative;
  display: block;
  width: 100%;
  padding: 20px 0;
  border: none;
  outline: none;
  color: #1d212a;
  background-color: transparent;
  font-family: "PerpetuaStd";
  text-align: left;
  font-size: 14px;
  font-weight: 200;
  text-indent: 10px;
  cursor: pointer;
  z-index: 1;

  &:after {
    content: "";
    width: 11px;
    height: 6px;
    left: 94%;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    background: url("https://www.lahanhotels.com/images/ico_board_select_open.png");
    background-size: 100% 100%;
    position: absolute;
  }
`;
const BookUl = styled.ul`
  position: relative;
  width: 100%;
  list-style: none;
  border: 1px solid #e7e3e2;
  background-color: transparent;
  bottom: 10px;
  z-index: 5;
`;
const BookLi = styled.li`
  display: ${props => (props.open ? "block" : "none")};
  /* ${props => (props.open ? { display: "block" } : { display: "none" })} */
  padding: 10px 0;
  font-size: 14px;
  text-align: left;
  color: black;
  background-color: #fff;
  /* opacity: 0.7; */
  transition: 0.3s;
  font-weight: 300;
  text-indent: 10px;
  &:hover {
    opacity: 1;
    background-color: rgb(166, 129, 100);
  }
`;
