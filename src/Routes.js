import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "Pages/Main/Main";
import NavBar from "Component/Nav/NavBar";
import BookEnter from "./Pages/Book/BookEnter";
import Mypage from "Pages/Mypage/Mypage";
import Join from "Pages/Join/Join";
import Reservation from "Pages/Reservation/Reservation";
import Intro from "Pages/MembershipIntro/MembershipIntro";
import Login from "Pages/Login/Login";
import IdFind from "Pages/Login/IdFind";
import PwdFind from "Pages/Login/pwdFind";
import Contact from "Pages/Contact/Contact";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/nav" component={NavBar} />
          <Route exact path="/book" component={BookEnter} />
          <Route exact path="/reservation" component={Reservation} />
          <Route exact path="/" component={Main} />
          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/intro" component={Intro} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/idfind" component={IdFind} />
          <Route exact path="/pwdfind" component={PwdFind} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
