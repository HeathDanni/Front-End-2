import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
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
    marginBottom: "10px",
    fontSize: "12px",
    backgroundColor: "#669966",
    "&:hover": {
      backgroundColor: "#6b7280",
    },
  },
});

const Register = () => {
  const classes = useStyles();
  const history = useHistory();
  const { user, setUser } = useState({
    username: "",
    password: "",
  });

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const register = (e) => {
    e.preventDefault();
    console.log(credentials);
    console.log("Starting POST request");
    axios
      .post(
        "https://secret-family-recipe-backend.herokuapp.com/api/auth/register",
        credentials
      )
      .then((res) => {
        console.log("Successful POST request");
        history.push("/login");
      })
      .catch((err) => {
        console.log("Unsuccessful POST request");
        console.error(err);
      });
  };

  return (
    <div>
      <h1 className={classes.pageName}>Register</h1>
      <div className={classes.root}>
        <Card className={classes.cards} variant="outlined">
          <div className={classes.cardText}>
            <form onSubmit={register} className={classes.root}>
              <TextField
                className={classes.textField}
                id="username"
                label="Username"
                variant="outlined"
                name="username"
                onChange={handleChange}
              />

              <TextField
                id="password"
                label="Password"
                variant="outlined"
                name="password"
                type="password"
                onChange={handleChange}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
              >
                Create My Account
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Register;
