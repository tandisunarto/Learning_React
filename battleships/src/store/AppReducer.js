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
   gameOver: false,
   winner: "",
   enemyAttackStatus: {
      hit: false,
      lastHitRow: -1,
      lastHitCol: -1,
      orientation: ""
   }
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

         // home's turn to attack
         let [updatedZone, shipDestroyed] = BattleService.AttackEnemyZone(action.coord, state.enemyZone);
         let enemyShipsSunk = (shipDestroyed === true) ? state.enemyShipsSunk + 1 : state.enemyShipsSunk;      
         let homeShipsSunk = state.homeShipsSunk;
         let gameOver = (enemyShipsSunk === 5) ? true : false;
         let winner = "";

         if (!gameOver) {
            // enemy's turn to attack
            let [updatedZone, shipDestroyed] = BattleService.AttackHomeZone(state);
            homeShipsSunk = (shipDestroyed === true) ? state.homeShipsSunk + 1 : state.homeShipsSunk;
            gameOver = (homeShipsSunk === 5) ? true : false;
            winner = (gameOver === true) ? "Enemy" : "";
         } else {
            winner = "Home";
         }

         return {
            ...state,
            enemyZone: updatedZone,
            enemyShipsSunk: enemyShipsSunk,
            homeShipsSunk: homeShipsSunk,
            gameOver: gameOver,
            winner: winner
         }
      }
      case BATTLE_ACTIONS.INIT_ZONES: {
         let enemyZone = InitZone();
         let homeZone = InitZone();
         sides.forEach(side => {
               let zone = (side === "Enemy") ? enemyZone : homeZone;
               GenerateShips(zone);
         })

         return {
               ...state,
               enemyZone: enemyZone,
               homeZone: homeZone,
               enemyShipsSunk: 0,
               homeShipsSunk: 0,
               gameOver: false,               
         }  
      }
      default: {
         return state;
      }
   }
}

export default appReducer;