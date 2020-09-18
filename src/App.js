import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "./contexts/userContext";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import MyPlants from "./components/MyPlants";
import AddPlant from "./components/AddPlant";

function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/myplants">
            <MyPlants />
          </Route>
          <Route path="/addplant">
            <AddPlant />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
