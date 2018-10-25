import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Request from "../../services/http-request";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        width: 1420,
        height: 580,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
      },
      titleBar: {
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
      icon: {
        color: 'white',
      },
});

class HomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tileData : [],
        }
    }

    componentWillMount() {
        Request.get(`/movies`)
        .then((response) => {
            console.log(response);
            this.setState({
                tileData: response,
            });
        });
    }
    render() {
        const { classes } = this.props;
        return(
           <div className={classes.root}>
                <GridList cellHeight={400} spacing={5} className={classes.gridList}>
                    {this.state.tileData.map(tile => (
                        <GridListTile cols={1} rows={1} >
                        <img src={tile.poster}
                         alt="Movie" />
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
    }
};

HomeContainer.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HomeContainer);