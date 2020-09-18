import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    root: {
      display: "flex",
    },
  });

const RegisterForm = () => {
    const classes = useStyles();

    return (
        <div>
            <h1>Register User Form</h1>
            <form className={classes.root}>
                <label>Username:</label>
                <TextField
                    className={classes.root}
                    id= 'outlined-basic'
                    label='Username'
                    variant='outlined'
                />
                <label>Password:</label>
                <TextField id='outlined-basic' label='password' variant='outlined'/>
                <Button variant='contained' color='primary'>Create User</Button>
            </form>
        </div>
    );
};

export default RegisterForm;