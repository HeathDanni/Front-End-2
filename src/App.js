import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { UserContext } from "./contexts/userContext";
import LoginContainer from "./components/LoginContainer";
import Navigation from "./components/Navigation";
import MyPlants from "./components/MyPlants";
import AddPlant from "./components/AddPlant";
import MyAccount from "./components/MyAccount";
import EditPlant from "./components/EditPlant";

function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/login">
            <LoginContainer />
          </Route>
          <PrivateRoute path="/myplants/edit/:plantId" component={EditPlant} />
          <PrivateRoute path="/myplants" component={MyPlants} />
          <PrivateRoute path="/addplant" component={AddPlant} />
          <PrivateRoute path="/myaccount" component={MyAccount} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
