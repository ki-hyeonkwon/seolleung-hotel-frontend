import React, { Component } from "react";
import styled from "styled-components";

export default class RightArea extends Component {
  render() {
    return (
      <RightAreaContainer>
        <MypageTab>
          <MypageList>
            <li>질문 내역</li>
            <li>예약 조회</li>
            <li>포인트 내역</li>
            <li>개인 정보 수정</li>
            <li>비밀번호 변경</li>
          </MypageList>
        </MypageTab>
        <MyPageBody>
          <QnaList></QnaList>
          <ReserveList></ReserveList>
          <PointBox></PointBox>
          <PrivacyEdit></PrivacyEdit>
          <ChangePassword></ChangePassword>
        </MyPageBody>
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
    padding-top: 25px;
    display: flex;
    justify-content: flex-end;
}
`;

const MypageList = styled.ul`
    font-size: 13px;
    display: flex;
    justify-content: space-between;

    li {
        margin-right: 10px;

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

const QnaList = styled.div`
    width: 100%;
    min-height: 25px;
    padding-top: 25px;
    display: flex;
    justify-content: flex-end;
}
`;

const ReserveList = styled.div`
    width: 100%;
    min-height: 25px;
    padding-top: 25px;
    display: flex;
    justify-content: flex-end;
}
`;

const PointBox = styled.div`
    width: 100%;
    min-height: 25px;
    padding-top: 25px;
    display: flex;
    justify-content: flex-end;
}
`;

const PrivacyEdit = styled.div`
    width: 100%;
    min-height: 25px;
    padding-top: 25px;
    display: flex;
    justify-content: flex-end;
}
`;

const ChangePassword = styled.div`
    width: 100%;
    min-height: 25px;
    padding-top: 25px;
    display: flex;
    justify-content: flex-end;
}
`;
