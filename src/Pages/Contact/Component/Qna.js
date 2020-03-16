import React, { Component } from "react";
import SelectList from "./SelectList";
import { post } from "axios";
import styled from "styled-components";

export default class Qna extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      comments: ""
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.addCustomer().then(response => {
      console.log(response.data);
    });
  }

  handleValueChange(e) {
    let nextState = {};

    nextState[e.target.name] = e.target.value;

    this.setState(nextState);
    console.log(e.target);
  }

  addQna() {
    const url = "/api/customers";
    const formData = new FormData();
    formData.append("name", this.state.title);
    formData.append("birthday", this.state.comments);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    return post(url, formData, config);
  }

  render() {
    return (
      <Container>
        <h3>Q&A</h3>
        <ContentsBody>
          <Form onSubmit={this.handleFormSubmit}>
            <ListContainer>
              <SelectList
                listTitle="지점"
                firstList="경주"
                secondList="울산"
                thirdList="목포"
                forthList="포항"
                fifthList="전주"
                sixthList="Seamarq"
              />
              <SelectList
                listTitle="프로모션"
                firstList="멤버십"
                secondList="프로모션"
                thirdList="객실"
                forthList="시설"
                fifthList="기타"
              />
            </ListContainer>
            <Title>
              <input
                type="text"
                placeholder="제목"
                onChange={this.handleValueChange}
                name="title"
                value={this.state.title}
              />
            </Title>
            <Content>
              <textarea
                placeholder="내용"
                onChange={this.handleValueChange}
                name="comments"
                value={this.state.comments}
              ></textarea>
            </Content>

            <Button type="submit">Send</Button>
          </Form>
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
    padding: 180px 60px 0 60px;
    font-family: "MaisonNeue-Light";
    font-size: 28px;
    font-weight: 400;
    line-height: 1;
  }
`;

const ContentsBody = styled.div`
  padding: 54px 60px;
  color: #1d212a;
`;

const Form = styled.div``;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 100%;

  position: relative;

  input {
    width: 100%;
    border: none;
    text-indent: 10px;
    font-size: 14px;
    padding: 10px 0;
    border-bottom: 1px solid #e7e3e2;

    &:after {
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background: #1d212a;
      transition: border-bottom 0.3s ease;

      &:focus {
        border-bottom: 1px solid #e7e3e2;
      }
    }
  }
`;

const Content = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 160px;

  textarea {
    width: 100%;
    height: 100%;
    border: none;
    text-indent: 10px;
    font-size: 14px;
    border-bottom: 1px solid #e7e3e2;
    resize: none;
    line-height: 1.6;
  }
`;

const Button = styled.button`
  display: inline-block;
  margin-top: 100px;
  width: 160px;
  height: 40px;
  text-align: center;
  position: relative;
  background: #a68164;
  color: #000;
  -webkit-transition: color 0.5s ease;
  transition: color 0.5s ease;

  &:after {
    content: "";
    position: absolute;
    background: #000;
    opacity: 0.2;
    width: 100%;
    height: 0%;
    left: 0%;
    bottom: 0;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    z-index: -1;
  }

  &:hover:after {
    height: 100%;
    z-index: 1;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  &:hover {
    color: #fff;
    transition: color 0.5s ease;
    z-index: 10;
  }
`;
