import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Main from "Pages/Main/Main";
import CheckIn from "Pages/CheckIn/CheckIn.js";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>{/* <Route exact path="/" component={Main} /> */}</Switch>
        <Switch>
          <Route exact path="/" component={CheckIn} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
