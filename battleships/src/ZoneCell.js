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
    cellEnemy: {
        backgroundColor: '#E0F0A5FF', 
        width: 40, 
        height: 40,
        padding: 0
    },
    cell: {
        backgroundColor: '#DDEEFFFF', 
        width: 40, 
        height: 40,
        padding: 0
    }
});

class ZoneCell extends React.Component {

    zoneClickHandler = (e)=> {
        let codes = e.currentTarget.id.split(':');
        console.log(codes);
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid item>
                <Paper className={classes.paper}>
                    <Button variant="fab" id={this.props.side + ':' + this.props.row + ':' + this.props.col} 
                        onClick={this.zoneClickHandler} className={this.props.side === 1 ? classes.cellEnemy : classes.cell}>{this.props.row}:{this.props.col}</Button>
                    </Paper>
            </Grid>
        )
    }
}

ZoneCell.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ZoneCell);