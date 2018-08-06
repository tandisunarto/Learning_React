import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BattleGrid from './BattleGrid';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class Arena extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
            <Grid container className={classes.demo} justify="center" spacing={16}>
                {[0, 1].map(value => (
                    <BattleGrid key={value} />
                ))}
            </Grid>
        </Grid>
      </Grid>
    );
  }
}

Arena.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Arena);