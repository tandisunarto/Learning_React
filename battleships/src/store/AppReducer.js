import BATTLE_ACTIONS from './BattleAction';
import { GenerateShips } from '../ship/ShipServices';

import * as BattleService from '../ship/BattleService'

const sides = ["Enemy", "Home"];

// W : water
// S : ship
// H : hit
// M : miss

const initialState = {
    enemyZone: InitZone(),
    homeZone: InitZone(),
    enemyShipsSunk: 0,
    homeShipsSunk: 0,
}

function InitZone() {
   let zone = new Array(10).fill(0);
   zone = zone.map(t => {  
      let row = new Array(10).fill({}).map(() =>{
         return {
            status: 'W',
            orientation: '',
            length: 0,
            index: 0,
            turn: 'Home'
         }
      })
      return row;
   })
   return zone;
}

const appReducer = (state = initialState, action) => {
   switch(action.type) {
      case BATTLE_ACTIONS.ATTACK: {
         let coord = action.coord;
         let updatedZone = [
               ...state.enemyZone,            
         ]

         if (BattleService.CellNotAttacked(updatedZone[coord.row][coord.col])) {
            let status = updatedZone[coord.row][coord.col].status;
            updatedZone[coord.row][coord.col].status = BattleService.ProcessCellStatus(status);
            console.log("Attack ship")
         }

         return {
               enemyZone: updatedZone,
               homeZone: state.homeZone
         }
      }
      case BATTLE_ACTIONS.INIT_ZONES: {
         let enemyZone = InitZone();
         let homeZone = InitZone();
         sides.forEach(side => {
               let zone = (side === "Enemy") ? enemyZone : homeZone;
               GenerateShips(zone);
         })

         // pretend computer attacks first
         homeZone[4][4].status = (homeZone[4][4].status === "W") ? "M" : "H";

         return {
               enemyZone: enemyZone,
               homeZone: homeZone
         }
      }
      default: {
         return state;
      }
   }
}

export default appReducer;