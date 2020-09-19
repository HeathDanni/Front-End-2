import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Card, Button, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },

  pageName: {
    marginLeft: "25%",
    color: "#6b7280",
  },

  cards: {
    width: "50%",
    display: "flex",
    marginLeft: "25%",
    flexDirection: "column",
    marginBottom: "20px",
  },
  textField: {
    marginBottom: "10px",
  },

  cardText: {
    margin: "20px",
    display: "flex",
    flexDirection: "column",
  },

  buttonDiv: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },

  button: {
    marginTop: "5%",
    marginBottom: "20px",
    fontSize: "12px",
    backgroundColor: "#669966",
    "&:hover": {
      backgroundColor: "#6b7280",
    },
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
      <h1 className={classes.pageName}>Log In</h1>
      <div className={classes.root}>
        <Card className={classes.cards} variant="outlined">
          <div className={classes.cardText}>
            <form onSubmit={login} className={classes.root}>
              <TextField
                className={classes.textField}
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />

              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Log In
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
