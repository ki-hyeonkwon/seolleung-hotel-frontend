import React, { Component } from "react";
import Place from "Components/Place/Place";
import styled from "styled-components";

export default class ContactList extends Component {
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
    // const obj = {
    //   1: <QnaList />,
    //   2: <ReserveList />,
    //   3: <PointBox />,
    //   4: <PrivacyEdit />,
    //   5: <ChangePassword />
    // };

    const { stage } = this.state;

    return (
      <Container>
        <h3>Contact list</h3>
        <MypageTab>
          <MypageList>
            <li
              onClick={() => this.changeStage(1)}
              style={{ color: stage === 1 ? "#a68164" : "#1d212a" }}
            >
              경주
            </li>
            <li
              onClick={() => this.changeStage(2)}
              style={{ color: stage === 2 ? "#a68164" : "#1d212a" }}
            >
              울산
            </li>
            <li
              onClick={() => this.changeStage(3)}
              style={{ color: stage === 3 ? "#a68164" : "#1d212a" }}
            >
              목포
            </li>
            <li
              onClick={() => this.changeStage(4)}
              style={{ color: stage === 4 ? "#a68164" : "#1d212a" }}
            >
              포항
            </li>
            <li
              onClick={() => this.changeStage(5)}
              style={{ color: stage === 5 ? "#a68164" : "#1d212a" }}
            >
              전주
            </li>
          </MypageList>
        </MypageTab>
        <ContentsBody>
          <Place></Place>
        </ContentsBody>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 85vh;
  position: relative;
  margin-top: 100px;
  box-sizing: border-box;

  h3 {
    color: #1d212a;
    padding: 60px 6.25% 20px;
    font-family: "MaisonNeue-Light";
    font-size: 28px;
    font-weight: 400;
    line-height: 1;
  }
`;

const MypageTab = styled.div`
    width: 100%;
    min-height: 25px;
    padding: 10px 0 0 6.25%;
    display: flex;
    justify-content: flex-start;
}
`;

const MypageList = styled.ul`
    font-size: 13px;
    display: flex;
    justify-content: space-between;

    li {
        margin-right: 40px;
        cursor: pointer;
      letter-spacing:0.0001rem;
        &:last-child {
            margin-right: 0;
        }
    }
}
`;

const ContentsBody = styled.div``;
