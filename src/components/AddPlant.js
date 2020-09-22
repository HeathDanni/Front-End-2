import React, {useState, useEffect} from "react";
import { Card, TextField, MenuItem, InputLabel, Select, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from 'axios';
import * as yup from 'yup';

const useStyles = makeStyles({
    root: {
        display:'flex',
        flexDirection: 'column',
    },

    pageName : {
        marginLeft: "25%",
        color: "#6b7280"
        },

    card: {
        width: "50%",
        backgroundColor: "#edf5ea",
        marginTop: "2%",
        marginLeft: "25%",
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: "10px",
    },

    input: {
        marginBottom: '20px',
    },

    button: {
        width: "30%",
        marginTop: "20px",
        marginLeft: "68%",
        marginBottom: "2%",
        backgroundColor: "#669966",
        "&:hover": {
            backgroundColor: "#6b7280"
        }
    },

    errorStyle: {
        color: "red"
    }
});

const formSchema = yup.object().shape({
    type: yup.string().required('Please, include the type of your plant'),
    name: yup.string().required('Please, give this plant a nickname'),
    frequency: yup.string().required('How often will you need to water your plant?'),
})

const AddPlant = () => {
      
    const classes = useStyles();

    const [formData, setFormData] = useState({
        type: "",
        name: "",
        frequency: ""
    });

    const [errors, setErrors] = useState({
        type: "",
        name: "",
        frequency: ""
    });


    const validate = (e) => {
        yup.reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
            })
            .catch(err => {
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]
                })
            })
    };

    const [disableBtn, setDisableBtn] = useState(true);

    const changeHandler = (e) => {
        e.persist()
        validate(e)
        
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });

        console.log(formData.type.length);
        console.log(formData.name.length)
        console.log(formData.frequency.length)
};

    console.log(formData);


    const submitForm = (e) => {
        e.preventDefault();

        // axios
        //     .post('https://reqres.in/api/users', formData)
        //     .then(res => {console.log('res', res)
        //         })
        //     .catch(err => {console.log('err', err)})

        setFormData({
            type: "",
            name: "",
            frequency: ""
        })
    };


    return (

        <div className={classes.root}>
            <h1 className={classes.pageName}>Add a plant!</h1>
            <Card 
                variant="outlined"
                className={classes.card}
            >
                <form className={classes.form} onSubmit={submitForm}>

                    <TextField 
                        id="outlined-basic"
                        name="type"
                        label="Plant Type" 
                        variant="outlined" 
                        className={classes.form} 
                        onChange={changeHandler}
                        value={formData.type}/>

                {errors.type.length > 0 ? <p className={classes.errorStyle}>{errors.type}</p> : null} 

                    <TextField 
                        id="outlined-basic" 
                        name="name"
                        label="Plant Nickname" 
                        variant="outlined" 
                        className={classes.form}
                        onChange={changeHandler}
                        value={formData.name}/>

                {errors.name.length > 0 ? <p className={classes.errorStyle}>{errors.name}</p> : null} 

                    <InputLabel id="label" className={classes.form} >Watering Frequency</InputLabel>

                    <Select 
                        labelId="label" 
                        id="select"
                        name="frequency"
                        value={formData.frequency}
                        onChange={changeHandler}>
                            <MenuItem value="Everday">Everyday</MenuItem>
                            <MenuItem value="Every 3 days">Every 3 days (recommended for most house plants)</MenuItem>
                            <MenuItem value="Once a week">Once a week</MenuItem>
                            <MenuItem value="Once a month">Once a month (recommended for cacti)</MenuItem>
                    </Select>

                    {errors.frequency.length > 0 ? <p className={classes.errorStyle}>{errors.frequency}</p> : null} 

                    <Button 
                        type='submit'
                        variant="contained" 
                        color="primary"
                        className={classes.button}
                        >
                        Add Plant
                    </Button>

                </form>
            </Card>
        </div>
    )
};

export default AddPlant;