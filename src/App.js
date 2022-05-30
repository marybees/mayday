import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/registry">
            <Registry />
          </Route>
          <Route path="/directions">
            <Directions />
          </Route>
          <Route path="/rsvp">
            <Rsvp />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
