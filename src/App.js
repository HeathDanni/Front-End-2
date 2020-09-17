import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import MyPlants from "./components/MyPlants";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Water My Plants</h1>
      </div>
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
