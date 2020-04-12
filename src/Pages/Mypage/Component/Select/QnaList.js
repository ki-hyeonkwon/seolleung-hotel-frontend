import React, { Component } from "react";
import SelectList from "./List/SelectList";
import PromotionList from "./List/PromotionList";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import { address } from "Config/config";

export default class QnaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleClose: true,
      modify_show: false,
      delete_show: false,
      posts: [],
      place: [],
      promotion: [],
      placeId: "",
      promotionId: "",
      branch: {
        1: "경주",
        2: "울산",
        3: "목포",
        4: "포항",
        5: "seamarQ"
      },
      inquiry_type: {
        1: "멤버십",
        2: "프로모션",
        3: "객실",
        4: "시설",
        5: "기타"
      },
      user: [],
      title: "",
      content: "",
      id: "",
      item: "",
      open: false
    };
  }

  componentDidMount() {
    this.getPlace();
    this.getPromotion();
    this.test();
  }

  getPlace = () => {
    fetch(`${address}/room/branch`)
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            place: res.Branch
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
            // promotion: res.
          },
          () => {
            console.log("list", res.Inquiry_type);
          }
        );
      });
  };

  test = () => {
    fetch(`${address}/inquiry`, {
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50IjoiZXVubWkwNSJ9.FHwnXoeIUr6E-CbAb96bMYO-vdWbxpGDZw1HIQm-g0I"
      }
    })
      .then(res => res.json())
      .then(res =>
        this.setState(
          {
            user: res.data
          },
          () => console.log("qna", res.data)
        )
      );
  };

  onSubmit = () => {
    fetch(`${address}/inquiry/${this.state.id}`, {
      method: "post",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50IjoiZXVubWkwNSJ9.FHwnXoeIUr6E-CbAb96bMYO-vdWbxpGDZw1HIQm-g0I"
      },
      body: JSON.stringify({
        branch: this.state.placeId,
        inquiry_type: this.state.promotionId,
        title: this.state.title,
        content: this.state.content
      })
    })
      .then(res => {
        console.log(res);
        console.log(res.message);
        if (res.status === 200) {
          this.setState(
            {
              toggleClose: true,
              modify_show: true
            },
            () => {
              this.test();
            }
          );
        }
      })
      .catch(error => {
        console.error(error);
      });
    // 에러나면 알려주는 거
  };

  onDelete = () => {
    fetch(`${address}/inquiry`, {
      method: "delete",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50IjoiZXVubWkwNSJ9.FHwnXoeIUr6E-CbAb96bMYO-vdWbxpGDZw1HIQm-g0I"
      },
      body: JSON.stringify({
        id: this.state.id
      })
    })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          this.setState(
            {
              toggleClose: true,
              delete_show: true
            },
            () => {
              this.test();
            }
          );
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  onChangeItem = selected => {
    this.setState({
      placeId: selected,
      open: !this.state.open
    });
  };

  onChangePromotion = selected => {
    this.setState({
      promotionId: selected,
      open: !this.state.open
    });
  };

  ToggleClose = (title, content, id, branch, typeId) => {
    this.setState(
      {
        toggleClose: !this.state.toggleClose,
        title: title,
        content: content,
        id: id,
        placeId: branch,
        promotionId: typeId
      },
      () => {
        console.log(
          "setState 후: ",
          this.state.promotionId,
          this.state.placeId
        );
      }
    );
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //포인트 요청 확인 창
  alertClose = () => {
    this.setState({
      modify_show: false,
      delete_show: false
    });
  };

  render() {
    console.log("유저", this.state.user[0] && this.state.user[0].branch_id);
    const { toggleClose, place, promotion, user } = this.state;
    console.log("placeId: ", this.state.placeId);
    console.log("promotionId: ", this.state.promotionId);

    return (
      <>
        <Container>
          <QnaTable>
            <h2>Q&A 내역</h2>
            <Mid>
              <table>
                <thead>
                  <tr>
                    <Th1>날짜</Th1>
                    <Th2>지점</Th2>
                    <Th3>문의 유형</Th3>
                  </tr>
                </thead>
                <tbody>
                  {user &&
                    user.map(user => {
                      return (
                        <tr
                          onClick={() =>
                            this.ToggleClose(
                              user.title,
                              user.content,
                              user.id,
                              user.branch_id,
                              user.inquiry_type_id
                            )
                          }
                          key={user.id}
                          id={user.id}
                        >
                          <Td1>{user.created_at.slice(0, 10)}</Td1>
                          <Td2>{user.title}</Td2>
                          <Td3>{user.content}</Td3>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </Mid>
          </QnaTable>
        </Container>

        <Bg style={{ display: !toggleClose ? "block" : "none" }}>
          <Modal>
            <ModalContainer>
              <Form>
                <MdClose
                  onClick={this.ToggleClose}
                  style={{
                    fontSize: "25px",
                    color: "#cec2b8",
                    position: "absolute",
                    right: "60px",
                    top: "-40px",
                    cursor: "pointer"
                  }}
                />
                <ListContainer>
                  {place.length > 0 && (
                    <SelectList
                      onChangeItem={placeId => this.onChangeItem(placeId)}
                      listTitle={this.state.branch[this.state.placeId]}
                      dropLists={place}
                      open={this.state.open}
                      value={this.state.placeId}
                    />
                  )}
                  {promotion.length > 0 && (
                    <PromotionList
                      onChangeItem={promotionId =>
                        this.onChangePromotion(promotionId)
                      }
                      listTitle={
                        this.state.inquiry_type[this.state.promotionId]
                      }
                      dropLists={promotion}
                      open={this.state.open}
                      value={this.state.promotionId}
                    />
                  )}
                </ListContainer>
                <Title>
                  <input
                    onChange={this.handleInput}
                    name="title"
                    type="text"
                    placeholder="제목"
                    value={this.state.title}
                  />
                </Title>
                <Content>
                  <textarea
                    onChange={this.handleInput}
                    name="content"
                    placeholder="내용"
                    value={this.state.content}
                  ></textarea>
                </Content>

                <Button onClick={this.onSubmit}>수정</Button>
                <Delete onClick={this.onDelete}>삭제</Delete>
              </Form>
            </ModalContainer>
          </Modal>
        </Bg>
        {this.state.modify_show && (
          <Alert>
            <div>
              <p>수정 되었습니다.</p>
              <button onClick={this.alertClose}>확인</button>
            </div>
          </Alert>
        )}
        {this.state.delete_show && (
          <Alert>
            <div>
              <p>삭제 되었습니다.</p>
              <button onClick={this.alertClose}>확인</button>
            </div>
          </Alert>
        )}
      </>
    );
  }
}

const Container = styled.div`
  position: relative;
  top: 20px;
  width: 100%;
  height: 500px;
`;

const QnaTable = styled.div`
  position: absolute;
  width: 100%;
  top: 70px;

  h2 {
    margin-top: 10px;
    font-family: "Gotham-Light";
    font-weight: normal;
  }
`;

const Mid = styled.div`
  width: 100%;
  margin-top: 19px;
  padding: 10px 0;
  height: 350px;
  border-top: 1px solid #dbd6d2;
  border-bottom: 1px solid #dbd6d2;
  font-size: 12px;
  overflow: scroll;

  table {
    width: 100%;
    text-align: center;
    thead {
      tr {
        th {
          text-align: center;
          padding: 10px 0;
          font-weight: normal;
        }
      }
    }

    tbody {
      tr {
        cursor: pointer;
        td {
          background: #dcdcdc;
          padding: 10px 0;
        }
      }
    }
  }
`;

const Th1 = styled.th`
  width: 25%;
`;

const Th2 = styled.th`
  width: 25%;
`;

const Th3 = styled.th`
  width: 50%;
`;

const Td1 = styled.td`
  width: 25%;
`;

const Td2 = styled.td`
  width: 25%;
`;

const Td3 = styled.td`
  width: 50%;
`;

const Bg = styled.td`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(122, 122, 122, 0.5);
  z-index: 10;
  overflow: hidden;
`;

const Modal = styled.td`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  height: 650px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.td`
  width: 600px;
  height: 600px;
  border: 1px solid #cec2b8;
`;

const Form = styled.div`
  position: relative;
  margin-top: 60px;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const ListContainer = styled.div`
  width: 90%;

  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 90%;

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
    }
    &:focus {
      border-bottom: 1px solid #e7e3e2;
    }
  }
`;

const Content = styled.div`
  margin-top: 15px;
  width: 90%;
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
  font-size: 13px;
  text-align: center;
  position: relative;
  background: #a68164;
  color: #000;
  -webkit-transition: color 0.5s ease;
  transition: color 0.5s ease;
  cursor: pointer;

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

const Delete = styled(Button.withComponent("button"))`
  margin-left: 20px;
`;

const Alert = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(122, 122, 122, 0.5);
  z-index: 1000;
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
