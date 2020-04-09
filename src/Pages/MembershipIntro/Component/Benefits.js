import React, { Component } from "react";
import styled from "styled-components";
import checkIntroImg from "Images/ico_table_check.png";

class Benefits extends Component {
  render() {
    return (
      <BenefitBox>
        <BenefitTable>
          <thead>
            <tr>
              <th></th>
              <th scope="col">
                <strong>SILVER</strong>가입 시<br />
                등급 부여
              </th>
              <th scope="col">
                <strong>GOLD</strong>누적 이용 금액
                <br />
                100만원 이상
              </th>
              <th scope="col">
                <strong>DIAMOND</strong>누적 이용 금액
                <br />
                300만원 이상
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">포인트 적립</th>
              <td>3%</td>
              <td>4%</td>
              <td>5%</td>
            </tr>
            <tr>
              <th scope="row">객실 Upgrade 제공</th>
              <td>
                <img src={checkIntroImg} alt="check" />
              </td>
              <td>
                <img src={checkIntroImg} alt="check" />
              </td>
              <td>
                <img src={checkIntroImg} alt="check" />
              </td>
            </tr>
            <tr>
              <th scope="row">Extra bed 무료 제공</th>
              <td>
                <img src={checkIntroImg} alt="check" />
              </td>
              <td>
                <img src={checkIntroImg} alt="check" />
              </td>
              <td>
                <img src={checkIntroImg} alt="check" />
              </td>
            </tr>
            <tr>
              <th scope="row">세탁 서비스 30% 할인</th>
              <td></td>
              <td>
                <img src={checkIntroImg} alt="check" />
              </td>
              <td>
                <img src={checkIntroImg} alt="check" />
              </td>
            </tr>
            <tr>
              <th scope="row">Early check in (12시)</th>
              <td></td>
              <td></td>
              <td>
                <img src={checkIntroImg} alt="check" />
              </td>
            </tr>
            <tr>
              <th scope="row">Late check out (15시)</th>
              <td></td>
              <td></td>
              <td>
                <img src={checkIntroImg} alt="check" />
              </td>
            </tr>
            <tr>
              <th scope="row">사우나&amp;수영장 60% 할인</th>
              <td></td>
              <td></td>
              <td>
                <img src={checkIntroImg} alt="check" />
              </td>
            </tr>
          </tbody>
        </BenefitTable>
        <BenefitList>
          <li>일부 특전은 호텔 상황에 따라 제한될 수 있습니다.</li>
          <li>
            등급별 특전은 고객님께서 직접 객실 투숙 시 본인에 한해서 제공되며
            포인트 적립이 가능한
            <span>이용 건에 해당됩니다.</span>
          </li>
          <li>
            누적 객실 이용 금액에 따라 멤버십 등급은 세 단계로 나뉘어지며 1년
            단위로 등급이
            <span>조정됩니다.</span>
          </li>
          <li>
            등급 조정 기간은 1월 1일~12월 31일(체크아웃 기준)이며 1년 동안의
            이용 실적을 기반으로
            <span>매년 1월 첫 째주에 조정된 등급이 반영됩니다.</span>
          </li>
          <li>
            승급·강등은 1단계씩 조정되며 승급조건 미충족 시 다음해에 강등됩니다.
          </li>
        </BenefitList>
      </BenefitBox>
    );
  }
}

const BenefitBox = styled.div`
  overflow: auto;
  height: 300px;
`;

const BenefitTable = styled.table`
  width: 100%;
  max-width: 540px;
  margin-bottom: 60px;
  text-align: center;
  color: #1d212a;
  border-top: 1px solid #f1eeee;

  th,
  td {
    padding: 10px 0;
    font-weight: 400;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 14px;
    text-align: center;
    border-bottom: 1px solid #f1eeee;
    vertical-align: middle;
  }

  tbody th {
    text-align: left;
  }

  strong {
    display: block;
    font-weight: 500;
  }

  img {
    width: 15px;
    height: auto;
    text-align: center;
  }
`;

const BenefitList = styled.ul`
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

export default Benefits;
