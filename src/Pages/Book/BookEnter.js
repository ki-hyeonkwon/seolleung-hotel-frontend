import React, { Component } from "react";
import styled from "styled-components";
import BookTop from "Component/Book/BookTop.js";
import BookMain from "Component/Book/BookMain/BookMain.js";
import BookNav from "Component/Book/BookNav.js";
// import RoomMainvisual from "Component/Book/RoomMainVisual.js";

export default class BookEnter extends Component {
  render() {
    return (
      <BookEnterWrapper>
        <BookNav />
        <BookTop />
        <BookMain />
      </BookEnterWrapper>
    );
  }
}

const BookEnterWrapper = styled.div``;
