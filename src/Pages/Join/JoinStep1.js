import React, { Component } from "react";
import styled from "styled-components";
import JoinTitle from "./Component/JoinTitle";
import JoinSubTitle from "./Component/JoinSubTitle";
import JoinContent1 from "./Component/JoinContent1";
import JoinLink from "./Component/JoinLink";

class JoinStep1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allCheck: false,
      termsCheck: false,
      personalCheck: false,
      marketingCheck: false,
      marketingReportCheck: false,
      titleFirst: "active",
      subTitle: 1,
      buttonText: "다음"
    };
  }

  componentDidMount() {
    sessionStorage.removeItem("marketingCheck");
    sessionStorage.removeItem("marketingReportCheck");
  }

  AllOnChange = e => {
    const targetName = e.target.name;
    const pointState = this.state[targetName];

    if (pointState === false) {
      this.setState({
        allCheck: true,
        termsCheck: true,
        personalCheck: true,
        marketingCheck: true,
        marketingReportCheck: true
      });
    } else {
      this.setState({
        allCheck: false,
        termsCheck: false,
        personalCheck: false,
        marketingCheck: false,
        marketingReportCheck: false
      });
    }
  };

  partOnChange = e => {
    const targetName = e.target.name;
    const pointState = this.state[targetName];

    if (pointState === false) {
      this.setState(
        {
          [targetName]: true
        },
        () => {
          const allTrue = new Set([
            this.state.termsCheck,
            this.state.personalCheck,
            this.state.personalCheck,
            this.state.marketingCheck,
            this.state.marketingReportCheck
          ]);
          if ([...allTrue].length < 2 && [...allTrue][0]) {
            this.setState({
              allCheck: true
            });
          }
        }
      );
    } else {
      this.setState({
        allCheck: false,
        [targetName]: false
      });
    }
  };

  optionOnChange = e => {
    const targetName = e.target.name;
    const pointState = this.state[targetName];

    if (pointState === false) {
      this.setState(
        {
          marketingCheck: true,
          marketingReportCheck: true
        },
        () => {
          const allTrue = new Set([
            this.state.termsCheck,
            this.state.personalCheck,
            this.state.personalCheck,
            this.state.marketingCheck,
            this.state.marketingReportCheck
          ]);
          if ([...allTrue].length < 2 && [...allTrue][0]) {
            this.setState({
              allCheck: true
            });
          }
        }
      );
    } else {
      this.setState({
        allCheck: false,
        marketingCheck: false,
        marketingReportCheck: false
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      termsCheck,
      personalCheck,
      marketingCheck,
      marketingReportCheck
    } = this.state;

    if (termsCheck && personalCheck) {
      this.props.history.push({
        pathname: "/joinStep2"
      });

      window.sessionStorage.setItem("marketingCheck", marketingCheck);
      window.sessionStorage.setItem(
        "marketingReportCheck",
        marketingReportCheck
      );
    } else {
      alert(
        termsCheck
          ? "개인 정보 수집 · 이용에 대한 동의해주세요."
          : "이용 약관에 대한 동의를 해주세요."
      );
    }
  };

  hanldeCancel = e => {
    this.props.history.push({
      pathname: "/joinStep1"
    });
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
      <Section>
        <JoinTitle titleFirst={this.state.titleFirst} />
        <SectionCont>
          <SectionBox>
            <JoinSubTitle pageNum={this.state.subTitle} />
            <SectionCheckboxMain>
              <form action="submit">
                <JoinContent1
                  allCheck={allCheck}
                  termsCheck={termsCheck}
                  personalCheck={personalCheck}
                  marketingCheck={marketingCheck}
                  marketingReportCheck={marketingReportCheck}
                  AllOnChange={this.AllOnChange}
                  partOnChange={this.partOnChange}
                  optionOnChange={this.optionOnChange}
                />
              </form>
            </SectionCheckboxMain>
          </SectionBox>
          <JoinLink
            buttonText={this.state.buttonText}
            buttonCancel={this.hanldeCancel}
            buttonSubmit={this.handleSubmit.bind(this)}
          />
        </SectionCont>
      </Section>
    );
  }
}

const Section = styled.section`
  position: relative;
`;

const SectionCont = styled.section`
  width: 540px;
  margin: 0 auto;
  font-family: "Noto Sans KR", sans-serif;
`;

const SectionBox = styled.div`
  padding-top: 50px;
  border: 1px solid #cec2b8;
`;

const SectionCheckboxMain = styled.div`
  margin-top: 60px;
`;

export default JoinStep1;
