import React, { useState, useReducer } from "react";
import styled from "styled-components";
import * as URL from "../../config";
import NavBar from "../../Component/Nav/NavBar";
import Footer from "../../Components/Footer/Footer";
import FindTitle from "./Component/FindTitle";
import IdFindCont from "./Component/IdFindCont";
import IdFindResult from "./Component/IdFindResult";
import FindButton from "./Component/FindButton";

const IdFind = props => {
  const [num, setNum] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [cpNum, setCpNum] = useState("");
  const [numErrorStatus, SetNumError] = useState("");
  const [nameErrorStatus, SetNameError] = useState("");
  const [birthErrorStatus, SetBirthError] = useState("");
  const [cpNumErrorStatus, SetcpNumError] = useState("");
  const [allErrorStatus, setAllErrorStatus] = useState("");

  const [pageNum, setPageNum] = useState(1);
  const [pageTitle, setPageTitle] = useState("id");

  const setNumChange = e => {
    setNum(e.target.value);
  };
  const setNameChange = e => {
    setName(e.target.value);
  };
  const setBirthChange = e => {
    setBirth(e.target.value);
  };
  const setCpNumChange = e => {
    setCpNum(e.target.value);
  };

  const handleClick = async e => {
    SetNumError(num.length === 0 ? "번호를 입력해주세요." : "");
    SetNameError(name.length === 0 ? "이름을 입력해주세요." : "");
    SetBirthError(birth.length === 0 ? "생년월일을 입력해주세요." : "");
    SetcpNumError(cpNum.length === 0 ? "핸드폰 번호를 입력해주세요." : "");

    if (
      num.length > 0 &&
      name.length > 0 &&
      birth.length > 0 &&
      cpNum.length > 0
    ) {
      const idFetchCheck = await fetch(`${URL.SMS_URL}/account-find`, {
        method: "POST",
        body: JSON.stringify({
          account_number: num,
          name_kr: name,
          birth: birth,
          mobile: cpNum
        })
      });

      const idFetchStatus = idFetchCheck.status;
      const idFetchJson = await idFetchCheck.json();
      console.log(idFetchStatus, idFetchJson);

      if (idFetchStatus === 200) {
        setPageNum(2);
        setId(
          `${idFetchJson.account.slice(0, idFetchJson.account.length - 3)}***`
        );
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
        <FindTitle pageTitle={pageTitle} pageNum={pageNum} />
        <SectionForm>
          {pageNum === 1 ? (
            <IdFindCont
              allErrorStatus={allErrorStatus}
              numErrorStatus={numErrorStatus}
              nameErrorStatus={nameErrorStatus}
              birthErrorStatus={birthErrorStatus}
              cpNumErrorStatus={cpNumErrorStatus}
              setNumChange={setNumChange}
              setNameChange={setNameChange}
              setBirthChange={setBirthChange}
              setCpNumChange={setCpNumChange}
            />
          ) : (
            <IdFindResult id={id} />
          )}
          {pageNum === 1 && <FindButton onClick={handleClick} />}
        </SectionForm>
      </Section>
      <Footer />
    </>
  );
};

const Section = styled.section`
  position: relative;
  width: calc(550px - 60px);
  margin: 210px auto 100px;
  padding: 80px 30px;
  font-size: 16px;
  border: 1px solid #cec2b8;
`;
const SectionForm = styled.div`
  padding: 0 50px;
`;

export default IdFind;
