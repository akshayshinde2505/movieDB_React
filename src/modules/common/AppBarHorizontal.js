import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import { Link } from 'react-router-dom';
// import Constant from "../../constants";
import { LogoutButton } from './LogoutButton';

const styles = {
    root: {
        flexGrow: 1,
    },
    glow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}

class AppBarHorizontal extends React.Component {
    render() {
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.glow}>
                            MOVIE DB
                        </Typography>
                        <LogoutButton />
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

AppBarHorizontal.propTypes = {
    classes: PropTypes.object.isRequired,
};
// onClick={() => {this.props.history.push('./movie')}}
export default withStyles(styles)(AppBarHorizontal);