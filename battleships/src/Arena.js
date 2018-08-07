import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BattleZone from './BattleZone';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 450,
        width: 450,
    },
    arena: {
        height: 450,
        width: 450,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class Arena extends React.Component {
    state = {
        spacing: '16',
    };

    render() {
        const { classes } = this.props;

        return (
            <Grid container className={classes.root} justify="center" spacing={32}>
                {[0, 1].map((value, index) => (
                <Grid key={value} item>
                    <div className={classes.arena}>
                    {/* <Paper className={classes.paper}> */}
                        <BattleZone side={index} />
                    {/* </Paper> */}
                    </div>
                </Grid>
                ))}
            </Grid>
        );
    }
}

Arena.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Arena);