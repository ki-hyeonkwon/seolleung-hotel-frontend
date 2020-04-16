import React, { useState, useReducer } from "react";
import { BrowserRouter as Route, withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Kakao from "kakaojs";
import * as URL from "../../config";
import NavBar from "../../Component/Nav/NavBar";
import Footer from "../../Components/Footer/Footer";

const Login = ({ location, history }) => {
  function reducer(state, action) {
    return {
      ...state,
      [action.name]: action.value
    };
  }

  const [idErrorStatus, SetIdError] = useState("");
  const [pwdErrorStatus, SetPwdError] = useState("");
  const [kakaoLogin, setKaKaoLogin] = useState({ accessToken: "" });

  const [state, dispatch] = useReducer(reducer, {
    id: "",
    pwd: ""
  });

  const { id, pwd } = state;

  const onChangeInput = e => {
    dispatch(e.target);
  };

  const onClickLogin = async e => {
    if (id.length === 0 && pwd.length === 0) {
      console.log("a");
      SetIdError("아이디를 입력해주세요.");
      SetPwdError("비밀번호를 입력해주세요.");
    } else {
      const loginCheck = await fetch(`${URL.SMS_URL}/login`, {
        method: "POST",
        body: JSON.stringify({
          account: state.id,
          password: state.pwd
        })
      });

      const resStatus = loginCheck.status;
      const res = await loginCheck.json();

      if (resStatus === 200) {
        window.localStorage.setItem("Authorization", res.Authorization);
        history.push("/");
      } else {
        SetIdError("");
        SetPwdError(
          "아이디, 비밀번호를 확인해주세요. 클럽 라한에 등록되지 않았거나 가입정보와 일치하지 않습니다."
        );
      }
    }
  };

  const kakaoPromise = () => {
    return new Promise((onSuccess, onReject) => {
      Kakao.init("491463a162c9cd3badb8930d575989e5");
      Kakao.Auth.login({
        success: params => {
          onSuccess(params);
        },
        fail: errorObj => {
          onReject(errorObj);
        }
      });
    });
  };
  const kakaoLoginFnc = async () => {
    try {
      const kakaoResult = await kakaoPromise();
      setKaKaoLogin({ accessToken: kakaoResult.access_token });

      const requestFromKaKao = await fetch(`${URL.SMS_URL}/kakao`, {
        method: "POST",
        headers: { Authorization: kakaoResult.access_token }
      });

      if (requestFromKaKao.status === 200) {
        const authorization = await requestFromKaKao.json();

        window.localStorage.setItem(
          "Authorization",
          authorization.Authorization
        );
        history.push("/");
      }

      console.dir(requestFromKaKao);
    } catch (error) {
      console.log(error);
      alert("다시 시도 바랍니다.");
    }
  };

  return (
    <>
      <NavBar />
      <LoginWrap>
        <LoginCont>
          <LoginBox>
            <LoginSubTitle>LOGIN</LoginSubTitle>
            <LoginTitle>
              클럽 라한에 오신 것을 환영합니다. 포인트 혜택 및 다양한 서비스를
              <span>이용해보세요.</span>
            </LoginTitle>
            <LoginInputBox>
              <li>
                <LoginInput
                  onChange={onChangeInput}
                  name="id"
                  value={id}
                  type="text"
                  placeholder="아이디"
                />
                <LoginError>{idErrorStatus}</LoginError>
              </li>
              <li>
                <LoginInput
                  name="pwd"
                  value={pwd}
                  onChange={onChangeInput}
                  type="password"
                  placeholder="비밀번호"
                />
                <LoginError>{pwdErrorStatus}</LoginError>
              </li>
            </LoginInputBox>
            <div>
              <LoginBtn onClick={onClickLogin}>Login</LoginBtn>
              <FindInfoList>
                <li>
                  <Link to="/IdFind">아이디 찾기</Link>
                </li>
                <li>
                  <Link to="PwdFind">비밀번호 찾기</Link>
                </li>
              </FindInfoList>
            </div>
          </LoginBox>
          <JoinBox>
            <div>
              <JoinBoxIntro>
                <dt>아직 클럽 라한의 멤버가 아니신가요?</dt>
                <dd>
                  클럽 라한은 전국 라한호텔에서 포인트 혜택 및 특전을 제공하는
                  새로운 통합 멤버십 서비스입니다.
                </dd>
              </JoinBoxIntro>
              <JoinBoxText>
                <li>현금처럼 사용할 수 있는 포인트 적립</li>
                <li>멤버십 전용 특전</li>
              </JoinBoxText>
              <Link to="/join">
                <JoinBoxButton>클럽라한 멤버되기</JoinBoxButton>
              </Link>
            </div>
            <div>
              <JoinBoxIntro>
                <dt>SNS로 로그인은 어떠신가요?</dt>
                <dd>
                  간단하게 SNS로 가입을 진행할 수 있으며, 호텔에서 제공하는
                  포인트 및 특전도 제공받으실 수 있습니다.
                </dd>
              </JoinBoxIntro>
              <JoinBoxButton
                id="kakaoLogin"
                type="button"
                onClick={kakaoLoginFnc}
              >
                카카오로 로그인하기
              </JoinBoxButton>
            </div>
          </JoinBox>
        </LoginCont>
      </LoginWrap>
      <Footer />
    </>
  );
};

const LoginWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 210px 0 100px;
  background-color: #f8f8f7;
`;

const LoginCont = styled.section`
  display: flex;
  width: 1100px;
  height: 720px;
  margin: 0 auto;
  border: 1px solid #cec2b8;
`;

const LoginBox = styled.div`
  width: calc(50% - 153px);
  padding: 80px 88.5px;
`;

const LoginSubTitle = styled.span`
  text-transform: uppercase;
  font-family: "Gotham-Light";
  font-size: 14px;
  letter-spacing: 0px;
`;

const LoginTitle = styled.h2`
  margin-top: 20px;
  font-size: 27px;
  font-weight: 400;
  font-family: "Noto Sans KR", sans-serif;

  span {
    display: block;
  }
`;

const LoginInputBox = styled.ul`
  margin: 80px 0 70px;
`;

const LoginInput = styled.input`
  width: calc(100% - 10px);
  margin-top: 30px;
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 15px;
  outline: 0;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #dbd6d2;
`;

const LoginError = styled.p`
  margin-top: 5px;
  font-size: 13px;
  color: #dd1717;
`;

const LoginBtn = styled.button`
  display: block;
  position: relative;
  width: 100%;
  padding: 15px 0 10px;
  text-align: center;
  font-size: 26px;
  font-family: "PerpetuaStd";
  color: #000;
  background-color: #a68164;
  cursor: pointer;
  -webkit-transition: color 0.5s ease;
  transition: color 0.5s ease;

  &:after {
    content: "";
    position: absolute;
    background: #000;
    opacity: 0.2;
    width: 100%;
    height: 0%;
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

  &:hover {
    color: #fff;
    transition: color 0.5s ease;
    z-index: 10;
  }
`;

const FindInfoList = styled.ul`
  margin-top: 35px;
  text-align: center;

  li {
    display: inline-block;
    padding-right: 20px;
  }

  li:last-child {
    padding-left: 20px;
    padding-right: 0;
  }

  a {
    color: #000;
  }
`;

const JoinBox = styled.div`
  width: calc(50% - 149px);
  padding: 130px 89px;
  border-left: 1px solid #cec2b8;

  > div:first-child {
    margin-bottom: 80px;
  }
`;

const JoinBoxIntro = styled.dl`
  font-family: "Noto Sans KR", sans-serif;

  dt {
    margin-bottom: 12px;
    font-size: 20px;
  }

  dd {
    font-size: 15px;
    letter-spacing: -0.4px;
    line-height: 1.5;
  }
`;

const JoinBoxText = styled.ul`
  margin-top: 35px;

  li {
    position: relative;
    margin-top: 5px;
    padding-left: 20px;
    font-weight: 400;
  }

  li:first-child {
    margin-top: 0;
  }

  li:before {
    display: block;
    position: absolute;
    top: calc(50% - 5px);
    left: 0;
    width: 3px;
    height: 3px;
    border: 1px solid #444;
    border-radius: 50%;
    content: "";
  }
`;

const JoinBoxButton = styled.button`
  display: block;
  position: relative;
  margin-top: 30px;
  width: 100%;
  padding: 10px 0;
  font-size: 15px;
  text-align: center;
  color: #000;
  background-color: #fff;
  border: 1px solid #a68264;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  &:after {
    content: "";
    position: absolute;
    background: #f1eeee;
    opacity: 1;
    width: 100%;
    height: 0%;
    left: 0%;
    bottom: 0;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    z-index: -1;
  }

  &:hover:after {
    height: 100%;
    z-index: -1;
    color: #000;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  &:hover {
    color: #000;
    z-index: 10;
  }
`;

export default withRouter(Login);
