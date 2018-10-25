import React, { Component } from "react";
import SignUpComponent from "../components/SignUpComponent";
import Request from "../../../services/http-request";
import { Redirect } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import { MySnackbarContentWrapper } from "../../common/MySnackbarContent";

class SignUpContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            openSnackBar: false,
            snackBarMessage: "",
            snackBarType: "",
        }
    }
    
    handleOnChange = (event) => {
        // console.log(event.target.value + "  " + event.target.name);
        let key = event.target.name;
        this.setState({
            [key]: event.target.value
        });
    }

    addUserRegistration = () => {
        if(this.state.username === '' || this.state.password === '' 
            || this.state.firstName === '' || this.state.lastName === '') {
            this.setState({ 
                openSnackBar: true,
                snackBarMessage: "Fields are Empty !!!",
                snackBarType: "error",
            });
        }
        else
        {
            let data = {
                userName: this.state.username,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
            }
            Request.post(`/users/signup`, data)
            .then((response) => {
                console.log(response);
                this.setState({ 
                    openSnackBar: true,
                    snackBarMessage: "Account created Successfully !!!",
                    snackBarType: "success",
                });
                const { form } = this.props.location.state || { form : { pathname: "/movie"}};
                return(
                    <Redirect to={ form } /> 
                )
            })
            .catch((response) => {
                console.log(response);
                if(response.ok === false) {
                    this.setState({ 
                        openSnackBar: true,
                        snackBarMessage: "Something went Wrong...",
                        snackBarType: "error"
                    });
                }
            })
        }
    }

    handleCloseSnackBar = (event, reason) => {
        if(reason === 'clickaway') {
            return;
        }
        this.setState({
            openSnackBar: false,
            snackBarMessage: "",
        })
    }

    render() {
        return(
            <div>
            <SignUpComponent 
                username= {this.state.username}
                password= {this.state.password}
                firstName= {this.state.firstName}
                lastName= {this.state.lastName}
                handleOnChange= {this.handleOnChange}
                addUserRegistration= {this.addUserRegistration}
            />
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open= {this.state.openSnackBar}
                autoHideDuration={2000}
                onClose= {this.handleCloseSnackBar}
            >
                <MySnackbarContentWrapper 
                    onClose= {this.handleCloseSnackBar}
                    variant= {this.state.snackBarType}
                    message={this.state.snackBarMessage}
                />
            </Snackbar>
            </div>
        );
    }
};

export default SignUpContainer;