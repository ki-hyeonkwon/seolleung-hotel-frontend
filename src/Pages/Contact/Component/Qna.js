import React, { Component } from "react";
import SelectList from "./SelectList";
import PromotionList from "./PromotionList";
import styled from "styled-components";
import { address } from "Config/config";

export default class Qna extends Component {
  constructor() {
    super();
    this.state = {
      alert_show: false,
      title: "",
      comments: "",
      place: [],
      promotion: [],
      selectPlace: "",
      selectPromotion: "",
      open: false
    };
  }
  componentDidMount() {
    this.getPlace();
    this.getPromotion();
  }

  handleValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getPlace = () => {
    fetch(`${address}/room/branch`)
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            place: res.Branch
            // promotion: res.
          },
          () => {
            console.log("list", res.Branch);
          }
        );
      });
  };

  getPromotion = () => {
    fetch(`${address}/inquiry/type`)
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            promotion: res.Inquiry_type
          },
          () => {
            console.log("list", res.Inquiry_type);
          }
        );
      });
  };

  // 보내기 api
  onSubmit = () => {
    fetch(`${address}/inquiry`, {
      method: "post",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50IjoiZXVubWkwNSJ9.FHwnXoeIUr6E-CbAb96bMYO-vdWbxpGDZw1HIQm-g0I"
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.comments,
        branch: this.state.selectPlace,
        inquiry_type: this.state.selectPromotion
      })
    })
      // .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          this.setState({
            alert_show: true
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
    // 에러나면 알려주는 거
  };

  onChangePlace = selected => {
    this.setState(
      {
        selectPlace: selected,
        open: !this.state.open
      },
      () => {
        console.log("selectPlace", selected);
      }
    );
  };

  onChangePromotion = selected => {
    this.setState(
      {
        selectPromotion: selected,
        open: !this.state.open
      },
      () => {
        console.log("selectPromotion", selected);
      }
    );
  };

  //모달 창
  alertClose = () => {
    this.setState(
      {
        alert_show: false
      },
      () => {
        window.location.reload();
      }
    );
  };

  render() {
    console.log("alert_show", this.state.alert_show);
    const { title, comments, place, promotion } = this.state;
    const { isSelected, handleValueChange, onSubmit } = this;
    return (
      <>
        <Container>
          <h3>Q&A</h3>
          <ContentsBody>
            <Form>
              <ListContainer>
                <SelectList
                  onChangeItem={placeId => this.onChangePlace(placeId)}
                  listTitle="지점"
                  dropLists={place}
                  open={this.state.open}
                  value={this.state.selectPlace}
                />
                <PromotionList
                  onChangeItem={promotionId =>
                    this.onChangePromotion(promotionId)
                  }
                  listTitle="문의 유형"
                  dropLists={promotion}
                  open={this.state.open}
                  value={this.state.selectPromotion}
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
        {this.state.alert_show && (
          <Alert>
            <div>
              <p>Q&A가 등록되었습니다.</p>
              <button onClick={this.alertClose}>확인</button>
            </div>
          </Alert>
        )}
      </>
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

const Alert = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(122, 122, 122, 0.5);
  z-index: 10;
  overflow: hidden;
  div {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 170px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      position: absolute;
      top: 50px;
    }
    button {
      position: absolute;
      bottom: 30px;
      width: 80px;
      height: 40px;
      background: none;
      border: 1px solid #dbd6d2;
      cursor: pointer;

      &:hover {
        border: none;
        background: #a68164;
      }
    }
  }
`;
