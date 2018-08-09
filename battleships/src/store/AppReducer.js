import BATTLE_ACTIONS from './BattleAction';

// W : water
// S : ship
// H : hit
// M : miss

const initialState = {
    zones: InitZones()
}

function InitZones() {
    let zones = new Array(10).fill(0);
    zones = zones.map(t => {  
        return new Array(10).fill('W');
    })
    return zones;
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case BATTLE_ACTIONS.ATTACK: {
            let coord = action.coord;
            let updatedZones = [
                ...state.zones,
            ]
            updatedZones[coord.row][coord.col] = 'M';
            return {
                zones: updatedZones
            }            
        }
        case BATTLE_ACTIONS.RESET: {
            state.zones = InitZones();            
        }
        default:
            return state;
    }    
}

export default appReducer;