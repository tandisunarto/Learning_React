import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Zones from './Zones';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';

import BATTLE_ACTIONS from './store/BattleAction';
import { Typography } from '@material-ui/core';

const sides = ["Enemy", "Home"];

const styles = theme => ({
   root: {
      flexGrow: 1
   },
   paper: {
      height: 450,
      width: 450
   },
   arena: {
      height: 450,
      width: 450
   },
   zoneHeader: {
      marginBottom: 20,
      fontSize: '1.3rem',
      fontWeight: 'bold'
   },
   control: {
      padding: theme.spacing.unit * 2
   }
});

class Arena extends React.Component {

   state = {
      spacing: '16',
   };

   constructor(props) {
      super(props);
      this.props.onInitZones();
   }
   
   playAgainHandler = () => {        
      this.props.onInitZones();
   }

   render() {
      const { classes } = this.props;

      return (
         <React.Fragment>
            <Grid container className={classes.root} justify="center" spacing={32}>
               {sides.map((value, index) => (
               <Grid key={value} item>
                  <div className={classes.zoneHeader}>{index === 0 ? "Enemy" : "Player"}</div>                  
                  <div className={classes.arena}>
                     <Zones side={value} />
                  </div>
               </Grid>
               ))}
            </Grid>
            <div style={{marginTop: 30}}>
               <Button disabled={!this.props.gameOver} onClick={this.playAgainHandler} variant='extendedFab'>PLAY AGAIN</Button>
               <div hidden={!this.props.gameOver} style={{marginTop: 30}}>
                  <Typography variant="display1">Winner: {this.props.winner}</Typography>
               </div>
            </div>
         </React.Fragment>
      );
   }
}

Arena.propTypes = {
   classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
   return {
      enemyZone: state.enemyZone,
      homeZone: state.homeZone,
      gameOver: state.gameOver,
      winner: state.winner,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onInitZones: () => dispatch({
         type: BATTLE_ACTIONS.INIT_ZONES
      })
   }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Arena));