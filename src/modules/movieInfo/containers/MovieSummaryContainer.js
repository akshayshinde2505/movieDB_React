import React from "react";
import Request from "../../../services/http-request";
import MovieSummary from "../components/MovieSummary";

class MovieSummaryContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movieID : props.match.params.id,
            movieData: [],
        }
    }

    componentDidMount() {
        Request.get(`/movies/${this.state.movieID}`)
        .then((response) => {
            console.log(response);
            this.setState({
                movieData: response,
            });
        })
    }
    render() {

        return(
            <MovieSummary
                movieID= {this.state.movieID}
                movieData= {this.state.movieData}
            />
        )
    }
};

export default MovieSummaryContainer;