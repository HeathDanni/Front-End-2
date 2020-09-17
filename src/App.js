import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import MyPlants from "./components/MyPlants";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
        <Route path="/myplants">
          <MyPlants />
        </Route>
    </Router>
  );
}

export default App;
