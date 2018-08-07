import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing.unit,
        padding: 1,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: 40,
        height: 40,
    },
    zone: {
        // cursor: 'pointer',
        backgroundColor: '#DDEEFFFF', 
        width: 40, 
        height: 40,
        padding: 0
    }
});

class Zone extends React.Component {

    gridClickHandler = () => {
        console.log("test");
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid item>
            <Paper className={classes.paper}>
                <Button variant="fab" className={classes.zone}>{this.props.row}:{this.props.col}</Button>
                {/* <div onClick={this.gridClickHandler} className={classes.zone}>{this.props.side}-{this.props.row}:{this.props.col}</div> */}
            </Paper>
            </Grid>
        )
    }
}

Zone.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Zone);