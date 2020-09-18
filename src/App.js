import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { UserContext } from "./contexts/userContext";
import Login from "./components/Login";
import RegisterForm from "./components/RegisterForm";
import Navigation from "./components/Navigation";
import MyPlants from "./components/MyPlants";
import AddPlant from "./components/AddPlant";
import { axiosWithAuth } from "./utils/axiosWithAuth";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/login">
            <Login />
            <RegisterForm />
          </Route>
          <PrivateRoute path="/myplants">
            <MyPlants />
          </PrivateRoute>
          <PrivateRoute path="/addplant">
            <AddPlant />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
