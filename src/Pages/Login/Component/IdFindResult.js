import React, { useState, useReducer } from "react";
import { BrowserRouter as Route, withRouter, Link } from "react-router-dom";
import styled from "styled-components";

const IdFindResult = props => {
  return (
    <>
      <IdResut>
        <div>
          <em>아이디</em>
          <p>{props.id}</p>
        </div>
        <Link to="/login">
          <JoinBoxButton>Login</JoinBoxButton>
        </Link>
      </IdResut>
      <PwdFindLink>
        <Link to="PwdFind">
          <h2>비밀번호가 기억나지 않으신가요?</h2>
          <span>Find my password</span>
        </Link>
      </PwdFindLink>
    </>
  );
};

const IdResut = styled.section`
  margin-bottom: 100px;
  padding: 80px 0 30px;

  div {
    display: flex;
    padding: 20px 0;
    font-size: 14px;
    border: 1px solid #f1eeee;
    border-left: 0;
    border-right: 0;
  }

  em {
    display: block;
    width: 40%;
    font-style: normal;
  }
`;

const JoinBoxButton = styled.span`
  display: block;
  margin-top: 30px;
  width: 100%;
  padding: 10px 0 6px;
  font-size: 26px;
  font-weight: 500;
  text-align: center;
  font-family: "PerpetuaStd";
  color: #000;
  background-color: #a68264;
  border: 1px solid #a68264;
`;

const PwdFindLink = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: calc(100% - 120px);
  padding: 30px 60px;
  border-top: 1px solid #cec2b8;

  h2 {
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 21px;
    letter-spacing: -1px;
    color: #000;
  }

  span {
    font-size: 14px;
    font-family: "MaisonNeue-Light";
    color: #826d67;
  }
`;

export default IdFindResult;
