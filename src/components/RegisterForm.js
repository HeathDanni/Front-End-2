import React from "react";
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

const RegisterForm = () => {
  const classes = useStyles();

  const handleSubmit = () => {
    console.log("submitting");
  };
  return (
    <div>
      <h1 className={classes.pageName}>Register</h1>
      <div className={classes.root}>
        <Card className={classes.cards} variant="outlined">
          <div className={classes.cardText}>
            <form onSubmit={handleSubmit} className={classes.root}>
              <TextField
                className={classes.textField}
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                id="outlined-basic"
                label="Phone Number"
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
                Create My Account
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RegisterForm;
