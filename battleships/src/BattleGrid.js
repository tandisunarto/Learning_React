import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    paper: {
        height: 500,
        width: 500,
        margin: 10
    }
});

class BattleGrid extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Grid key={this.props.value} item>
                    <Paper className={classes.paper} />
                </Grid>
            </div>
        )
    }
}

BattleGrid.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BattleGrid);