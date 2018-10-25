import React from "react";

import { styles } from "../styles/SignUpStyles";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Paper, Typography, FormControl, InputLabel } from '@material-ui/core';
import { Input, Button } from '@material-ui/core';

const SignUpComponent = (props) => {
    
    const { classes } = props;
    return(
        <React.Fragment>
            <CssBaseline />
            <Paper className={classes.root}>
                <Typography variant="headline" >
                    Account Sign UP
                </Typography>
                <FormControl fullWidth>
                    <InputLabel htmlFor="component-simple">First Name</InputLabel>
                    <Input id="firstName" name="firstName" value={props.firstName} onChange={props.handleOnChange} autoFocus/>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="component-simple">Last Name</InputLabel>
                    <Input id="lastName" name="lastName" value={props.lastName} onChange={props.handleOnChange}/>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="component-simple">User Name</InputLabel>
                    <Input id="username" name="username" value={props.username} onChange={props.handleOnChange}/>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="password" >Password</InputLabel>
                    <Input name="password" type="password" id="password" 
                        value= {props.password}
                        onChange={props.handleOnChange}
                    />
                </FormControl>
                <Button type="button" variant="raised" color="primary" className={classes.submit} onClick={props.addUserRegistration} fullWidth>
                    Create Account
                </Button>
            </Paper>
        </React.Fragment>
    )
};

SignUpComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUpComponent);