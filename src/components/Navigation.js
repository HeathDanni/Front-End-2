import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: "#000000",
    marginRight: "20px",
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button className={classes.button}>My Plants</Button>
          <Button className={classes.button}>Add Plant</Button>
          <Button className={classes.button}>My Account</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
