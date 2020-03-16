import React, { Component } from "react";
import styled from "styled-components";

export default class ContactList extends Component {
  render() {
    return (
      <Container>
        <h3>Contact list</h3>
        {/* <List>
          <li>경주</li>
          <li>울산</li>
          <li>목포</li>
          <li>포항</li>
          <li>전주</li>
        </List> */}
        <ContentsBody>
          <Form></Form>
        </ContentsBody>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 96vh;
  position: relative;

  h3 {
    color: #1d212a;
    padding: 60px 6.25% 20px;
    font-family: "MaisonNeue-Light";
    font-size: 28px;
    font-weight: 400;
    line-height: 1;
  }
`;

const ContentsBody = styled.div`
  padding: 54px 40px 0 30px;
`;

const Form = styled.div``;
