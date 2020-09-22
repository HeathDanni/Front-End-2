import React, {useState} from 'react';
import { Card, Button, TextField } from "@material-ui/core";
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

    const [formInput, setFormInput] = useState({
        username: "Heather",
        password: "****",
        phoneNumber: "555-5555"
    });

    const handleChange = (e) => {
        
        setFormInput({
            ...formInput,
                [e.target.name] : e.target.value
        });
    };

    return (
        <div className={classes.root}>
            <h1 className={classes.pageName}>My Account</h1>
            <Card className={classes.cards} variant="outlined">
                <form className={classes.cardText}>
                    <TextField
                    id="username"
                    label="Username"
                    variant="outlined"
                    name="username"
                    onChange={handleChange}
                    disabled="true"
                    value={formInput.username}
                />
                <TextField
                    className={classes.textField}
                    id="phoneNumber"
                    label="Phone Number"
                    variant="outlined"
                    name="phoneNumber"
                    onChange={handleChange}
                    value={formInput.phoneNumber}
                />

                <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={formInput.password}
                />
                    <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Edit
            </Button>
                </form>
            </Card>
        </div>
    )
};

export default MyAccount;