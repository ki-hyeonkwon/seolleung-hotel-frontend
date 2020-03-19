import React, { Component } from "react";
import styled from "styled-components";

export default class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 1
    };
  }

  changeStage = num => {
    this.setState({
      stage: num
    });
  };

  render() {
    return (
      <Container>
        <Place>
          <p>경상북도 경주시 보문로 338 (신평동)</p>
          <p>054.748.2233</p>
        </Place>
        <Info>
          <div>
            <h4>Celebrate</h4>
            <ul>
              <li>
                <strong>Wedding</strong>
                <span>054.748.8234</span>
              </li>
              <li>
                <strong>meeting</strong>
                <span>02.2204.9600</span>
              </li>
            </ul>
          </div>
        </Info>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 20px;
  padding: 0 6.25%;
  box-sizing: border-box;
  overflow: scroll;
`;

const Place = styled.div`
  color: #756963;
  font-size: 14px;

  p {
    margin-top: 5px;
  }
`;

const Info = styled.div`
  margin-top: 30px;
  padding-top: 50px;
  border-top: 1px solid #f1eeee;

  div {
    display: flex;
    justify-content: flex-start;
    font-family: "MaisonNeue-Light";

    h4 {
      color: #756963;
      font-size: 16px;
      font-weight: normal;
      margin-right: 20%;
    }

    ul {
      width: 55%;

      li {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;

        &:first-child {
          margin-top: 0;
        }
        strong {
          font-size: 20px;
          font-weight: normal;
        }
        span {
        }
      }
    }
  }
`;
