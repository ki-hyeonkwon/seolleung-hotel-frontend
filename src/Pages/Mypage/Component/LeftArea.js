import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

class LeftArea extends Component {
  handleLogout = () => {
    window.localStorage.clear();
    this.props.history.push("/");
    window.location.reload();
  };
  render() {
    return (
      <LeftAreaContainer>
        <MyInfo>
          <p>My page</p>
          <h2>
            {this.props.user.name_kr}의 멤버십 번호는 <br />
            <span>{this.props.user.account_number}</span> 입니다.
          </h2>
          <ul>
            <li>
              <Grade>멤버십 등급</Grade>
              <GradeScore>{this.props.user.grade}</GradeScore>
            </li>
            <li>
              <AblePoint>적립 포인트</AblePoint>
              <AblePointScore>0P</AblePointScore>
            </li>
          </ul>
        </MyInfo>
        <MyGrade>
          <p>
            {this.props.user.name_kr}님의 내년 예상 등급은
            <span>{this.props.user.grade}</span>
            입니다.
          </p>
          <ul>
            <li>적립 포인트는 2020년 03월 11일 기준입니다.</li>
            <li>당일 적립 포인트는 익일에 반영됩니다.</li>
            <li>적립 포인트는 10,000P 부터 사용 가능합니다.</li>
          </ul>
        </MyGrade>
        <Logout onClick={this.handleLogout}>로그아웃</Logout>
      </LeftAreaContainer>
    );
  }
}

export default withRouter(LeftArea);
const LeftAreaContainer = styled.div`
    position:relative;
    float:left;
    width: 33.3%;
    height: 100%;
    border-right: 1px solid #cec2b8;
    box-sizing: border-box;
    
}
`;

const MyInfo = styled.div`
width: 100%;
    padding: 58px 0 50px 29px;
    
    p {
        margin-bottom: 32px;
        text-transform: uppercase;
        font-size: 13px;
        font-family: "GothamLight";
        letter-spacing: 1px;
    }

    h2 {
        font-size: 26px;
    line-height: 1.69;
    font-weight: normal;

        span {
            color: #826d67;
        }
    }

    ul {
        margin-top: 32px;
        width: 100%;
        display: flex;

        li {
            width: 24%;
            margin-right: 40px;
        }
    }
}
`;

const Grade = styled.span`
    position: relative;
    display: block;
    font-size: 12px;

    &:after {
        position: absolute;
        top: 1px;
        width: 13px;
        height: 13px;
        content: '';
        right: -11px;
        background: url("https://www.lahanhotels.com/club/images/ico_my_mem.png") no-repeat center;
        background-size: 100%;
    }
}
`;

const GradeScore = styled.div`
    display: block;
    margin-top: 12px;
    font-size: 20px;
    min-width: 80px;
    text-transform: uppercase;
    color: #826d67;
}
`;

const AblePoint = styled(Grade.withComponent("span"))`
&:after {  
    right: 0;
    background: url("https://www.lahanhotels.com/club/images/ico_my_point.png") no-repeat center;
    background-size: 100%;

}
}
`;

const AblePointScore = styled(GradeScore.withComponent("div"))``;

const MyGrade = styled.div`
    border-top: 1px solid #f1eeee;
    padding: 65px 0 30px 29px;

    p {
        margin-bottom: 15px;
        font-size: 13px;
        line-height: 1.84;

        span {
            color: #826d67;
        }
    }

    ul {
        color: #756963;
        li {
            position: relative;
            padding: 0 0 5px 14px;
            margin-top: 3px;
            font-size: 13px;

            &:before {
                position: absolute;
                top: 5px;
                left: 0;
                width: 3px;
                height: 3px;
                border: 1px solid #1d212a;
                border-radius: 50%;
                content: "";
                border: 1px solid #756963;
            }
        }
    }
}
`;

const Logout = styled.span`
   position: absolute;
   display: block;
   left: 30px;
   bottom: 30px;
   font-size: 16px;
   padding-left: 30px;
   background: url("https://www.lahanhotels.com/club/images/ico_my_logout.png") no-repeat left 0;
    background-size: 18px 15px;
    cursor: pointer;
}
`;
