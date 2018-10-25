import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { styles } from "../styles/MovieStyles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import { Link } from "react-router-dom";

const MovieInfoComponent = (props) => {
    const { classes } = props;
    return(
        <div className={classes.root}>
             <GridList cellHeight={420} spacing={2} className={classes.gridList}>
                 {props.tileData.map(tile => (
                     <GridListTile key={tile._id} cols={1} rows={1} onClick={(e) => {props.fetchMovie(tile._id)}}>
                     <img src={tile.poster} alt="Movie"/>
                     <GridListTileBar
                         title={tile.title}
                         titlePosition="top"
                         actionIcon={
                         <IconButton className={classes.icon}>
                             <StarBorderIcon />
                         </IconButton>
                         }
                         actionPosition="left"
                         className={classes.titleBar}
                     />
                     </GridListTile>
                 )
                 )}
             </GridList>
        </div>
    );
};

MovieInfoComponent.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(MovieInfoComponent);