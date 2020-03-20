/* eslint-disable no-unused-expressions */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";
import * as URL from "../../../config";

class JoinStep2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      even: true,
      open: false,
      id: "",
      pwd: "",
      pwdCheck: "",
      koreanName: "",
      englishName: "",
      birthDate: "",
      gender: "2",
      cpNum: "",
      pNum: "",
      authOpen: false,
      authRes: "",
      authNum: "",
      authBl: false,
      zipCode: "",
      realAddress: "",
      detailAddress: "",
      mail: "",
      selectValue: "",
      selectArr: [],
      error: {
        id: "",
        idColor: "",
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
    };
  }

  componentDidMount() {
    this.selectJob();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.props.onKeyUp(this.state);
      this.props.onClick(this.state);
      this.props.onChange(this.state);
    }
  }

  selectJob = async e => {
    const selectFetch = await fetch(`${URL.SMS_URL}/job`, {
      method: "GET"
    });

    const selectFetchJson = await selectFetch.json();

    if (selectFetch.status === 200) {
      this.setState({
        selectArr: await selectFetchJson.jobDate
      });
    }
  };

  handleChange = e => {
    this.setState({
      gender: e.target.value
    });
  };

  handleAuth = e => {
    if (this.state.cpNum.length < 11) {
      alert("휴대폰 번호를 입력하세요.");

      this.setState({
        authOpen: false
      });
    } else {
      this.setState({
        authOpen: true
      });

      fetch(`${URL.SMS_URL}/sms-auth`, {
        method: "POST",
        body: JSON.stringify({
          mobile: this.state.cpNum
        })
      })
        .then(res => res.json())
        .then(res =>
          this.setState({
            authRes: res.AUTHENTICATION
          })
        );
    }
  };

  hadnleAuthComplete = e => {
    alert(
      this.state.authNum === `${this.state.authRes}`
        ? "인증완료되었습니다."
        : "인증실패하였으니 다시 입력해주십시오."
    );

    this.setState(previousState => {
      return {
        authBl:
          previousState.authNum === `${previousState.authRes}` ? true : false
      };
    });
  };

  handleAddressClick = e => {
    this.setState({
      open: !this.state.open
    });
  };

  handleAddress = data => {
    this.setState({
      open: !this.state.open,
      zipCode: data.zonecode,
      realAddress: data.roadAddress
    });
  };

  handleSelect = e => {
    this.setState({
      selectValue: e.target.value
    });
  };

  handleInput = async e => {
    const target = e.target;
    const name = target.name;
    const error = this.state.error;
    let idValidError = null;
    const { pwd, pwdCheck, birthDate } = this.state;

    // console.log(URL.SERVER_URL + "/dataId.json");
    console.log("첫번쨰", e.target.value);

    switch (name) {
      case "id":
        idValidError = await this.idCont(target.value);
        error.id = idValidError.messeage;
        error.idColor = idValidError.idColor;

        break;

      case "pwd":
        error.pwd =
          /^(?=.*[a-z])(?=.*[0-9]).{8,20}/.test(target.value) === false
            ? "8~20자의 영문과 숫자를 혼용하여 입력주세요."
            : "";

        break;
      case "pwdCheck":
        error.pwdCheck =
          pwd === target.value
            ? ""
            : pwd.length > 0 && "비밀번호가 일치하지 않습니다.";

        break;
      case "koreanName":
        error.koreanName = /^[가-힣]+$/.test(target.value)
          ? ""
          : "한글로 정확하게 입력해주세요.";
        break;

      case "englishName":
        error.englishName = /^[a-zA-Z\s]+$/.test(target.value)
          ? ""
          : "영어로 정확하게 입력해주세요.";
        break;
      case "birthDate":
        error.birthDate = /^(19[0-9][0-9]|20\d{2})[\/\-](0[0-9]|1[0-2])[\/\-](0[1-9]|[1-2][0-9]|3[0-1])$/.test(
          target.value
        )
          ? ""
          : "생년월일을 정확하게 입력해주세요.";
        break;

      case "cpNum":
        error.cpNum =
          /(01[016789])(\d{4}|\d{3})\d{4}$/g.test(target.value) ||
          target.value.length === 0
            ? ""
            : "핸드폰 번호를 입력해주세요.";

        break;

      case "authNum":
        error.authNum =
          /[^0-9]/g.test(target.value) || target.value.length === 0
            ? "숫자를 입력해주세요."
            : "";

        break;

      case "pNum":
        error.pNum = /^0(2|3[1-3]|4[1-4]|5[1-5]|6[1-4])-?\d{3,4}-?\d{4}$/.test(
          target.value
        )
          ? ""
          : "전화번호를 입력해주세요.";

        break;

      case "mail":
        error.mail =
          target.length < 1
            ? "이메일을 입력해주세요."
            : /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/.test(
                target.value
              )
            ? ""
            : "이메일 형식을 다시 확인해주세요.";

        break;
      default:
        "";
        break;
    }

    this.setState({
      [target.name]: target.value,
      error
    });
  };

  idCont = async param => {
    if (param === "") {
      return {
        stat: false,
        messeage: "아이디를 입력해주세요.",
        idColor: "red"
      };
    } else if (/^(?=.*[a-z])(?=.*[0-9]).{8,20}/.test(param) === false) {
      // $ 달러는 문자의 마지막
      // ^ 꺽쇠는 문자의 시작

      return {
        stat: false,
        messeage: "8~20자의 영문과 숫자를 혼용하여 입력해주세요.",
        idColor: "red"
      };
    }

    if (this.state.even) {
      this.setState({
        even: false
      });

      this.setState({
        even: true
      });

      const idDuplicateCheck = await fetch(`${URL.SMS_URL}/id-verification`, {
        method: "POST",
        body: JSON.stringify({
          account: param
        })
      });

      return {
        stat: idDuplicateCheck.ok && idDuplicateCheck.status === 400,
        messeage:
          idDuplicateCheck.status === 400
            ? " 중복된 아이디입니다."
            : "사용가능한 아이디입니다.",
        idColor: idDuplicateCheck.status === 400 ? "red" : "yellow"
      };
    }

    return {
      stat: false,
      messeage: "잠시 기다려주십시오.",
      idColor: "red"
    };
  };

  hanldeCancel = e => {
    this.props.history.push({
      pathname: "/joinStep1"
    });
  };

  render() {
    const {
      open,
      id,
      pwd,
      pwdCheck,
      koreanName,
      englishName,
      birthDate,
      cpNum,
      pNum,
      authNum,
      zipCode,
      realAddress,
      detailAddress,
      mail,
      selectValue,
      selectArr,
      error
    } = this.state;

    return (
      <SectionInputBoxCont>
        <SectionInputContainer>
          <SectionInputTitle>멤버십 정보</SectionInputTitle>
          <div>
            <SectionInput
              onKeyUp={e => this.handleInput(e)}
              name="id"
              defaultValue={id}
              maxLength="20"
              placeholder="아이디"
              type="text"
            />
            <SectionInputTextId color={error.idColor}>
              {error.id}
            </SectionInputTextId>
          </div>
          <div>
            <SectionInput
              defaultValue={pwd}
              onKeyUp={this.handleInput}
              maxLength="20"
              name="pwd"
              placeholder="비밀번호"
              type="password"
            />
            <SectionInputText>{this.state.error.pwd}</SectionInputText>
          </div>
          <div>
            <SectionInput
              onKeyUp={this.handleInput}
              defaultValue={pwdCheck}
              maxLength="20"
              name="pwdCheck"
              placeholder="비밀번호 확인"
              type="password"
            />
            <SectionInputText>{this.state.error.pwdCheck}</SectionInputText>
          </div>
        </SectionInputContainer>
        <SectionInputContainer>
          <SectionInputTitle>개인 정보</SectionInputTitle>
          <div>
            <SectionInput
              onKeyUp={this.handleInput}
              defaultValue={koreanName}
              name="koreanName"
              placeholder="성함"
              type="text"
            />
            <SectionInputText>{this.state.error.koreanName}</SectionInputText>
          </div>
          <div>
            <SectionInput
              onKeyUp={this.handleInput}
              defaultValue={englishName}
              name="englishName"
              placeholder="성함(영문)"
              type="text"
            />
            <SectionInputText>{this.state.error.englishName}</SectionInputText>
          </div>
          <SectionInputBox_v2>
            <SectionInputBox_v2_InputBox>
              <SectionInput
                onKeyUp={this.handleInput}
                defaultValue={birthDate}
                maxLength="10"
                name="birthDate"
                placeholder="생년월일(YYYY-MM-DD 형식)"
                type="text"
              />
              <SectionInputText>{this.state.error.birthDate}</SectionInputText>
            </SectionInputBox_v2_InputBox>
            <SectionInputBox_v2_CheckboxBox>
              <SectionInputBox_v2_Checkbox
                onChange={e => this.handleChange(e)}
                value={"2"}
                checked={this.state.gender === "2"}
                id="gender_male"
                name="gender"
                type="radio"
              />
              <label htmlFor="gender_male">
                <SectionInputBox_v2_CheckboxIcon>
                  checkbox
                </SectionInputBox_v2_CheckboxIcon>
                남자
              </label>
              <SectionInputBox_v2_Checkbox
                onChange={e => this.handleChange(e)}
                value={"1"}
                checked={this.state.gender === "1"}
                id="gender_female"
                name="gender"
                type="radio"
              />
              <label htmlFor="gender_female">
                <SectionInputBox_v2_CheckboxIcon>
                  checkbox
                </SectionInputBox_v2_CheckboxIcon>
                여자
              </label>
            </SectionInputBox_v2_CheckboxBox>
          </SectionInputBox_v2>
          <SectionInputBox>
            <SectionInput
              onKeyUp={this.handleInput}
              defaultValue={cpNum}
              maxLength="11"
              name="cpNum"
              placeholder="휴대전화번호 11자"
              type="text"
            />
            <SectionInputButton type="button" onClick={this.handleAuth}>
              인증
            </SectionInputButton>
            <SectionInputText>{this.state.error.cpNum}</SectionInputText>
          </SectionInputBox>
          {this.state.authOpen && (
            <SectionInputBox>
              <SectionInput
                onKeyUp={this.handleInput}
                defaultValue={authNum}
                name="authNum"
                maxLength="6"
                placeholder="인증번호 6자리"
                type="text"
              />
              <SectionInputButton
                type="button"
                onClick={this.hadnleAuthComplete}
              >
                확인
              </SectionInputButton>
              <SectionInputText>{this.state.error.authNum}</SectionInputText>
            </SectionInputBox>
          )}
          <div>
            <SectionInput
              onKeyUp={this.handleInput}
              defaultValue={pNum}
              name="pNum"
              placeholder="유선전화"
              type="text"
            />
            <SectionInputText>{this.state.error.pNum}</SectionInputText>
          </div>
          <SectionInputBox>
            <SectionInput
              placeholder="우편번호"
              value={zipCode}
              readOnly
              type="text"
            />
            <SectionInputButton type="button" onClick={this.handleAddressClick}>
              주소 찾기
            </SectionInputButton>
          </SectionInputBox>
          {open && (
            <DaumPostcode onComplete={this.handleAddress} autoClose={true} />
          )}
          <div>
            <SectionInput
              value={realAddress}
              placeholder="기본 주소"
              readOnly
              type="text"
            />
          </div>
          <div>
            <SectionInput
              onKeyUp={this.handleInput}
              defaultValue={detailAddress}
              name="detailAddress"
              placeholder="상세 주소(선택)"
              type="text"
            />
          </div>
          <div>
            <SectionInput
              onKeyUp={this.handleInput}
              defaultValue={mail}
              name="mail"
              placeholder="이메일"
              type="text"
            />
            <SectionInputText>{this.state.error.mail}</SectionInputText>
          </div>
          <div>
            <SectionSelect
              name=""
              id=""
              onChange={this.handleSelect}
              value={selectValue}
            >
              <option value="">직업(선택)</option>
              {selectArr.map((item, idx) => {
                return (
                  <option key={idx} value={idx + 1}>
                    {item.name}
                  </option>
                );
              })}
            </SectionSelect>
          </div>
        </SectionInputContainer>
      </SectionInputBoxCont>
    );
  }
}

const Section = styled.section`
  position: relative;
`;

const SectionCont = styled.section`
  width: 540px;
  margin: 0 auto;
  font-family: "Noto Sans KR", sans-serif;
`;

const SectionBox = styled.div`
  padding: 50px 0;
  border: 1px solid #cec2b8;
`;

const SectionInputBoxCont = styled.div`
  margin-top: 60px;
  padding: 0 30px;
`;

const SectionInputContainer = styled.fieldset`
  display: block;
  margin-top: 70px;
`;

const SectionInputTitle = styled.legend`
  color: #826d67;
`;

const SectionInputBox = styled.div`
  position: relative;
`;

const SectionInputBox_v2 = styled.div`
  display: flex;
  align-items: flex-end;
`;

const SectionInputBox_v2_InputBox = styled.div`
  width: 50%;
`;

const SectionInputBox_v2_CheckboxBox = styled.div`
  margin-left: 30px;
`;

const SectionInputBox_v2_Checkbox = styled.input`
  display: none;

  &:checked + label > i {
    background-color: #000;
  }

  & + label {
    margin-right: 20px;
  }
`;

const SectionInputBox_v2_CheckboxIcon = styled.i`
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 8px;
  text-indent: -9999px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 50%;
  vertical-align: middle;
`;

const SectionInput = styled.input`
  width: calc(100% - 10px);
  margin-top: 30px;
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 15px;
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

const SectionInputTextId = styled(SectionInputText.withComponent("p"))`
  color: ${props => (props.color === "yellow" ? "#826d67" : "#dd1717")};
`;

const SectionSelect = styled.select`
  width: 100%;
  margin-top: 30px;
  padding: 0 10px 5px;
  font-size: 15px;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #dbd6d2;
  outline: 0;
  -webkit-appearance: none; /* 네이티브 외형 감추기 */
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;

  &::-ms-expand {
    display: none;
  }
`;

export default JoinStep2;

/*

import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as URL from "../../../config";
import styled from "styled-components";

class JoinContentStep2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      even: true,
      id: "",
      pwd: "",
      error: {
        id: "",
        pwd: ""
      },
      agree: {
        marketingCheck: this.props.history.location.state.marketingCheck,
        marketingReportCheck: this.props.history.location.state
          .marketingReportCheck
      }
    };

    this.handleInput.bind(this);
  }

  handleInput = async e => {
    const target = e.target;
    const name = target.name;
    const error = this.state.error;
    let idValidError = null;
    // console.log(URL.SERVER_URL + "/dataId.json");
    console.dir(typeof name);

    switch (name) {
      case "id":
        error.id = (await this.idCont(target.value)).messeage;

        console.log("b");

        break;

      case "pwd":
        console.log("a");

        error.pwd = !/^(?=.*[a-z])(?=.*[0-9]).{8,20}/.test(target.value)
          ? "8~20자의 영문과 숫자를 혼용하여 입력주세요."
          : "";

        break;
      default:
        break;
    }

    this.setState({
      [target.name]: target.value,
      error
    });
  };

  idCont = async param => {
    if (param === "") {
      return {
        stat: false,
        messeage: "아이디를 입력해주세요."
      };
    } else if (/^(?=.*[a-z])(?=.*[0-9]).{8,20}/.test(param) === false) {
      // $ 달러는 문자의 마지막
      // ^ 꺽쇠는 문자의 시작

      return {
        stat: false,
        messeage: "8~20자의 영문과 숫자를 혼용하여 입력해주세요."
      };
    }

    if (this.state.even) {
      this.setState({
        even: false
      });

      const idDuplicateCheck = await fetch(`${URL.SERVER_URL}/dataId.json`);

      this.setState({
        even: true
      });

      return {
        stat: idDuplicateCheck.ok && idDuplicateCheck.status === 400,
        messeage:
          idDuplicateCheck.status === 400
            ? " 중복된 아이디입니다."
            : "사용가능한 아이디입니다."
      };
    }

    return {
      stat: false,
      messeage: "잠시 기다려주십시오."
    };
  };

  render() {
    const { id, pwd } = this.state;

    return (
      <>
        <section>
          <h2>
            JOIN <span>MEMBERSHIP</span>
          </h2>
          <ul>
            <li>약관 동의 1</li>
            <li>정보 입력 2</li>
            <li>가입 완료 3</li>
          </ul>
        </section>
        <section>
          <div>
            <h2>정보 입력</h2>
            <p>
              편리한 클럽 라한 이용 및 가입 완료를 위하여 고객님의 멤버십 및
              개인 정보를 입력해주시기 바랍니다.
            </p>
          </div>
          <div>
            <fieldset>
              <legend>멤버십 정보</legend>
              <div>
                <input
                  onKeyUp={e => this.handleInput(e)}
                  name="id"
                  defaultValue={id}
                  placeholder="아이디"
                  type="text"
                />
                <statusId status={this.state.error.id}>
                  {this.state.error.id}
                </statusId>
              </div>
              <div>
                <input
                  defaultValue={pwd}
                  onKeyUp={this.handleInput}
                  name="pwd"
                  placeholder="비밀번호"
                  type="password"
                />
                <p>{this.state.error.pwd}</p>
              </div>
              <div>
                <input placeholder="비밀번호 확인" type="password" />
              </div>
            </fieldset>
            <fieldset>
              <legend>개인 정보</legend>
              <div>
                <input placeholder="성함" type="text" />
              </div>
              <div>
                <input placeholder="성함(영문)" type="text" />
              </div>
              <div>
                <input placeholder="생년월일" type="text" />
              </div>
              <div>
                <input type="radio" />
                <label for="">남자</label>
                <input type="radio" />
                <label for="">여자</label>
              </div>
              <div>
                <input placeholder="휴대전화번호 11자" type="text" />
              </div>
              <div>
                <input placeholder="유선전화" type="text" />
              </div>
              <div>
                <input placeholder="우편번호" type="text" />
                <button>주소 찾기</button>
              </div>
              <div>
                <input placeholder="상세 주소(선택)" type="text" />
              </div>
              <div>
                <input placeholder="이메일" type="text" />
              </div>
              <div>
                <select name="" id="">
                  <option value="">직업(선택)</option>
                </select>
              </div>
            </fieldset>
          </div>
          <div>
            <Link to="">취소</Link>
            <Link to="">가입완료</Link>
          </div>
        </section>
      </>
    );
  }
}

const statusCont = styled.p`
  color: red;
`;

const statusId = styled.p`
  color: red;
`;

export default JoinStep2;


*/
