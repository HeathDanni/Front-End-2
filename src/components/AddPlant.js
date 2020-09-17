import React from "react";
import { Card, TextField, MenuItem, InputLabel, Select, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display:'flex',
        flexDirection: 'column',
        marginLeft: "20%",
    },

    card: {
        width: "75%",
        height: "300px"
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: "10px"
    },
    input: {
        marginBottom: '20px',
    },

    button: {
        width: "30%",
        marginTop: "20px",
        marginLeft: "68%"
    }
});

const AddPlant = () => {
      
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h2>Add a plant!</h2>
            <Card 
            variant="outlined"
            className={classes.card}
            >
                <form className={classes.form}>
                    <TextField id="outlined-basic" label="Plant Type" variant="outlined" className={classes.form}/>
                    <TextField id="outlined-basic" label="Plant Nickname" variant="outlined" className={classes.form}/>
                    <InputLabel id="label" className={classes.form} >Watering Frequency</InputLabel>
                    <Select labelId="label" id="select" value="Every 3 days">
                        <MenuItem value="Everyday">Everyday</MenuItem>
                        <MenuItem value="3">Every 3 days (recommended for most house plants)</MenuItem>
                        <MenuItem value="7">Once a week</MenuItem>
                        <MenuItem value="30">Once a month (recommended for cacti)</MenuItem>
                    </Select>
                    <Button 
                    variant="contained" 
                    color="primary"
                    className={classes.button}>
                    Add Plant
                    </Button>
                </form>
            </Card>
        </div>
    )
};

export default AddPlant;