import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Avatar, GridList, GridListTile } from "@material-ui/core";
import AlarmIcon from "@material-ui/icons/Alarm";
import ScheduleIcon from "@material-ui/icons/Schedule";
import StarIcon from "@material-ui/icons/Star";

const styles = theme => ({
    root: {
    //   ...theme.mixins.gutters(),
    //   paddingTop: theme.spacing.unit * 2,
    //     paddingBottom: theme.spacing.unit * 2,
    //     // width: 'auto',
    //     // display: 'block', // Fix IE11 issue.
    //     marginLeft: theme.spacing.unit * 3,
    //     marginRight: theme.spacing.unit * 3,
    //     [theme.breakpoints.up(500 + theme.spacing.unit * 3 * 2)]: {
    //         width: 900,
    //         marginLeft: 'auto',
    //         marginRight: 'auto',
    //       },
    },
    gridList: {
        // width: 1020,
        // height: 580,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        // transform: 'translateZ(0)',
      },
  });

const MovieSummary = (props) => {
    const { classes } = props;

    return(
        <div className={classes.root}>
            <GridList cellHeight={620} spacing={2} className={classes.root}>
                <GridListTile cols={1} rows={1}>
                    <img src={props.movieData.poster} alt="Movie"/>
                </GridListTile> 
                <GridListTile cols={1} rows={1}>
                    <Paper className={classes.root} elevation={1}>
                        <Typography variant="title" component="h3">
                            Name : {props.movieData.title} ({props.movieData.year})
                        </Typography>
                        <tr>
                            <td>
                                <Avatar>
                                    <StarIcon />
                                </Avatar>
                                {props.movieData.rated}
                            </td>
                            <td>
                                <Avatar>
                                    <ScheduleIcon />
                                </Avatar>
                                {props.movieData.runtime}
                            </td>
                        </tr>
                         <br />
                        <Typography component="p">
                            Running Time: {props.movieData.runtime}<br />
                            Released: {props.movieData.released}<br />
                            Rated: {props.movieData.rated} <br />
                            Overview: {props.movieData.plot} <br />
                            Production: {props.movieData.production} <br />
                            Director: {props.movieData.director} <br />
                            Actors: {props.movieData.actors} <br />
                            Language: {props.movieData.language} <br />
                            Writer: {props.movieData.writer} <br />
                        </Typography>
                    </Paper>    
                </GridListTile>
            </GridList>
        </div>
        // <div>
        //     <Paper className={classes.root} elevation={1}>
        //         <Typography variant="title" component="h3">
        //             Name : {props.movieData.title} ({props.movieData.year})
        //         </Typography>
        //         <img src={props.movieData.poster} alt="Movie"/>
        //         <Typography component="p">
        //             Running Time: {props.movieData.runtime}<br />
        //             Released: {props.movieData.released}<br />
        //             Rated: {props.movieData.rated} <br />
        //             Overview: {props.movieData.plot} <br />
        //             Production: {props.movieData.production} <br />
        //             Director: {props.movieData.director} <br />
        //             Actors: {props.movieData.actors} <br />
        //             Language: {props.movieData.language} <br />
        //             Writer: {props.movieData.writer} <br />
        //         </Typography>
        //     </Paper>
        // </div>
    );
}

MovieSummary.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieSummary); 