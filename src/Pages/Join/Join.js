import React, { Component } from "react";
import JoinTitle from "Pages/Join/Component/JoinTitle";
import JoinLink from "Pages/Join/Component/JoinLink";
import JointStep1 from "./JoinStep1";
import JointStep2 from "./JoinStep2";
import JointStep3 from "./JoinStep3";

class Join extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <>
        <JoinTitle />
        <JointStep1 />
        <JoinLink />
      </>
    );
  }
}

export default Join;
