import React, { Component } from "react";
// import {Switch, Route} from "react-router-dom";
import Request from "../../../services/http-request";
import MovieInfoComponent from "../components/MovieInfoComponent";

class MovieListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tileData: [],
        }
    }

    componentDidMount() {
        Request.get(`/movies`)
        .then((response) => {
            console.log(response);
            this.setState({
                tileData: response,
            });
        });
    }

    fetchMovie = (movieId) => {
        this.props.history.push(`/movie/${movieId}`)
    } 

    render() {
        return(
            <MovieInfoComponent 
                tileData= {this.state.tileData}
                fetchMovie= {this.fetchMovie}
            />
        );
    }
};

export default MovieListContainer;