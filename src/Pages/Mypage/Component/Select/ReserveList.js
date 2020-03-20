import React, { Component } from "react";
import Calendar from "./Calendar";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

export default class ReserveList extends Component {
  constructor() {
    super();
    this.state = {
      toggleClose: true,
      reserve: [],
      name: "",
      price: "",
      checkIn: "",
      stayNights: "",
      adult: "",
      userId: ""
    };
  }

  ToggleClose = (name, price, checkIn, stayNights, adult, userId) => {
    this.setState({
      toggleClose: !this.state.toggleClose,
      name: name,
      price: price,
      checkIn: checkIn,
      stayNights: stayNights,
      adult: adult,
      userId: userId
    });
  };

  reserveList = () => {
    fetch("http://52.79.185.94:8000/reservation", {
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImtheTEyMzRAZ21haWwuY29tIn0.kNDcEe5QCzZ4fC5gFI5ndz7l3_5OqGuy1kBxmWRaEpw"
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            reserve: res.reservation_list
            // promotion: res.
          },
          () => {
            console.log("listttttt", res.reservation_list);
          }
        );
      });
  };

  componentDidMount() {
    this.reserveList();
  }

  onDelete = () => {
    fetch(
      `http://52.79.185.94:8000/reservation/${this.state.reserve.reservation_code}`,
      {
        method: "delete",
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImtheTEyMzRAZ21haWwuY29tIn0.kNDcEe5QCzZ4fC5gFI5ndz7l3_5OqGuy1kBxmWRaEpw"
        }
      }
    )
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          this.setState({
            toggleClose: true
          });
          this.reserveList();
        }
      })
      .catch(error => {
        console.error(error);
      });
    // 에러나면 알려주는 거
  };
  render() {
    const { toggleClose, reserve } = this.state;

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
                    <th>객실 정보</th>
                  </tr>
                </thead>
                <tbody>
                  {reserve.map(reserve => {
                    return (
                      <tr
                        onClick={() =>
                          this.ToggleClose(
                            reserve.room_name,
                            reserve.price,
                            reserve.check_in,
                            reserve.stay_nights,
                            reserve.adult,
                            reserve.user_id
                          )
                        }
                      >
                        <td>{reserve.check_in}</td>
                        <td>포항</td>
                        <td>{reserve.adult}</td>
                        <td>{reserve.room_name}</td>
                      </tr>
                    );
                  })}
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
                <ul>
                  <li>
                    <h4>객실 정보</h4>
                    <p>{this.state.name}</p>
                  </li>
                  <li>
                    <h4>체크인 날짜</h4>
                    <p>{this.state.checkIn}</p>
                  </li>
                  <li>
                    <h4>숙박 일수</h4>
                    <p>
                      {this.state.stayNights} 박 {this.state.stayNights + 1} 일
                    </p>
                  </li>
                  <li>
                    <h4>예약 내역</h4>
                    <p>객실수 : 1</p>
                    <p>성인 : {this.state.adult}</p>
                    <p>아동 : 1</p>
                  </li>
                </ul>
              </LayerHeader>
              <LayerBody>
                <p>객실료</p>
                <p>₩{Math.floor(this.state.price)}</p>
              </LayerBody>
              <Button onClick={this.onDelete}>취소 요청</Button>
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
height: 670px;
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
  padding: 50px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const LayerHeader = styled.div`
margin-top: 40px;
 h3 {
     font-weight: 400;
    font-size: 28px;  
 }

 ul {
   margin-top: 80px;
   li {
     h4 {
       display: inline;
       font-size: 20px;
       font-weight: normal;
       border-bottom: 1px solid #cec2b8;
      
     }

     p {
      margin: 20px 0;
      text-align: right;
     }

     &:last-child {
       p {
       margin: 10px 0;
       }
      }
   }
 }
 
}
`;

const LayerBody = styled.div`
border-top: 1px solid #cec2b8;
margin: 60px 0;
padding: 20px 0;
text-align: right;

}
`;

const Button = styled.button`
  display: inline-block;
  width: 160px;
  padding: 10px 0;
  font-size: 13px;
  text-align: center;
  position: relative;
  position: absolute;
  background: #a68164;
  color: #000;
  -webkit-transition: color 0.5s ease;
  transition: color 0.5s ease;
  border: none;
  cursor: pointer;
  right: 50px;
  bottom: -85px;
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
