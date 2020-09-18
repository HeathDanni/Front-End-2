import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "./logo.png";
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
  },
  logo: {
    width: "75px",
    marginTop: "10px",
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: "#6b7280",
    marginRight: "20px",
    "&:hover": {
      backgroundColor: "#EDF5EA",
      color: "#374151",
    },
  },
  link: {
    textDecoration:'none'
  }
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src={logo} className={classes.logo} alt="Logo" />
          </Typography>

          <Link to="/myplants" className={classes.link}><Button className={classes.button}>My Plants</Button></Link>
          <Link to="/addplant" className={classes.link}><Button className={classes.button}>Add Plant</Button></Link>
          <Link to="#" className={classes.link}><Button className={classes.button}>My Account</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
