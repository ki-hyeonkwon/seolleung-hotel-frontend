import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "../../Component/Nav/NavBar";
import Footer from "../../Components/Footer/Footer";
import IntroLeft from "./Component/IntroLeft";
import IntroRight from "./Component/IntroRight";

class MembershipIntro extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Section>
          <IntroLeft />
          <IntroRight />
        </Section>
        <Footer />
      </>
    );
  }
}

const Section = styled.section`
  display: flex;

  > div:first-child {
    width: 45%;
  }

  > div:last-child {
    width: 55%;
  }
`;

export default MembershipIntro;
