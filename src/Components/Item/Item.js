import React, { Component } from "react";
import styled, { css } from "styled-components";

export default class Item extends Component {
  render() {
    //this.props.data && console.log("kk", this.props.data);
    return (
      <ItemContainer even={this.props.even}>
        <ItemImg>
          <img src={this.props.data.thumnail} alt="상품이미지" />
        </ItemImg>
        <ItemTxt>
          <div className="DateRow">
            <span>{this.props.data.year}</span>
            <span>{this.props.data.detail}</span>
          </div>
          <h2>{this.props.data.title}</h2>
          <p>{this.props.data.place}</p>
          <button>View more</button>
        </ItemTxt>
      </ItemContainer>
    );
  }
}

const ItemTxt = styled.div`
  padding: 40px 40px 30px 40px;
  font-size: 14px;
  text-align: left;
  background-color: #fff;

  div {
    span {
      &:nth-child(1) {
        margin-right: 29px;
      }
    }
  }

  h2 {
    margin-top: 20px;
    font-size: 24px;
    line-height: 1.5;
    min-height: 140px;
    font-weight: normal;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
  }

  button {
    position: relative;
    margin-top: 10px;
    color: #a68164;
    border: none;
    font-size: 14px;

    &:after {
      content: "";
      left: 0;
      position: absolute;
      bottom: -3px;
      background: #a68164;
      height: 1px;
      width: 0;
      -webkit-transition: width 0.3s;
      transition: width 0.3s;
    }
  }
`;

const ItemImg = styled.div`
  height: 300px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

const ItemContainer = styled.div`
  width: 440px;
  height: auto;
  margin-bottom: 100px;
  border: solid 1px #a68164;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.7s;
  transition: all 0.7s;
  cursor: pointer;
  background: #fff;
  overflow: hidden;
  ${props => {
    if (props.even) {
      return css`
        float: left;
      `;
    } else {
      return css`
        float: right;
        margin-top: 100px;
      `;
    }
  }}

  &:hover {
    -webkit-transform: translate(0, -12px) !important;
    transform: translate(0, -12px) !important;
    -webkit-box-shadow: 25px 25px 25px 5px #0000002e;
    box-shadow: 25px 25px 25px 5px #0000002e;
  }

  &:hover > ${ItemTxt} > button:after {
    width: 100%;
  }

  &:hover > ${ItemTxt} > h2 {
    color: #a68164;
  }

  &:hover > ${ItemImg} > img {
    transform: scale(1.1);
    transition: transform 4s;
  }
`;
