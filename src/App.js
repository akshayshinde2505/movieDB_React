import React, { Component } from "react";
import {Switch, Route, Redirect, Link} from "react-router-dom";
import "./App.css";
import {MuiThemeProvider} from "@material-ui/core/styles";
import appTheme from "./styles/appTheme";
import AppBarHorizontal from "./modules/common/AppBarHorizontal";
import FooterApp from "./modules/common/FooterApp";
import LoginContainer from "./modules/login/containers/LoginContainer";
import SignUpContainer from "./modules/signUp/containers/SignUpContainer";
// import HomeContainer from "./modules/common/HomeContainer";
import Constant from "./constants";
import MovieInfoContainer from "./modules/movieInfo/containers/MovieInfoContainer";
import MovieSummary from "./modules/movieInfo/components/MovieSummary";
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={appTheme}>
        <div>
          <AppBarHorizontal />
          <Switch>
            <PrivateRoute path="/movie" component={MovieInfoContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/signup" component={SignUpContainer} />        
          </Switch>
          <FooterApp />
        </div>
      </MuiThemeProvider>
    );
  }
}

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/admin">Show Movie</Link> 
    </div>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      localStorage.getItem(Constant.USER_LOGIN) ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { form: props.location}
        }} />
      )
  )} />
)

/** Authentication Function */
export const Authenticate = {

  signOut(cb) {
    localStorage.removeItem(Constant.AUTH_TOKEN);
    localStorage.removeItem(Constant.USER_LOGIN);
    setTimeout(cb, 100);
  }
}

export default App;
