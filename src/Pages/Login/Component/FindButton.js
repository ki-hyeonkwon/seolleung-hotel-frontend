import React, { useState, useReducer } from "react";
import styled from "styled-components";

const FindButton = props => {
  return (
    <FindSection>
      <Button onClick={props.onClick}>확인</Button>
    </FindSection>
  );
};

const FindSection = styled.div`
  margin-top: 30px;
`;

const Button = styled.button`
  position: relative;
  padding: 10px 56px;
  font-size: 14px;
  font-weight: 500;
  background-color: #a68164;
  cursor: pointer;

  -webkit-transition: color 0.5s ease;
  transition: color 0.5s ease;

  &:after {
    content: "";
    position: absolute;
    background: #000;
    opacity: 0.2;
    width: 100%;
    height: 0%;
    left: 0%;
    bottom: 0;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    z-index: -1;
  }

  &:hover:after {
    height: 100%;
    z-index: 1;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  &:hover {
    color: #fff;
    transition: color 0.5s ease;
    z-index: 10;
  }
`;

export default FindButton;
