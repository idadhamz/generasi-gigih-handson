import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Trending from "./pages/trending";

const App = () => {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/trending">
            <Trending />
          </Route>
        </div>
      </Switch>
    </Router>
  );
};

export default App;
