import React, { Component } from "react";
import styled from "styled-components";

export default class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordShow: "",
      password: "",
      pwd: "",
      pwdCheck: "",
      error: {
        password: "",
        pwd: "",
        pwdCheck: ""
      }
    };
  }

  handleInput = e => {
    const target = e.target;
    const name = target.name;
    const error = this.state.error;
    const { password, pwd, pwdCheck } = this.state;

    // console.log(URL.SERVER_URL + "/dataId.json");
    console.log("첫번쨰", e.target.value);

    switch (name) {
      case "password":
        error.password =
          /^(?=.*[a-z])(?=.*[0-9]).{8,20}/.test(target.value) === false
            ? "현재 비밀번호와 일치하지 않습니다."
            : "";

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

      default:
        break;
    }
    this.setState({
      [target.name]: target.value,
      error
    });
  };

  render() {
    const { password, pwd, pwdCheck } = this.state;
    const { handleInput, onSubmit } = this;
    return (
      <Container>
        <Form>
          <InputContainer>
            <input
              type="password"
              placeholder="현재 비밀번호"
              onChange={handleInput}
              name="password"
              value={password}
            />
          </InputContainer>
          <InputContainer>
            <input
              defaultValue={pwd}
              onKeyUp={handleInput}
              maxLength="20"
              name="pwd"
              placeholder="비밀번호"
              type="password"
            />
            <ErrorMsg>{this.state.error.pwd}</ErrorMsg>
          </InputContainer>

          <InputContainer>
            <input
              onKeyUp={handleInput}
              defaultValue={pwdCheck}
              maxLength="20"
              name="pwdCheck"
              placeholder="비밀번호 확인"
              type="password"
            />
            <ErrorMsg>{this.state.error.pwdCheck}</ErrorMsg>
          </InputContainer>

          {/* <InputContainer>
            <input
              type="password"
              placeholder="새 비밀번호"
              onChange={handleValueChange}
              name="changePassword"
              value={changePassword}
            />
          </InputContainer>
          <InputContainer>
            <input
              type="password"
              placeholder="새 비밀번호 확인"
              onChange={handleValueChange}
              name="reCheckPassword"
              value={reCheckPassword}
            />
          </InputContainer> */}
        </Form>
        <Button type="submit" onClick={onSubmit}>
          <span>변경 완료</span>
        </Button>
      </Container>
    );
  }
}

const Container = styled.div`
  margin-top: 179px;    
}
`;

const Form = styled.div`

}
`;

const InputContainer = styled.div`
  width:  100%;
  margin-top: 50px;
  position: relative;
    input {
      width: 100%;
      border: none;
      padding-bottom: 10px;
      font-size: 18px;
      
      &::placeholder {
      color: #1d212a;
    }
    }

    &:before {
      position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #dbd6d2;
    }

    &:after {
      position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 0%;
    height: 1px;
    -webkit-transition: width 0.3s ease;
    transition: width 0.3s ease;
    background: #1d212a;
    }

    &:hover:after {
      width: 100%;
    }

    
}
`;

const ErrorMsg = styled.p`
  position: absolute;
  margin-top: 5px;
  font-size: 12px;
  color: #dd1717;
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
