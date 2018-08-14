import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ZoneRow from './ZoneRow';

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
    ship: {
        backgroundColor: '#334455FF'
    }
});

class Zones extends React.Component {
  
    render() {
        const { classes } = this.props;
        return (            
            <Grid container direction={"row"} justify={"center"} style={{height: '100%', width: '100%'}} >
                { Array(10).fill(0).map((el, index) => {
                    return <ZoneRow side={this.props.side} row={index} classes={classes} key={index}/>                
                }) }
            </Grid>
        );
    }
}

Zones.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Zones);