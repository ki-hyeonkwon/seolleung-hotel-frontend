import React, { useState, useReducer, useEffect } from "react";
import styled from "styled-components";

const IdFindCont = ({
  allErrorStatus,
  birthErrorStatus,
  cpNumErrorStatus,
  numErrorStatus,
  nameErrorStatus,
  setNumChange,
  setNameChange,
  setBirthChange,
  setCpNumChange,
  num,
  name,
  birth,
  cpNum
}) => {
  return (
    <section>
      <form action="submit">
        <SectionInputTextMargin>{allErrorStatus}</SectionInputTextMargin>
        <div>
          <SectionInput
            onChange={e => setNumChange(e)}
            name="num"
            defaultValue={num}
            placeholder="클럽 라한 번호"
            type="text"
          />
          <SectionInputText>{numErrorStatus}</SectionInputText>
        </div>
        <div>
          <SectionInput
            onChange={e => setNameChange(e)}
            name="name"
            defaultValue={name}
            placeholder="성명"
            type="text"
          />
          <SectionInputText>{nameErrorStatus}</SectionInputText>
        </div>
        <div>
          <SectionInput
            onChange={e => setBirthChange(e)}
            name="birth"
            defaultValue={birth}
            placeholder="생년월일 8자(YYYY-MM-DD 형식)"
            type="text"
          />
          <SectionInputText>{birthErrorStatus}</SectionInputText>
        </div>
        <div>
          <SectionInput
            onChange={e => setCpNumChange(e)}
            name="cpNum"
            defaultValue={cpNum}
            placeholder="휴대전화번호 11자"
            type="text"
          />
          <SectionInputText>{cpNumErrorStatus}</SectionInputText>
        </div>
      </form>
    </section>
  );
};

const Section = styled.section`
  padding: 40px 0;
`;

const SectionInput = styled.input`
  width: calc(100% - 10px);
  margin-top: 20px;
  padding: 20px 0 10px;
  padding-left: 10px;
  font-size: 18px;
  outline: 0;
  border: 0;
  border-bottom: 1px solid #dbd6d2;
`;

const SectionInputButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 10px;
  font-size: 14px;
  color: #a68164;
  outline: 0;
  border: 0;
`;

const SectionInputText = styled.p`
  padding-top: 5px;
  padding-left: 10px;
  font-size: 13px;
  color: #dd1717;
`;

const SectionInputTextMargin = styled(SectionInputText.withComponent("p"))`
  margin-top: 20px;
`;

export default IdFindCont;
