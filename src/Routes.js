import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "Pages/Main/Main";
import NavBar from "Component/Nav/NavBar";
import BookEnter from "./Pages/Book/BookEnter";
import Mypage from "Pages/Mypage/Mypage";
import Join from "Pages/Join/Join";
import JoinStep1 from "Pages/Join/JoinStep1";
import JoinStep2 from "Pages/Join/JoinStep2";
import JoinStep3 from "Pages/Join/JoinStep3";
import Contact from "Pages/Contact/Contact";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/nav" component={NavBar} />
          <Route exact path="/book" component={BookEnter} />
          <Route exact path="/" component={Main} />
          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/joinStep1" component={JoinStep1} />
          <Route exact path="/JoinStep2" component={JoinStep2} />
          <Route exact path="/JoinStep3" component={JoinStep3} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
