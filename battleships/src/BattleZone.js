import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Zone from './Zone';

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
        height: 40        
    },
});

function FormRow(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            { Array(10).fill(0).map((el, index) => { 
                return <Zone side={props.side} row={props.row} col={index} key={index} /> 
            }) }
        </React.Fragment>
    );
}

FormRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

class BattleZone extends React.Component {
  
    render() {
        const { classes } = this.props;
        return (            
            <Grid container direction={"row"} justify={"center"} style={{height: '100%', width: '100%'}} >
                { Array(10).fill(0).map((el, index) => {
                    return <FormRow side={this.props.side} row={index} classes={classes} key={index}/>
                }) }
            </Grid>
        );
    }
}

BattleZone.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BattleZone);