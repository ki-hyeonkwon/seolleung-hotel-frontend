import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "../../Component/Nav/NavBar";
import Footer from "../../Components/Footer/Footer";
import JoinTitle from "Pages/Join/Component/JoinTitle";
import JoinLink from "Pages/Join/Component/JoinLink";
import JoinSubTitle from "Pages/Join/Component/JoinSubTitle";
import JoinStep1 from "./Component/JoinStep1";
import JoinStep2 from "./Component/JoinStep2";
import JoinStep3 from "./Component/JoinStep3";
import * as URL from "../../config";

class Join extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      titleFirst: "active",
      titleSecond: "",
      titleThird: "",
      subTitle: 1,
      buttonText: "다음",
      checkboxBoolean: {},
      inputValue: {
        id: "",
        pwd: "",
        pwdCheck: "",
        koreanName: "",
        englishName: "",
        birthDate: "",
        gender: "2",
        cpNum: "",
        pNum: "",
        authRes: "",
        authNum: "",
        authBl: false,
        zipCode: "",
        realAddress: "",
        detailAddress: "",
        mail: "",
        selectValue: "",
        error: {
          id: "",
          pwd: "",
          pwdCheck: "",
          koreanName: "",
          englishName: "",
          birthDate: "",
          cpNum: "",
          pNum: "",
          authNum: "",
          mail: ""
        }
      },
      complete: {
        name_kr: "",
        account: "",
        account_number: 0
      }
    };
  }

  handleChange = data => {
    this.setState({
      checkboxBoolean: data
    });
  };

  handleInput = data => {
    this.setState({
      inputValue: data
    });
  };

  handleCancel = e => {
    this.props.history.push({
      pathname: "/"
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const {
      termsCheck,
      personalCheck,
      marketingCheck,
      marketingReportCheck
    } = this.state.checkboxBoolean;

    if (this.state.page === 1) {
      if (termsCheck && personalCheck) {
        this.setState({
          page: 2,
          subTitle: 2,
          titleFirst: "pass",
          titleSecond: "active",
          buttonText: "가입완료"
        });
      } else {
        alert(
          termsCheck
            ? "개인 정보 수집 · 이용에 대한 동의해주세요."
            : "이용 약관에 대한 동의를 해주세요."
        );
      }
    } else if (this.state.page === 2) {
      const {
        id,
        pwd,
        pwdCheck,
        koreanName,
        englishName,
        birthDate,
        gender,
        cpNum,
        pNum,
        authBl,
        authOpen,
        authNum,
        zipCode,
        realAddress,
        detailAddress,
        mail,
        selectValue,
        error
      } = this.state.inputValue;

      const {
        marketingCheck,
        marketingReportCheck
      } = this.state.checkboxBoolean;

      const idBl = error.id === "사용가능한 아이디입니다." && id.length > 0;
      const pwdBl = error.pwd.length === 0 && pwd.length > 0;
      const pwdCheckBl = error.pwdCheck.length === 0 && pwdCheck.length > 0;
      const koreanNameBl =
        error.koreanName.length === 0 && koreanName.length > 0;
      const englishNameBl =
        error.englishName.length === 0 && englishName.length > 0;
      const birthDateBl = error.birthDate.length === 0 && birthDate.length > 0;
      const pNumBl = error.pNum.length === 0 && pNum.length > 0;
      const authNumBl = error.authNum.length === 0 && authNum.length > 0;
      const addresssBl = zipCode.length > 0 && realAddress.length > 0;
      const mailBl = error.mail.length === 0 && mail.length > 0;

      if (
        idBl &&
        pwdBl &&
        pwdCheckBl &&
        koreanNameBl &&
        englishNameBl &&
        birthDateBl &&
        authBl &&
        pNumBl &&
        authNumBl &&
        addresssBl &&
        mailBl
      ) {
        const joinComplete = await fetch(`${URL.SMS_URL}/signup`, {
          method: "POST",
          body: JSON.stringify({
            account: id,
            password: pwd,
            name_kr: koreanName,
            name_eng: englishName,
            birth: birthDate,
            gender: gender,
            mobile: cpNum,
            telephone: pNum,
            zip_code: zipCode,
            address: realAddress,
            detailed_address: detailAddress,
            email: mail,
            job: selectValue,
            marketing_agree: marketingCheck
          })
        });

        const joinCompleteJson = await joinComplete.json();

        if (joinComplete.status === 200) {
          this.setState({
            page: 3,
            subTitle: 3,
            titleSecond: "pass",
            titleThird: "active",
            complete: {
              name_kr: joinCompleteJson.name_kr,
              account: joinCompleteJson.account,
              account_number: joinCompleteJson.account_number
            }
          });
        }
      } else {
        alert("모든 정보를 입력해주세요.");
      }
    }
  };

  renderSwitch = param => {
    const { name_kr, account, account_number } = this.state.complete;

    switch (param) {
      case 1:
        return <JoinStep1 onChange={this.handleChange} />;
      case 2:
        return (
          <JoinStep2
            onChange={this.handleInput}
            onKeyUp={this.handleInput}
            onClick={this.handleInput}
          />
        );
      case 3:
        return (
          <JoinStep3 name={name_kr} id={account} mem_num={account_number} />
        );
      default:
        return <JoinStep1 onChange={this.handleChange} />;
    }
  };

  render() {
    const { titleFirst, titleSecond, titleThird, subTitle, page } = this.state;

    return (
      <>
        <NavBar />
        <Section>
          <JoinTitle
            titleFirst={titleFirst}
            titleSecond={titleSecond}
            titleThird={titleThird}
          />
          <SectionCont>
            <SectionBox padding={page}>
              <JoinSubTitle pageNum={subTitle} />
              <SectionCheckboxMain>
                <form action="submit">{this.renderSwitch(page)}</form>
              </SectionCheckboxMain>
            </SectionBox>
            {page !== 3 && (
              <JoinLink
                buttonText={this.state.buttonText}
                buttonCancel={this.handleCancel}
                buttonSubmit={this.handleSubmit}
              />
            )}
          </SectionCont>
        </Section>
        <Footer />
      </>
    );
  }
}

const Section = styled.section`
  position: relative;
  margin: 220px 0 0;
`;

const SectionCont = styled.section`
  width: 540px;
  margin: 0 auto;
  font-family: "Noto Sans KR", sans-serif;
`;

const SectionBox = styled.div`
  padding-top: 50px;
  padding-bottom: ${props => (props.padding !== 1 ? "80px" : 0)};
  border: 1px solid #cec2b8;
`;

const SectionCheckboxMain = styled.div`
  margin-top: 60px;
`;

export default Join;
