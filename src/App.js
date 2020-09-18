import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import RegisterForm from './components/RegisterForm';
function App() {
  return (
    <Router>
      <div className="App">
        <h1>Water My Plants</h1>
      </div>
      <Switch>
        <Route path="/login">
          <Login />
          <RegisterForm/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
