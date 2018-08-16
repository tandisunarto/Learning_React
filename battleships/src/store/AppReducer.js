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
    gameOver: false
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

         if (state.gameOver) {
            return state;
         }

         let [updatedZone, result] = BattleService.AttackEnemyZone(action.coord, state.enemyZone);
         if (result.gameOver) {
            return state;
         } else {
            return {
               ...state,
               enemyZone: updatedZone,
               homeZone: state.homeZone,
               gameOver: result.gameOver
            }
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
               ...state,
               enemyZone: enemyZone,
               homeZone: homeZone,
               gameOver: false
         }
      }
      default: {
         return state;
      }
   }
}

export default appReducer;