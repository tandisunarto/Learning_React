import BATTLE_ACTIONS from './BattleAction';

// W : water
// S : ship
// H : hit
// M : miss

const initialState = {
    enemyZones: InitZones(),
    homeZones: InitZones(),
    enemyShipsSunk: 0,
    homeShipsSunk: 0,
}

function InitZones() {
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
            let updatedZones = [
                ...state.enemyZones,
            ]
            updatedZones[coord.row][coord.col].status = 'M';
            return {
                enemyZones: updatedZones,
                homeZones: state.homeZones
            }
        }
        case BATTLE_ACTIONS.RESET: {
            return {
                enemyZones: InitZones(),
                homeZones: InitZones()
            }
        }
        case BATTLE_ACTIONS.SET_ENEMY_ZONE: {
            return {
                enemyZones: action.zone,
                homeZones: state.homeZones
            }
        }
        case BATTLE_ACTIONS.SET_HOME_ZONE: {
            return {
                enemyZones: state.enemyZones,
                homeZones: action.zone
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