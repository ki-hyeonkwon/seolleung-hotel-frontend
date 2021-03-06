import React, { Component } from "react";
import styled from "styled-components";

class JoinStep1 extends Component {
  state = {
    allCheck: false,
    termsCheck: false,
    personalCheck: false,
    marketingCheck: false,
    marketingReportCheck: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.props.onChange(this.state);
    }
  }

  AllOnChange = () => {
    const { allCheck } = this.state;
    this.setState({
      allCheck: !allCheck,
      termsCheck: !allCheck,
      personalCheck: !allCheck,
      marketingCheck: !allCheck,
      marketingReportCheck: !allCheck
    });
  };

  partOnChange = e => {
    const targetName = e.target.name;
    const pointState = this.state[targetName];

    if (
      targetName === "marketingCheck" ||
      targetName === "marketingReportCheck"
    ) {
      this.setState({
        marketingCheck: !pointState,
        marketingReportCheck: !pointState
      });
    } else {
      this.setState({
        [targetName]: !pointState
      });
    }

    this.setState(previousState => {
      return {
        allCheck:
          previousState.termsCheck &&
          previousState.personalCheck &&
          previousState.marketingCheck &&
          previousState.marketingReportCheck
      };
    });
  };

  hanldeCancel = e => {
    this.props.history.push("/joinStep1");
  };

  render() {
    const {
      allCheck,
      termsCheck,
      personalCheck,
      marketingCheck,
      marketingReportCheck
    } = this.state;

    return (
      <SectionCheckboxContainer>
        <li>
          <SectionCheckboxInput
            checked={allCheck}
            onChange={this.AllOnChange}
            name="allCheck"
            id="allCheck"
            type="checkbox"
          />
          <SectionCheckboxLabel htmlFor="allCheck">
            <SectionCheckboxIcon>체크박스</SectionCheckboxIcon>
            <SectionCheckboxInputText>
              모든 항목을 확인하였으며 이에 동의합니다.
            </SectionCheckboxInputText>
          </SectionCheckboxLabel>
        </li>
        <li>
          <SectionCheckboxInput
            checked={termsCheck}
            onChange={this.partOnChange}
            name="termsCheck"
            id="termsCheck"
            type="checkbox"
          />
          <SectionCheckboxLabel htmlFor="termsCheck">
            <SectionCheckboxIcon>체크박스</SectionCheckboxIcon>
            <SectionCheckboxInputText>
              이용 약관에 대한 동의 (필수) *
            </SectionCheckboxInputText>
          </SectionCheckboxLabel>
        </li>
        <li>
          <SectionCheckboxInput
            checked={personalCheck}
            onChange={this.partOnChange}
            name="personalCheck"
            id="personalCheck"
            type="checkbox"
          />
          <SectionCheckboxLabel htmlFor="personalCheck">
            <SectionCheckboxIcon>체크박스</SectionCheckboxIcon>
            <SectionCheckboxInputText>
              개인 정보 수집 · 이용에 대한 동의 (필수) *
            </SectionCheckboxInputText>
          </SectionCheckboxLabel>
        </li>
        <li>
          <SectionCheckboxInput
            checked={marketingCheck}
            onChange={this.partOnChange}
            name="marketingCheck"
            id="marketingCheck"
            type="checkbox"
          />
          <SectionCheckboxLabel htmlFor="marketingCheck">
            <SectionCheckboxIcon>체크박스</SectionCheckboxIcon>
            <SectionCheckboxInputText>
              마케팅 목적을 위한 개인정보 수집 및 이용에 대한 동의 (선택)
            </SectionCheckboxInputText>
          </SectionCheckboxLabel>
        </li>
        <li>
          <SectionCheckboxInput
            checked={marketingReportCheck}
            onChange={this.partOnChange}
            name="marketingReportCheck"
            id="marketingReportCheck"
            type="checkbox"
          />
          <SectionCheckboxLabel htmlFor="marketingReportCheck">
            <SectionCheckboxIcon>체크박스</SectionCheckboxIcon>
            <SectionCheckboxInputText>
              마케팅 목적을 위한 개인정보 처리업무 위탁에 대한 고지 (위 마케팅
              목적을 위한 개인정보 수집 및 이용에 대한 동의 선택시 적용)
            </SectionCheckboxInputText>
          </SectionCheckboxLabel>
        </li>
      </SectionCheckboxContainer>
    );
  }
}

const SectionCheckboxContainer = styled.ul`
  li {
    display: flex;
    align-items: center;
    padding: 30px;
    border-bottom: 1px solid #f1eeee;
  }

  li:last-child {
    border-bottom: 0;
  }
`;

const SectionCheckboxInput = styled.input`
  display: none;

  &:checked + label > i {
    background: #000;
    border: 1px solid black;
  }
`;

const SectionCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

const SectionCheckboxInputText = styled.p`
  width: calc(100% - 32px);
`;

const SectionCheckboxIcon = styled.i`
  display: inline-block;
  position: relative;
  width: 22px;
  height: 22px;
  margin-right: 10px;
  text-indent: -9999px;
  border-radius: 50%;
  border: 1px solid #dbd6d2;
  vertical-align: middle;

  &:after {
    display: block;
    position: absolute;
    top: calc(50% - 4px);
    left: calc(50% - 5px);
    width: 9px;
    height: 3px;
    border: 1px solid #fff;
    border-top: 0;
    border-right: 0;
    content: "";
    transform: rotate(-50deg);
  }
`;

export default JoinStep1;
