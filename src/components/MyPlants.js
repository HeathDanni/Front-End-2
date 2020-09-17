import React from 'react';
import {Card, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display:"flex",
        flexDirection: "column",
    },

    pageName : {
        marginLeft: "25%",
        color: "#6b7280"
        },

    cards: {
        width: "50%",
        height: "200px",
        display: "flex",
        marginLeft: "25%",
        flexDirection: "column",
        marginBottom: "20px",
        backgroundColor: "#edf5ea"
    },

    cardText: {
        margin: "20px 3% 10px 10%",
        display: "flex",
        flexDirection: "column",

    },

    buttonDiv: {
        display: "flex",
        justifyContent: "flex-end",
        width: "100%"
    },
    
    button: {
        marginTop: "15px",
        marginLeft: "20px",
        fontSize: "12px",
        width: "50px",
        height: "25px",
        backgroundColor: "#669966"
    }
});

const MyPlants = () => {

    const classes = useStyles();


    const PlantCard = () => {
        return (
         <Card
            className={classes.cards}
            variant="outlined"
            >
                <div className={classes.cardText}>
                    <h3>Plant Type</h3>
                    <span>Nickname: gets from input</span><br></br>
                    <span>Watering frequency: gets from input</span>
                    <div className={classes.buttonDiv}>
                        <Button variant="contained" 
                        color="primary"
                        className={classes.button}
                        >
                            Edit</Button>
                        <Button variant="contained" 
                        color="primary"
                        className={classes.button}>
                            Remove</Button>
                    </div>
                </div>
            </Card>
        )};

 return (
       <div
        className={classes.root}
       >
           <h1 className={classes.pageName}>My Plants</h1>
            <PlantCard/>
            <PlantCard/>
            <PlantCard/>
       </div>
   );
};

export default MyPlants;