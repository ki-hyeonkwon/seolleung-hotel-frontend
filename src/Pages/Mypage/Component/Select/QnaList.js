import React, { Component } from "react";
import SelectList from "Pages/Contact/Component/SelectList";
// import Qna from "Pages/Contact/Component/Qna";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import { address } from "Config/config";

export default class QnaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleClose: true,
      posts: [],
      place: [],
      promotion: [],
      placeId: "",
      promotionId: "",
      placeName: "",
      promotionName: "",
      user: [],
      title: "",
      content: "",
      id: "",
      item: "",
      open: false
    };
  }

  getPlace = () => {
    fetch(`${address}/users/branch`)
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
    fetch(`${address}/users/inquiry-type`)
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
    fetch(`${address}/users/inquiry`, {
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50IjoibWluamkxNDEyIn0.fd-R3LxjSZHw9mz5VrBAFCfeY6l1AZk6Gts31kdqmQQ"
      }
    })
      .then(res => res.json())
      .then(res =>
        this.setState(
          {
            user: res.data
          },
          () => console.log("qna", res[0])
        )
      );
  };

  onSubmit = () => {
    fetch(`${address}/users/inquiry-edit`, {
      method: "post",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50IjoibWluamkxNDEyIn0.fd-R3LxjSZHw9mz5VrBAFCfeY6l1AZk6Gts31kdqmQQ"
      },
      body: JSON.stringify({
        id: this.state.id,
        title: this.state.title,
        content: this.state.content,
        branch: this.state.selectPlace,
        inquiry_type: this.state.selectPromotion
      })
    })
      // .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.error(error);
      });
    // 에러나면 알려주는 거
  };

  onDelete = () => {
    fetch(`${address}/users/inquiry`, {
      method: "delete",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50IjoibWluamkxNDEyIn0.fd-R3LxjSZHw9mz5VrBAFCfeY6l1AZk6Gts31kdqmQQ"
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
              toggleClose: true
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

  componentDidMount() {
    this.getPlace();
    this.getPromotion();
    this.test();
  }

  onChangeItem = (selectId, selectName) => {
    this.setState(
      {
        placeId: selectId,
        promotionId: selectId,
        placeName: selectName,
        promotionName: selectName,
        open: !this.state.open
      },
      () => {
        console.log("selectid", selectId.target);
      }
    );
    // setItem(e.target.innerText);
    // setOpen(!open);
    // console.log(e.target.innerText);
    // props.onChangeItem(e.target.innerText);
  };

  openList = e => {};

  ToggleClose = (title, content, id) => {
    this.setState({
      toggleClose: !this.state.toggleClose,
      title: title,
      content: content,
      id: id
    });
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { toggleClose, place, promotion, user } = this.state;

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
                  {user.map(user => {
                    return (
                      <tr
                        onClick={() =>
                          this.ToggleClose(user.title, user.content, user.id)
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
                  <SelectList
                    onChangeItem={(placeId, placeName) =>
                      this.onChangeItem(placeId, placeName)
                    }
                    listTitle="지점"
                    dropLists={place}
                    open={this.state.open}
                    value={this.state.placeName}
                  />
                  <SelectList
                    onChangeItem={(promotionId, promotionName) =>
                      this.onChangeItem(promotionId, promotionName)
                    }
                    listTitle="문의 유형"
                    dropLists={promotion}
                    open={this.state.open}
                    value={this.state.promotionName}
                  />
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
  z-index: 1000;
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
