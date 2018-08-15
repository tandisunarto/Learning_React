import BATTLE_ACTIONS from './BattleAction';
import { GenerateShips } from '../ship/ShipServices';

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
                index: 0
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
            if (updatedZone[coord.row][coord.col].status === "W")
                updatedZone[coord.row][coord.col].status = "M";
            else if (updatedZone[coord.row][coord.col].status === "S")
                updatedZone[coord.row][coord.col].status = "H";
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
            return {
                enemyZone: enemyZone,
                homeZone: homeZone
            }
        }
        case BATTLE_ACTIONS.RESET: {
            return {
                enemyZone: InitZone(),
                homeZone: InitZone()
            }
        }
        case BATTLE_ACTIONS.SET_ZONES: {
            return {
                enemyZone: action.zones.enemyZone,
                homeZone: action.zones.homeZone
            }
        }
        case BATTLE_ACTIONS.ENEMY_CELL: {
            break;
        }
        case BATTLE_ACTIONS.HOME_CELL: {
            break;
        }
        default: {
            return state;
        }
    }    
}

export default appReducer;