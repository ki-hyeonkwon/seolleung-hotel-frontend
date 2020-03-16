import React from "react";
import styled from "styled-components";

const BookMainContent = () => {
  return (
    <MainTopContentBox>
      <MainTopContent>
        침구 소재서부터 메트리스의 강도, 조명설계,
        <br /> 가구배치와 어메니티 구성 등<br /> 고객의 편안한 휴식을 위한
        다양한 고민 끝에 완성된 객실에서
        <br /> 최상의 휴식을 경험해 보십시오.
      </MainTopContent>
    </MainTopContentBox>
  );
};
export default BookMainContent;

const MainTopContentBox = styled.div`
  height: 208px;
  width: 90%;
  margin-top: 88px;
  margin-bottom: 88px;
`;

const MainTopContent = styled.h2`
  display: block;
  float: left;
  width: 1070px;
  font-size: 30px;
  line-height: 52px;
  font-weight: 200;
`;
