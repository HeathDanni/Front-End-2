import React from 'react';
import "../App.css";
import {Card} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display:"flex",
        flexDirection: "column",
        marginLeft: "30%",
    },
    cards: {
        width: "60%",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px"
    },
    cardText: {
        marginLeft: "50px",
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",

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
                </div>
            </Card>
        )};

 return (
       <div
        className={classes.root}
       >
           <h2>My Plants</h2>
            <PlantCard/>
            <PlantCard/>
            <PlantCard/>
       </div>
   );
};

export default MyPlants;