import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import AddPlant from "./components/AddPlant";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <Switch>
        <Route path="/addplant">
          <AddPlant />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
