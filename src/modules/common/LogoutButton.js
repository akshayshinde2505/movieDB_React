import React from "react";
import { withRouter } from "react-router-dom";
import Constant from "../../constants";
import Button from '@material-ui/core/Button';
import { Authenticate } from "../../App";

export const LogoutButton = withRouter(
    ({ history }) => 
      localStorage.getItem(Constant.USER_LOGIN) ? (
        <Button color="inherit" onClick={() => { Authenticate.signOut(()=> history.push("/login"))}} >
          Sign Out
        </Button>
      ) : (
        <Button color="inherit" href="/login">Login</Button>
      )
);