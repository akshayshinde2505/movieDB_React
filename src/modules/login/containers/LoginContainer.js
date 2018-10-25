import React, { Component } from "react";
import SignInComponent from "../components/SignInComponent";
import Request from "../../../services/http-request";
import Constants from "../../../constants";
import {
    Redirect
} from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import { MySnackbarContentWrapper } from "../../common/MySnackbarContent";


class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            redirectToReferrer: false,
            openSnackBar: false,
            snackBarMessage: "",
            snackBarType: "",
        };
    }

    handleOnChange = (event) => {
        // console.log(event.target.value + "  " + event.target.name);
        let key = event.target.name;
        this.setState({
            [key]: event.target.value
        });
    }

    checkLogin = () =>{
        if(this.state.username === '' || this.state.password === '') {
            this.setState({ 
                openSnackBar: true,
                snackBarMessage: "Fields are Empty !!!",
                snackBarType: "error",
            });
        } else {
            let data = {
                username: this.state.username,
                password: this.state.password
            }

            Request.post(`/users/login`, data)
            .then((response) => {
                console.log(response)
                console.log("Token = "+response.accessToken);
                localStorage.setItem(Constants.AUTH_TOKEN, response.accessToken);
                localStorage.setItem(Constants.USER_LOGIN, true);
                this.setState({ 
                    redirectToReferrer: true,
                    openSnackBar: true,
                    snackBarMessage: "Login Successfully !!!",
                    snackBarType: "success",
                });
            })
            .catch((response) => {
                console.log(response);
                if(response.ok === false) {
                    this.setState({ 
                        openSnackBar: true,
                        snackBarMessage: "Username or Password Invalid.",
                        snackBarType: "error"
                    });
                }
            });
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
        const { form } = this.props.location.state || { form : { pathname: '/movie'}};
        const { redirectToReferrer } = this.state;

        if(redirectToReferrer) {
            return(
                <Redirect to={form} />
            )
        }

        return(
            <div>
            <SignInComponent 
                username= {this.state.username}
                password= {this.state.password}
                handleOnChange= {this.handleOnChange}
                checkLogin= {this.checkLogin}
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

export default LoginContainer;