import React, { Component } from "react";
import Calendar from "./Calendar";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

export default class ReserveList extends Component {
  constructor() {
    super();
    this.state = {
      toggleClose: true
    };
  }

  ToggleClose = () => {
    this.setState({ toggleClose: !this.state.toggleClose });
  };

  render() {
    return (
      <>
        <Container>
          <Calendar />
          <ReserveTable>
            <Mid>
              <table>
                <thead>
                  <tr>
                    <th>날짜</th>
                    <th>지점</th>
                    <th>인원</th>
                    <th>룸</th>
                  </tr>
                </thead>
                <tbody>
                  <tr onClick={this.ToggleClose}>
                    <td>2020.02.23</td>
                    <td>포항</td>
                    <td>2</td>
                    <td>standard</td>
                  </tr>
                </tbody>
              </table>
            </Mid>
          </ReserveTable>
        </Container>
        <Bg style={{ display: !this.state.toggleClose ? "block" : "none" }}>
          <Modal>
            <Form>
              <MdClose
                onClick={this.ToggleClose}
                style={{
                  fontSize: "25px",
                  color: "#cec2b8",
                  position: "absolute",
                  right: "20px",
                  top: "20px",
                  cursor: "pointer"
                }}
              />
              <LayerHeader>
                <h3>예약 상세 내역</h3>
                <p>
                  포인트 적립이 누락된 결제 건에 대하여 요청 하실 수 있습니다.
                  <br />
                  <span>3개월 이내</span>에 이용하신 내역에 한하여 영수증 사본을
                  첨부해 주시면 검토
                  <br />후 포인트가 적립됩니다. 첨부 파일에
                  <span>영수증 사본을 첨부</span>하여 주시기
                  <br />
                  바랍니다.
                </p>
              </LayerHeader>
              <LayerBody>
                <input
                  type="file"
                  placeholder="첨부파일 (jpg, png/10mb 이하)"
                />

                <textarea placeholder="요청 사항 (선택)"></textarea>
              </LayerBody>
              <Button>취소 요청</Button>
            </Form>
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

const ReserveTable = styled.div`
position: absolute;
  width: 100%;
  top: 80px;
  

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
    

    table {
        width: 100%;
        text-align: center;
        thead {
            tr {
                
                th {
                    width: 25%;
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
width: 470px;
height: 570px;
background: #fff;
display: flex;
align-items: center;
justify-content: center;

}
`;

const Form = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 40px;
  width: 100%;
  height: 100%;
`;

const LayerHeader = styled.td`
margin-top: 40px;
 h3 {
     font-weight: 400;
    font-size: 28px;  
 }

 p {
     font-size: 13px;
     line-height: 1.7;
     margin-top: 20px;

     span {
        color: #826d67;
     }
 }
}
`;

const LayerBody = styled.td`
margin-top: 40px;
    input {
        padding: 10px 0;
        width: 100%;
        border : none;
        border-bottom: 1px solid #dbd6d2;
        font-size: 14px;
        &::placeholder {
            color: #1d212a;
        }
    }

    textarea {
        margin-top: 30px;
        width: 100%;
        height: 60px;
        border : none;
        border-bottom: 1px solid #dbd6d2;
        resize: none;
        font-size: 14px;
        &::placeholder {
            color: #1d212a;
        }

    }

}
`;

const Button = styled.button`
  display: inline-block;
  margin-top: 80px;
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
