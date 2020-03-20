import React, { useState, useReducer } from "react";
import styled from "styled-components";

const FindTitle = props => {
  const [pageSmallTitle, setPageSmallTitle] = useState([
    "FIND MY ID",
    "FIND MY PASSWORD"
  ]);
  const [pageIdTitle, setPageTitle] = useState([
    "아이디를 잊으셨나요?",
    "아이디 조회"
  ]);
  const [pagePwdTitle, setpagePwdTitle] = useState("비밀번호를 잊으셨나요?");
  const [pageSubIdTitle1, setPageSubWTitle1] = useState([
    "안전한 아이디 확인을 위하여 고객님의 정보를 입력해주시기 바랍니다.",
    "고객님의 아이디는 다음과 같습니다. 정확한 아이디 정보는 Q&A로"
  ]);

  const [pageSubIdTitle2, setPageSubWTitle2] = useState([
    "클럽 라한 번호가 기억나지 않는 경우 Q&A를 통해 문의해주시기 바랍니다.",
    "문의해주시기 바랍니다."
  ]);

  const [pageSubPwdTitle, setPageSubPwdTitle] = useState([
    "비밀번호 재설정을 위하여 고객님의 정보를 입력해주시기 바랍니다",
    "클럽 라한 번호가 기억나지 않는 경우 Q&A를 통해 문의해주시기 바랍니다."
  ]);

  return (
    <section>
      <FindSubTitle>
        {props.pageTitle === "id" ? pageSmallTitle[0] : pageSmallTitle[1]}
      </FindSubTitle>
      <FindTitleText>
        <h2>
          {props.pageTitle === "id"
            ? pageIdTitle[props.pageNum - 1]
            : pagePwdTitle}
        </h2>
        <p>
          {props.pageTitle === "id"
            ? pageSubIdTitle1[props.pageNum - 1]
            : pageSubPwdTitle[0]}
          <span>
            {props.pageTitle === "id"
              ? pageSubIdTitle2[props.pageNum - 1]
              : pageSubPwdTitle[1]}
          </span>
        </p>
      </FindTitleText>
    </section>
  );
};

const FindSubTitle = styled.span`
  text-transform: uppercase;
  font-family: "Gotham-Light";
  font-size: 14px;
  letter-spacing: 0px;
`;

const FindTitleText = styled.div`
  font-family: "Noto Sans KR", sans-serif;

  h2 {
    margin-bottom: 12px;
    font-size: 26px;
    font-weight: 400;
  }

  p {
    font-size: 14px;
    letter-spacing: -0.4px;
    line-height: 1.5;

    span {
      display: block;
    }
  }
`;

export default FindTitle;
