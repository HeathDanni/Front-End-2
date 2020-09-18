import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const Login = () => {
  const classes = useStyles();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    console.log(credentials);
    axios.post();
  };

  return (
    <div>
      <h1>Login Component</h1>
      <form onSubmit={login} className={classes.root}>
        <label>Username:</label>
        <TextField
          className={classes.textField}
          id="outlined-basic"
          label="Username"
          variant="outlined"
        />
        <label>Password:</label>
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button variant="contained" color="primary">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default Login;
