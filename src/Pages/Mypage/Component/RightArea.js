import React, { Component } from "react";
import QnaList from "./Select/QnaList";
import ReserveList from "./Select/ReserveList";
import PointBox from "./Select/PointBox";
import PrivacyEdit from "./Select/PrivacyEdit";
import ChangePassword from "./Select/ChangePassword";
import styled from "styled-components";

export default class RightArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 1
    };
  }

  changeStage = num => {
    this.setState({
      stage: num
    });
  };

  render() {
    const obj = {
      1: <QnaList />,
      2: <ReserveList />,
      3: <PointBox />,
      4: (
        <PrivacyEdit
          user={this.props.userData && this.props.userData}
          myPage={this.props.myPage}
        />
      ),
      5: <ChangePassword />
    };
    console.log(this.props.userData, "data");
    const { stage } = this.state;

    return (
      <RightAreaContainer>
        <MypageTab>
          <MypageList>
            <li
              onClick={() => this.changeStage(1)}
              style={{ color: stage === 1 ? "#a68164" : "#1d212a" }}
            >
              질문 내역
            </li>
            <li
              onClick={() => this.changeStage(2)}
              style={{ color: stage === 2 ? "#a68164" : "#1d212a" }}
            >
              예약 조회
            </li>
            <li
              onClick={() => this.changeStage(3)}
              style={{ color: stage === 3 ? "#a68164" : "#1d212a" }}
            >
              포인트 내역
            </li>
            <li
              onClick={() => this.changeStage(4)}
              style={{ color: stage === 4 ? "#a68164" : "#1d212a" }}
            >
              개인 정보 수정
            </li>
            <li
              onClick={() => this.changeStage(5)}
              style={{ color: stage === 5 ? "#a68164" : "#1d212a" }}
            >
              비밀번호 변경
            </li>
          </MypageList>
        </MypageTab>
        <MyPageBody>{obj[stage]}</MyPageBody>
      </RightAreaContainer>
    );
  }
}

const RightAreaContainer = styled.div`
    float:left;
    box-sizing: border-box;
    position:relative;
    width: 66.7%;
    padding: 0 60px;
}
`;

const MypageTab = styled.div`
    width: 100%;
    min-height: 25px;
    padding-top: 30px;
    display: flex;
    justify-content: flex-end;
}
`;

const MypageList = styled.ul`
    font-size: 13px;
    display: flex;
    justify-content: space-between;

    li {
        margin-right: 20px;
        cursor: pointer;
      letter-spacing:0.0001rem;
        &:last-child {
            margin-right: 0;
        }
    }
}
`;

const MyPageBody = styled.div`
    position: relative;
    width: 100%;
}
`;
