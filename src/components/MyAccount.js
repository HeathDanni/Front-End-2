import React from 'react';
import { Card, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
      height: "300px",
      display: "flex",
      marginLeft: "25%",
      flexDirection: "column",
      marginBottom: "20px",
      backgroundColor: "#edf5ea",
    },
  
    cardText: {
      margin: "20px 3% 10px 10%",
      display: "flex",
      flexDirection: "column",
      fontSize: "20px"
    },
  
    buttonDiv: {
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
    },
  
    button: {
      marginTop: "5%",
      marginLeft: "75%",
      fontSize: "12px",
      width: "50px",
      height: "25px",
      backgroundColor: "#669966",
      "&:hover": {
        backgroundColor: "#6b7280",
      },
    },
  });

const MyAccount = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 className={classes.pageName}>My Account</h1>
            <Card className={classes.cards} variant="outlined">
                <div className={classes.cardText}>
                    <p>Username: this will be the username</p>
                    <p>Email: this will be the email</p>
                    <p>Password: this will be the password</p>
                    <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Edit
            </Button>
                </div>
            </Card>
        </div>
    )
};

export default MyAccount;