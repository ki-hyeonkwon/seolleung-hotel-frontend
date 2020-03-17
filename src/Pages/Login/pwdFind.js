import React, { useState, useReducer } from "react";
import { BrowserRouter as Route, withRouter, Link } from "react-router-dom";
import * as URL from "../../config";
import styled from "styled-components";
import NavBar from "../../Component/Nav/NavBar";
import Footer from "../../Components/Footer/Footer";
import FindTitle from "./Component/FindTitle";
import PwdFindCont from "./Component/PwdFindCont";
import FindButton from "./Component/FindButton";

const PwdFind = ({ props, history }) => {
  const [num, setNum] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [numErrorStatus, SetNumError] = useState("");
  const [idErrorStatus, SetIdError] = useState("");
  const [nameErrorStatus, SetNameError] = useState("");
  const [allErrorStatus, setAllErrorStatus] = useState("");

  const setNumChange = e => {
    setNum(e.target.value);
  };
  const setNameChange = e => {
    setName(e.target.value);
  };

  const setIdChange = e => {
    setId(e.target.value);
  };

  const [pageTitle, setPageTitle] = useState("pwd");

  const handleClick = async e => {
    SetNumError(num.length === 0 ? "번호를 입력해주세요." : "");
    SetNameError(name.length === 0 ? "이름을 입력해주세요." : "");
    SetIdError(id.length === 0 ? "아이디를 입력해주세요." : "");

    if (num.length > 0 && name.length > 0 && id.length > 0) {
      const pwdFetchCheck = await fetch(`${URL.SMS_URL}/password-find`, {
        method: "POST",
        body: JSON.stringify({
          account: id,
          account_number: num,
          name_kr: name
        })
      });

      const pwdFetchStatus = pwdFetchCheck.status;

      console.log(pwdFetchStatus);

      if (pwdFetchStatus === 200) {
        alert("가입하신 이메일로 임시 비밀번호가 발송되었으니 확인바랍니다.");

        history.push("/login");
      } else {
        setAllErrorStatus(
          "클럽 라한 번호, 성명, 생년월일, 휴대전화번호를 확인해주세요. 클럽 라한에 등록되지 않았거나 가입 정보와 일치하지 않습니다."
        );
      }
    }
  };

  return (
    <>
      <NavBar />
      <Section>
        <FindTitle pageTitle={pageTitle} />
        <SectionForm>
          <PwdFindCont
            setNumChange={setNumChange}
            setNameChange={setNameChange}
            setIdChange={setIdChange}
            idErrorStatus={idErrorStatus}
            numErrorStatus={numErrorStatus}
            nameErrorStatus={nameErrorStatus}
            allErrorStatus={allErrorStatus}
          />
          <FindButton onClick={handleClick} />
        </SectionForm>
        <IdFindLink>
          <Link to="/IdFind">
            <h2>아이디가 기억나지 않으신가요?</h2>
            <span>Find my ID</span>
          </Link>
        </IdFindLink>
      </Section>
      <Footer />
    </>
  );
};

const Section = styled.section`
  position: relative;
  width: 550px;
  margin: 200px auto 100px;
  padding-top: 80px;
  font-size: 16px;
  border: 1px solid #cec2b8;

  section {
    padding: 0 30px;
  }
`;

const SectionForm = styled.div`
  padding: 0 50px;

  > div {
    margin: 30px;
  }
`;

const IdFindLink = styled.div`
  width: calc(100% - 120px);
  margin-top: 60px;
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

export default PwdFind;
