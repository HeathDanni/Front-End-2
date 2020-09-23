import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          console.log("We found the token: " + localStorage.getItem("token"));
          return <Component {...props} />;
        } else {
          console.log("We didnt get a token");
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
