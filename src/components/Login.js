import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const Login = () => {
  const classes = useStyles();

  return (
    <div>
      <h1>Login Component</h1>
      <form className={classes.root}>
        <TextField
          className={classes.textField}
          id="outlined-basic"
          label="Username"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button variant="contained" color="primary">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default Login;
