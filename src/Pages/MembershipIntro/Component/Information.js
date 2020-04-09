import React, { Component } from "react";
import styled from "styled-components";

class Information extends Component {
  render() {
    return (
      <div>
        <InformationList>
          <dt>발급 대상</dt>
          <dd>라한호텔을 이용하는 국내외 개인 고객</dd>
        </InformationList>
        <InformationList>
          <dt>제외 대상</dt>
          <dd>
            단체, 법인, 협회, 만 19세 미만 미성년자, 기타 호텔에서
            <span>정한 범주의 고객</span>
          </dd>
        </InformationList>
        <InformationList margin>
          <dt>발급처</dt>
          <dd>전국 라한호텔 프런트데스크</dd>
        </InformationList>
        <InformationText>
          회원 필수 정보(성명, 생년월일, 성별, 휴대전화, 이메일, 자택주소)가
          누락된 경우
          <span>
            포인트 적립 및 사용이 제한될 수 있사오니 빠짐없이 입력해 주십시오.
          </span>
        </InformationText>
      </div>
    );
  }
}

const InformationList = styled.dl`
  display: flex;
  margin-bottom: ${props => (props.margin ? "50px" : "20px")};
  font-size: 14px;

  dt {
    width: 80px;
  }

  span {
    display: block;
  }
`;

const InformationText = styled.p`
  position: relative;
  padding-left: 12px;
  line-height: 1.6;
  color: #826d67;
  font-size: 15px;

  :before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 3px;
    margin-top: 6px;
    border: 1px solid #826d67;
    border-radius: 50%;
    content: "";
  }

  span {
    display: block;
  }
`;

export default Information;
