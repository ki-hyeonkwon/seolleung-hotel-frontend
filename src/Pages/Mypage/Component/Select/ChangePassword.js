import React, { Component } from "react";
import { address } from "Config/config";
import styled from "styled-components";

export default class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordShow: "",
      pwd: "",
      newPwd: "",
      newPwdCheck: "",
      error: {
        pwd: "",
        newPwd: "",
        newPwdCheck: ""
      },
      review_toggle: false
    };
  }

  reviewToggleClose = () => {
    this.setState({ review_toggle: false });
  };

  onSubmit = () => {
    fetch(`${address}/users/userpw`, {
      method: "post",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50IjoibWluamkxNDEyIn0.fd-R3LxjSZHw9mz5VrBAFCfeY6l1AZk6Gts31kdqmQQ"
      },
      body: JSON.stringify({
        password: this.state.pwd,
        new_password: this.state.newPwd
      })
    })
      // .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          this.setState({ review_toggle: true });
        } else {
          this.setState(previousState => {
            return {
              error: {
                pwd:
                  /^(?=.*[a-z])(?=.*[0-9]).{8,20}/.test(previousState.pwd) ===
                  false
                    ? "현재 비밀번호와 일치하지 않습니다."
                    : "",
                newPwd:
                  /^(?=.*[a-z])(?=.*[0-9]).{8,20}/.test(
                    previousState.newPwd
                  ) === false
                    ? "8~20자의 영문과 숫자를 혼용하여 입력주세요."
                    : "",
                newPwdCheck:
                  previousState.newPwd === previousState.newPwdCheck
                    ? ""
                    : "비밀번호가 일치하지 않습니다."
              }
            };
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
    // 에러나면 알려주는 거
  };

  handleInput = e => {
    const target = e.target;
    const name = target.name;
    const error = this.state.error;
    const { pwd, newPwd, newPwdCheck } = this.state;

    // console.log(URL.SERVER_URL + "/dataId.json");
    console.log("첫번쨰", e.target.value);

    this.setState({
      [target.name]: target.value,
      error
    });
  };

  render() {
    const { pwd, newPwd, newPwdCheck } = this.state;
    const { handleInput, onSubmit } = this;
    return (
      <>
        <Container>
          <Form>
            <InputContainer>
              <input
                type="password"
                placeholder="현재 비밀번호"
                onkeyUp={handleInput}
                onChange={handleInput}
                name="pwd"
                value={pwd}
              />
              <ErrorMsg>{this.state.error.pwd}</ErrorMsg>
            </InputContainer>
            <InputContainer>
              <input
                defaultValue={newPwd}
                onChange={handleInput}
                maxLength="20"
                name="newPwd"
                placeholder="비밀번호"
                type="password"
              />
              <ErrorMsg>{this.state.error.newPwd}</ErrorMsg>
            </InputContainer>

            <InputContainer>
              <input
                onChange={handleInput}
                defaultValue={newPwdCheck}
                maxLength="20"
                name="newPwdCheck"
                placeholder="비밀번호 확인"
                type="password"
              />
              <ErrorMsg>{this.state.error.newPwdCheck}</ErrorMsg>
            </InputContainer>
          </Form>
          <Button type="submit" onClick={onSubmit}>
            <span>변경 완료</span>
          </Button>
        </Container>
        {this.state.review_toggle && (
          <Alert onClick={this.reviewToggleClose}>
            <div>
              <p>비밀번호 변경이 완료 되었습니다.</p>
              <button onClick={this.reviewToggleClose}>확인</button>
            </div>
          </Alert>
        )}
      </>
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
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
