import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "Pages/Main/Main";
import NavBar from "Component/Nav/NavBar";
import BookEnter from "./Pages/Book/BookEnter";
import Mypage from "Pages/Mypage/Mypage";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/nav" component={NavBar} />
          <Route exact path="/book" component={BookEnter} />
          <Route exact path="/" component={Main} />
          <Route exact path="/mypage" component={Mypage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
