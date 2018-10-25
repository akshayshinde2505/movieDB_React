import React from "react";
import { MySnackbarContentWrapper } from "./MySnackbarContent";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles2 = theme => ({
    margin: {
      //margin: theme.spacing.unit,
    },
  });

  class CustomizedSnackbars extends React.Component {
    state = {
      open: false,
    };
  
    handleClick = () => {
      this.setState({ open: true });
    };
  
    handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      this.setState({ open: false });
    };
  
    render() {
      const { classes } = this.props;
  
      return (
        <div>
          <Button className={classes.margin} onClick={this.handleClick}>
            Open success snackbar
          </Button>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={this.state.open}
            autoHideDuration={2000}
            onClose={this.handleClose}
          >
            <MySnackbarContentWrapper
              onClose={this.handleClose}
              variant="success"
              message="This is a success message!"
            />
          </Snackbar>
          {/* <MySnackbarContentWrapper
            variant="error"
            className={classes.margin}
            message="This is an error message!"
          />
          <MySnackbarContentWrapper
            variant="warning"
            className={classes.margin}
            message="This is a warning message!"
          />
          <MySnackbarContentWrapper
            variant="info"
            className={classes.margin}
            message="This is an information message!"
          />
          <MySnackbarContentWrapper
            variant="success"
            className={classes.margin}
            message="This is a success message!"
          /> */}
        </div>
      );
    }
}
  
CustomizedSnackbars.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles2)(CustomizedSnackbars);  