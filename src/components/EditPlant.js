import React, {useState} from 'react';
import { Card, Button, TextField, MenuItem, InputLabel, Select} from "@material-ui/core";
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';

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
      height: "320px",
      display: "flex",
      marginLeft: "25%",
      flexDirection: "column",
      marginBottom: "20px",
      backgroundColor: "#edf5ea",
    },
  
    cardText: {
      margin: "20px 3% 10px 5%",
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

    label: {
        marginTop: "20px",
    }
  });

const EditPlant = () => {
    const classes = useStyles();

    const [formInput, setFormInput] = useState({
        type: "Plant type",
        nickname: "nickname",
        frequency: "water"
    });


    const handleChange = (e) => {
        
        setFormInput({
            ...formInput,
                [e.target.name] : e.target.value
        });
    };

    console.log(formInput)

    const upDate = (e) => {
      e.preventDefault()

      axios
        .post('https://reqres.in/api/users', formInput)
        .then((res) => {
          console.log('res:', res);
        })
        .catch((err) => {
          console.log('err:', err);
        });
    };

    return (
        <div className={classes.root}>
            <h1 className={classes.pageName}>Edit Plant</h1>
            <Card className={classes.cards} variant="outlined">
                <form className={classes.cardText} onSubmit={upDate}>
                    <TextField
                    className={classes.cardText}
                    id="type"
                    label="Plant Type"
                    variant="outlined"
                    name="type"
                    onChange={handleChange}
                    value={formInput.type}
                />
                <TextField
                    className={classes.cardText}
                    id="nickname"
                    label="Nickname"
                    variant="outlined"
                    name="nickname"
                    onChange={handleChange}
                    value={formInput.nickname}
                />


                <InputLabel id="label" className={classes.label} >Watering Frequency</InputLabel>

                    <Select 
                        labelId="label" 
                        id="select"
                        name="frequency"
                        value={formInput.frequency}
                        onChange={handleChange}>
                            <MenuItem value="Everday">Everyday</MenuItem>
                            <MenuItem value="Every 3 days">Every 3 days (recommended for most house plants)</MenuItem>
                            <MenuItem value="Once a week">Once a week</MenuItem>
                            <MenuItem value="Once a month">Once a month (recommended for cacti)</MenuItem>
                    </Select>

                    <Link to="/myplants"><Button
              variant="contained"
              color="primary"
              className={classes.button}
              type='submit'>
              Save
            </Button></Link>
                </form>
            </Card>
        </div>
    )
};

export default EditPlant;