import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import styles from'./ZoneCellStyles';
import { connect } from 'react-redux';

import BATTLE_ACTIONS from './store/BattleAction';

class ZoneCell extends React.Component {

   attackHandler = (e)=> {
      if (this.props.side === 'Enemy') {
         let coord = {
               row: this.props.row,
               col: this.props.col
         };
         this.props.onAttack(coord);
      }
   }

   cellStyle = (side, row, col) => {
      const { classes } = this.props;
      let zone = side === 'Enemy' ? this.props.enemyZone : this.props.homeZone;

      let style = (side === 'Enemy') ? classes.enemyCell : classes.homeCell;
      if (zone[row][col].status === 'S' /*&& side === "Home"*/)
         style = classes.shipCell;
      else if (zone[row][col].status === 'H')
         style = classes.hitCell;
      else if (zone[row][col].status === 'M')
         style = classes.missedCell; 

      return style;
   };

   render() {

      const { classes } = this.props;
      const classStyle = (
         classes.cell + ' ' + this.cellStyle(this.props.side, this.props.row, this.props.col)
      );
      let zone = this.props.side === 'Enemy' ? this.props.enemyZone : this.props.homeZone

      return (
         <Grid item>
               <Paper className={classes.paper}>
                  <Button variant="fab" id={this.props.side + ':' + this.props.row + ':' + this.props.col} 
                     onClick={this.attackHandler} className={classStyle}>
                     {zone[this.props.row][this.props.col].status === "S" /*&& this.props.side === "Home"*/ ? 
                           // zone[this.props.row][this.props.col].index + '/' + zone[this.props.row][this.props.col].length : "≈"
                           (zone[this.props.row][this.props.col].orientation === "H" ? "—" : "|") : "≈"
                     }
                  </Button>
               </Paper>
         </Grid>
      )
   }
}

const mapPropsToState = (state) => {
   return {
      enemyZone: state.enemyZone,
      homeZone: state.homeZone
   }
}

const mapDispatchToState = (dispatch) => {
   return {
      onAttack: (coord) => dispatch({
         type: BATTLE_ACTIONS.ATTACK,
         coord: coord
      }),
   }
}

ZoneCell.propTypes = {
   classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapPropsToState, mapDispatchToState)(ZoneCell));