import React, { Component } from "react";
import {Switch, Route} from "react-router-dom";
import MovieListContainer from "../containers/MovieListContainer";
// import MovieSummary from "../components/MovieSummary";
import MovieSummaryContainer from "./MovieSummaryContainer";

class MovieInfoContainer extends Component {
    render() {
        return(
            <Switch>
                <Route exact path="/movie" component={MovieListContainer} />
                <Route exact path="/movie/:id" component={MovieSummaryContainer} />
            </Switch>
        );
    }
};

export default MovieInfoContainer;