import React, { Component } from "react";
import SelectList from "./SelectList";
import styled from "styled-components";

export default class Qna extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      comments: "",
      place: "",
      promotion: ""
    };
  }

  isSelected = selected => {
    console.log("selectedPlace", selected);
    this.setState({
      place: selected,
      promotion: selected
    });
  };

  handleValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleItem = place => {
    this.setState(
      {
        place: place
      },
      () => console.log("place", place)
    );
  };

  // onSubmit = () => {
  //   fetch(, {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: localStorage.getItem("wtw-token")
  //     },
  //     body: JSON.stringify({
  //       content: this.state.title,
  //       rating: this.state.grade.toFixed(1)
  //     })
  //   })
  //     // .then(res => res.json())
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  //     // 에러나면 알려주는 거
  // };

  render() {
    const { title, comments } = this.state;
    const { isSelected, handleValueChange, onSubmit } = this;
    return (
      <Container>
        <h3>Q&A</h3>
        <ContentsBody>
          <Form>
            <ListContainer>
              <SelectList
                onChangeItem={place => isSelected(place)}
                listTitle="지점"
                firstList="경주"
                secondList="울산"
                thirdList="목포"
                forthList="포항"
                fifthList="전주"
                sixthList="Seamarq"
              />
              <SelectList
                onChangeItem={promotion => isSelected(promotion)}
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
                onChange={handleValueChange}
                name="title"
                value={title}
              />
            </Title>
            <Content>
              <textarea
                placeholder="내용"
                onChange={handleValueChange}
                name="comments"
                value={comments}
              ></textarea>
            </Content>

            <Button type="submit" onClick={onSubmit}>
              Send
            </Button>
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
