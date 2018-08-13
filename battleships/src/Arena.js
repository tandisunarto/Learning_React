import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Zones from './Zones';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import Ships from './ship/Ships';

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
    
    zones = ["Enemy", "Home"];

    state = {
        spacing: '16',
    };

    componentDidMount() {
        this.zones.forEach(zone => {
            this.GenerateShip(zone)

            // this.props.onUpdateZone()
        })
    }

    GenerateShip = (zone) => {
        Ships.forEach(ship => {
            this.PlaceShipInZone(zone, ship);
        });
    };
     
    PlaceShipInZone = (zone, ship) => {
        let row = 0;
        let col = 0;
        let orientation = Math.round(Math.random()) === 0 ? 'H' : 'V';

        let available = false;
        if (orientation === 'H') {            
            do {
                col = this.GetStartPos(ship.length);
                row = Math.floor(Math.random() * 10);
                available = this.CheckAvailableCells(zone, row, col, ship.length, orientation);
            } while (available === false)
        } else if (orientation === 'V') {            
            do {
                row = this.GetStartPos(ship.length);
                col = Math.floor(Math.random() * 10);
                available = this.CheckAvailableCells(zone, row, col, ship.length, orientation);
            } while (available === false)
        }
        
        for(let i = 0; i < ship.length; i++) {
            
        }

        if (zone === "Enemy")
            console.log(zone, ship, row, col, orientation, this.props.enemyZones);
        else
            console.log(zone, ship, row, col, orientation, this.props.homeZones);
    }
    
    GetStartPos(length) {
        let pos = 0;
        do {
            pos = Math.floor(Math.random() * 10);
        } while (pos > (9 - length))
        return pos;
    }

    CheckAvailableCells(zone, row, col, length, orientation) {
        let available = true;
        let cellRow = row;
        let cellCol = col;
        for(let i = 0; i < length; i++){
            if (this.props.enemyZones[cellRow][cellCol] === 'S') {
                available = false;
                break;
            }
            (orientation === "H") ? cellCol++ : cellRow++;
        }

        return available;
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Grid container className={classes.root} justify="center" spacing={32}>
                    {this.zones.map((value, index) => (
                    <Grid key={value} item>
                        <div className={classes.arena}>
                        {/* <Paper className={classes.paper}> */}
                            <Zones side={value} />
                        {/* </Paper> */}
                        </div>
                    </Grid>
                    ))}
                </Grid>
                <div style={{marginTop: 30}}>
                    <Button variant='extendedFab'>PLAY AGAIN</Button>
                </div>
            </React.Fragment>
        );
    }
}

Arena.propTypes = {
  classes: PropTypes.object.isRequired,
};

const MapStateToProps = (state) => {
    return {
        enemyZones: state.enemyZones,
        homeZones: state.homeZones
    }
}

export default withStyles(styles)(connect(MapStateToProps)(Arena));