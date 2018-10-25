import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../styles/LoginStyle";

import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/LockOutlined';
import { CssBaseline, Typography, FormControl, InputLabel } from '@material-ui/core';
import { Input, Button } from '@material-ui/core';

const SignInComponent = (props) => {
    const { classes } = props
    return(
        <React.Fragment>
        <CssBaseline />
        <Paper className={classes.root}>
            <Avatar>
                <LockIcon />
            </Avatar>
            <Typography variant="headline">
                Sign In
            </Typography>
            <FormControl fullWidth>
                <InputLabel htmlFor="component-simple">User Name</InputLabel>
                <Input id="username" name="username" value={props.username} onChange={props.handleOnChange} autoFocus/>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel htmlFor="password" >Password</InputLabel>
                <Input name="password" type="password" id="password" 
                    value= {props.password}
                    onChange={props.handleOnChange}
                />
            </FormControl>
            <FormControl fullWidth>
                <InputLabel htmlFor="link"><a href="/signup" >New User?</a></InputLabel>   
            </FormControl>
            <Button type="button" variant="raised" color="primary" className={classes.submit} onClick={props.checkLogin} fullWidth>
                LOGIN
            </Button>    
        </Paper>
        </React.Fragment>
    );
}

SignInComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignInComponent);