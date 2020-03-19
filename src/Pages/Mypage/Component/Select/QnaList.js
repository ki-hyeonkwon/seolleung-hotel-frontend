import React, { Component } from "react";
import SelectList from "Pages/Contact/Component/SelectList";
import Qna from "Pages/Contact/Component/Qna";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

export default class QnaList extends Component {
  constructor() {
    super();
    this.state = {
      toggleClose: true,
      posts: []
    };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data =>
        this.setState({
          posts: data
        })
      );
  }

  // getDate = date => {
  //   var year = date.getFullYear(); //yyyy
  //   var month = 1 + date.getMonth(); //M
  //   month = month >= 10 ? month : "0" + month; //month 두자리로 저장
  //   var day = date.getDate(); //d
  //   day = day >= 10 ? day : "0" + day; //day 두자리로 저장
  //   return year + "" + month + "" + day;

  //   date = new Date();
  // };

  ToggleClose = () => {
    this.setState({ toggleClose: !this.state.toggleClose });
  };

  render() {
    const { posts, toggleClose } = this.state;
    const postsList = posts.map(post => (
      <tr onClick={this.ToggleClose} key={post.id} id={post.id}>
        <Td1>2020.02.22</Td1>
        <Td2>{post.title}</Td2>
        <Td3>{post.body}</Td3>
      </tr>
    ));
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
                <tbody>{postsList}</tbody>
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
                  <input type="text" placeholder="제목" />
                </Title>
                <Content>
                  <textarea placeholder="내용"></textarea>
                </Content>

                <Button>수정</Button>
                <Delete>삭제</Delete>
              </Form>
            </ModalContainer>
          </Modal>
        </Bg>
      </>
    );
  }
}

const Container = styled.div`
position:relative;
top: 20px; 
width: 100%;
height: 500px;   
}
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
}
`;

const Th1 = styled.th`
width: 25%;
}
`;

const Th2 = styled.th`
width: 25%;
}
`;

const Th3 = styled.th`
width: 50%;
}
`;

const Td1 = styled.td`
width: 25%;
}
`;

const Td2 = styled.td`
width: 25%;
}
`;

const Td3 = styled.td`
width: 50%;
}
`;

const Bg = styled.td`
position: fixed;
left: 0;
top: 0;
width: 100vw;
height: 100vh;
background: rgba(122,122,122,0.5);
z-index: 1000;
overflow: hidden;
}
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

}
`;

const ModalContainer = styled.td`
width: 600px;
height: 600px;
border: 1px solid #cec2b8;

}
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
