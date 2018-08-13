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
        return new Array(10).fill('W');
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
            updatedZones[coord.row][coord.col] = 'M';
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
        case BATTLE_ACTIONS.ENEMY_ZONE: {
            return {
                enemyZones: action.zone,
                homeZones: state.homeZones
            }
        }
        case BATTLE_ACTIONS.HOME_ZONE: {

        }
        case BATTLE_ACTIONS.ENEMY_CELL: {

        }
        case BATTLE_ACTIONS.HOME_CELL: {

        }
        default: {
            return state;
        }
    }    
}

export default appReducer;