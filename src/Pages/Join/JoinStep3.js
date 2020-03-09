import React, { Component } from "react";
import { Link } from "react-router-dom";
import JoinTitle from "./Component/JoinTitle";
import JoinSubTitle from "./Component/JoinSubTitle";

class JoinStep3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleFirst: "pass",
      titleSecond: "pass",
      titleThird: "active",
      subTitle: 3,
      buttonText: "다음"
    };
  }

  componentDidMount() {
    sessionStorage.removeItem("marketingCheck");
    sessionStorage.removeItem("marketingReportCheck");
  }

  render() {
    return (
      <>
        <JoinTitle
          titleFirst={this.state.titleFirst}
          titleSecond={this.state.titleSecond}
          titleThird={this.state.titleThird}
        />
        <section>
          <JoinSubTitle pageNum={this.state.subTitle} />
          <div>
            <ul>
              <li>
                <em>고객명</em>
                <p>***</p>
              </li>
              <li>
                <em>아아디</em>
                <p>*******</p>
              </li>
              <li>
                <em>클럽 라한 번호</em>
                <p>10101010</p>
              </li>
            </ul>
          </div>
          <div>
            <a href="#">로그인</a>
          </div>
        </section>
      </>
    );
  }
}

export default JoinStep3;
