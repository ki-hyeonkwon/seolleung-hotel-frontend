import React, { Component } from "react";
import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";
import { address } from "Config/config";
export default class PrivacyEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert_show: false,
      userData: this.props.user,
      koreanName: "",
      englishName: this.props.user.name_eng,
      birthDate: "",
      gender: "1",
      cpNum: "",
      pNum: this.props.user.telephone,
      zipCode: this.props.user.zip_code,
      realAddress: this.props.user.address,
      detailAddress: this.props.user.detailed_address,
      mail: this.props.user.email,
      selectValue: 1,
      selectArr: [],
      marketingAgree: 1,
      job: 1,
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
  componentDidMount() {
    this.selectJob();
  }
  selectJob = async e => {
    const selectFetch = await fetch(`${address}/users/job`, {
      method: "GET"
    });
    console.log("sdlkfj", selectFetch);
    const selectFetchJson = await selectFetch.json();
    if (selectFetch.status === 200) {
      this.setState({
        selectArr: await selectFetchJson.jobDate
      });
    }
  };
  onSubmit = () => {
    fetch(`${address}/users/userinfo`, {
      method: "post",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50IjoiZXVubWkwNSJ9.FHwnXoeIUr6E-CbAb96bMYO-vdWbxpGDZw1HIQm-g0I"
      },
      body: JSON.stringify({
        name_eng: this.state.englishName,
        telephone: this.state.pNum,
        zip_code: this.state.zipCode,
        address: this.state.realAddress,
        detailed_address: this.state.detailAddress,
        email: this.state.mail,
        job: this.state.job,
        marketing_agree: this.state.marketingAgree
      })
    })
      // .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          this.setState({
            alert_show: true
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
    // 에러나면 알려주는 거
  };
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
    console.log("첫번째", e.target.value);
    switch (name) {
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

  //개인정보 수정 확인 창
  alertClose = () => {
    this.setState({
      alert_show: false
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
      error,
      selectArr
    } = this.state;
    return (
      <>
        <Container>
          <Form>
            <SectionInputContainer>
              <SectionInputTitle>개인 정보</SectionInputTitle>
              <div>
                <SectionInput
                  onChange={this.handleInput}
                  defaultValue={koreanName}
                  name="koreanName"
                  placeholder="성함"
                  type="text"
                  value={this.props.user.name_kr}
                  readonly
                />
                <SectionInputText>
                  {this.state.error.koreanName}
                </SectionInputText>
              </div>
              <div>
                <SectionInput
                  onChange={this.handleInput}
                  defaultValue={englishName}
                  name="englishName"
                  placeholder="성함(영문)"
                  type="text"
                  value={this.state.englishName}
                />
                <SectionInputText>
                  {this.state.error.englishName}
                </SectionInputText>
              </div>
              <SectionInputBox_v2>
                <SectionInputBox_v2_InputBox>
                  <SectionInput
                    onChange={this.handleInput}
                    defaultValue={birthDate}
                    maxLength="10"
                    name="birthDate"
                    placeholder="생년월일"
                    type="text"
                    value={this.props.user.birth}
                  />
                  <SectionInputText>
                    {this.state.error.birthDate}
                  </SectionInputText>
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
                  onChange={this.handleInput}
                  defaultValue={cpNum}
                  maxLength="11"
                  name="cpNum"
                  placeholder="휴대전화번호 11자"
                  type="text"
                  value={this.props.user.mobile}
                  readonly
                />
                <SectionInputText>{this.state.error.cpNum}</SectionInputText>
              </SectionInputBox>
              <div>
                <SectionInput
                  onChange={this.handleInput}
                  defaultValue={pNum}
                  name="pNum"
                  placeholder="유선전화"
                  type="text"
                  value={this.state.pNum}
                />
                <SectionInputText>{this.state.error.pNum}</SectionInputText>
              </div>
              <SectionInputBox>
                <SectionInput
                  placeholder="우편번호"
                  value={this.state.zipCode}
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
                <DaumPostcode
                  onComplete={this.handleAddress}
                  autoClose={true}
                />
              )}
              <div>
                <SectionInput
                  value={this.state.realAddress}
                  onChange={this.handleInput}
                  placeholder="기본 주소"
                  type="text"
                />
              </div>
              <div>
                <SectionInput
                  onChange={this.handleInput}
                  name="detailAddress"
                  placeholder="상세 주소(선택)"
                  type="text"
                  value={this.state.detailAddress}
                />
              </div>
              <div>
                <SectionInput
                  onChange={this.handleInput}
                  name="mail"
                  placeholder="이메일"
                  type="text"
                  value={this.state.mail}
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
          </Form>
          <Button onClick={this.onSubmit}>
            <span>변경 완료</span>
          </Button>
        </Container>
        {this.state.alert_show && (
          <Alert>
            <div>
              <p>개인정보가 수정되었습니다.</p>
              <button onClick={this.alertClose}>확인</button>
            </div>
          </Alert>
        )}
      </>
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

const Alert = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(122, 122, 122, 0.5);
  z-index: 1000;
  overflow: hidden;
  div {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 170px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      position: absolute;
      top: 50px;
    }
    button {
      position: absolute;
      bottom: 30px;
      width: 80px;
      height: 40px;
      background: none;
      border: 1px solid #dbd6d2;
      cursor: pointer;

      &:hover {
        border: none;
        background: #a68164;
      }
    }
  }
`;
