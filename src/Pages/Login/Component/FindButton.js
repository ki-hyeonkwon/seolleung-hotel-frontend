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
  padding: 10px 56px;
  font-size: 14px;
  font-weight: 500;
  background-color: #a68164;
  cursor: pointer;
`;

export default FindButton;
