import React, { Component } from "react";
import styled from "styled-components";

class Points extends Component {
  render() {
    return (
      <div>
        <PointText>
          전국 라한호텔에서 예약한 객실 이용 금액의 3~5%를 포인트로 적립해
          드립니다.
          <span>
            1포인트는 현금 1원과 동일한 가치를 가지며 1만점 단위로 현금처럼 사용
            가능합니다.
          </span>
          <span>포인트는 객실 이용 금액 결제 시 현금처럼 사용 가능합니다.</span>
          누적이용 금액에 따라 멤버십 등급이 세 단계로 나뉘어지며 1년 단위로
          등급이 조정됩니다.
        </PointText>
        <PointList>
          <li>
            식음 및 기타 부대시설 이용 금액/여행사 요금/단체 할인 요금/일부 특가
            <span>상품/세금 및 봉사료는 적립 대상에서 제외됩니다.</span>
          </li>
          <li>미사용 포인트는 최초 발생일 기준 5년 이후 자동 소멸됩니다.</li>
          <li>식음 업장 및 부대시설은 포인트 결제 대상에서 제외됩니다.</li>
        </PointList>
      </div>
    );
  }
}

const PointText = styled.p`
  position: relative;
  margin-bottom: 25px;
  font-size: 15px;
  line-height: 2.5;
  font-family: "Noto Sans KR", sans-serif;

  span {
    display: block;
  }
`;

const PointList = styled.ul`
  li {
    position: relative;
    margin-bottom: 15px;
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
  }
`;

export default Points;
