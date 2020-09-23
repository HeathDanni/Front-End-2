import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { UserContext } from "./contexts/userContext";
import LoginContainer from "./components/LoginContainer";
import Navigation from "./components/Navigation";
import MyPlants from "./components/MyPlants";
import AddPlant from "./components/AddPlant";
import MyAccount from "./components/MyAccount";
import EditPlant from "./components/EditPlant"
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
            <LoginContainer />
          </Route>
          <Route path="/myplants/edit/1">
            <EditPlant/>
          </Route>
          <PrivateRoute path="/myplants" component={MyPlants} />
          <PrivateRoute path="/addplant" component={AddPlant} />
          <PrivateRoute path="/myaccount" component={MyAccount} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
