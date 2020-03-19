import React, { Component } from "react";
import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";

export default class PrivacyEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      koreanName: "",
      englishName: "",
      birthDate: "",
      gender: "2",
      cpNum: "",
      pNum: "",
      zipCode: "",
      realAddress: "",
      detailAddress: "",
      mail: "",
      selectValue: "",
      error: {
        koreanName: "",
        englishName: "",
        birthDate: "",
        cpNum: "",
        pNum: "",
        mail: ""
      }
    };
  }

  handleChange = e => {
    this.setState({
      gender: e.target.value
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

  handleInput = e => {
    const target = e.target;
    const name = target.name;
    const error = this.state.error;

    const { birthDate } = this.state;

    // console.log(URL.SERVER_URL + "/dataId.json");
    console.log("첫번쨰", e.target.value);

    switch (name) {
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
        error.birthDate = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/.test(
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
        break;
    }

    this.setState({
      [target.name]: target.value,
      error
    });
  };
  render() {
    const {
      open,
      koreanName,
      englishName,
      birthDate,
      cpNum,
      pNum,
      zipCode,
      realAddress,
      detailAddress,
      mail,
      selectValue,
      error
    } = this.state;

    return (
      <Container>
        <Form>
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
              <SectionInputText>
                {this.state.error.englishName}
              </SectionInputText>
            </div>
            <SectionInputBox_v2>
              <SectionInputBox_v2_InputBox>
                <SectionInput
                  onKeyUp={this.handleInput}
                  defaultValue={birthDate}
                  maxLength="8"
                  name="birthDate"
                  placeholder="생년월일"
                  type="text"
                />
                <p>{this.state.error.birthDate}</p>
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
              <SectionInputText>{this.state.error.cpNum}</SectionInputText>
            </SectionInputBox>
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
              <SectionInputButton
                type="button"
                onClick={this.handleAddressClick}
              >
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
              </SectionSelect>
            </div>
          </SectionInputContainer>
        </Form>
        <Button>
          <span>변경 완료</span>
        </Button>
      </Container>
    );
  }
}

const Container = styled.div`
  margin-top: 20px;    
}
`;

const Form = styled.div`
    width: 100%;
    height: 500px;
    overflow: scroll;
}
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
  &::placeholder {
    color: #1d212a;
  }
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

const Button = styled.button`
margin-top: 50px;
    width: 140px;
    line-height: 40px;
    height: 40px;
    font-size: 13px;
    border: none;
   background: #a68164;
   position: relative;

   span {
    color: #000;
    transition: color 0.5s ease;
   }
   &:after {
    content: '';
    position: absolute;
    background: #000;
    opacity: 0.2;
    width: 100%;
    height: 0;
    left: 0%;
    bottom: 0;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    z-index: -1;
   }

   &:hover:after {
    height: 100%;
    z-index: 1;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
   }

   &:hover > span {
    z-index: 10;
    color: #fff;
    -webkit-transition: color 0.5s ease;
    transition: color 0.5s ease;
   }
}
`;
