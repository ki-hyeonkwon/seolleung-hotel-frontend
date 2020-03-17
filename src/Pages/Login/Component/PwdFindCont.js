import React, { useState, useReducer } from "react";
import styled from "styled-components";

const PwdFindCont = props => {
  return (
    <section>
      <SectionInputTextMargin>{props.allErrorStatus}</SectionInputTextMargin>
      <form action="submit">
        <div>
          <SectionInput
            onChange={e => props.setIdChange(e)}
            name="id"
            placeholder="아이디"
            type="text"
          />
          <SectionInputText>{props.idErrorStatus}</SectionInputText>
        </div>
        <div>
          <SectionInput
            onChange={e => props.setNumChange(e)}
            name="num"
            placeholder="클럽 라한 번호"
            type="text"
          />
          <SectionInputText>{props.numErrorStatus}</SectionInputText>
        </div>
        <div>
          <SectionInput
            onChange={e => props.setNameChange(e)}
            name="name"
            placeholder="성명"
            type="text"
          />
          <SectionInputText>{props.nameErrorStatus}</SectionInputText>
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

export default PwdFindCont;
