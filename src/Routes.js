import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Main from "Pages/Main/Main";
import NavBar from "Component/Nav/NavBar";
import BookEnter from "./Pages/Book/BookEnter";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>{/* <Route exact path="/" component={Main} /> */}</Switch>
        <Switch>{<Route exact path="/nav" component={NavBar} />}</Switch>
        <Switch>{<Route exact path="/book" component={BookEnter} />}</Switch>
      </Router>
    );
  }
}

export default Routes;
