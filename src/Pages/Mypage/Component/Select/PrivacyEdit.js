import React, { Component } from "react";
import styled from "styled-components";

export default class PrivacyEdit extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     underline: false
  //   };
  // }

  // ShowLine = () => {
  //   this.setState({
  //     underline: !this.state.underline
  //   });
  // };
  render() {
    return (
      <Container>
        <h2>개인 정보</h2>
        <Form>
          <InputContainer>
            <input type="password" placeholder="현재 비밀번호" />
          </InputContainer>
          <InputContainer>
            <input type="password" placeholder="새 비밀번호" />
          </InputContainer>
          <InputContainer>
            <input type="password" placeholder="새 비밀번호 확인" />
          </InputContainer>
        </Form>
        <Button>
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
