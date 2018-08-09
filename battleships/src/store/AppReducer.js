import BATTLE_ACTIONS from './BattleAction';

// W : water
// S : ship
// H : hit
// M : miss

const initialState = {
    enemyZones: InitZones(),
    homeZones: InitZones()
}

function fakeEnemyZones() {
    return [
        ['Q','Q','Q','Q','Q','Q','Q','Q','Q','Q'],
        ['Q','Q','Q','Q','Q','Q','Q','Q','Q','Q'],
        ['Q','Q','Q','Q','Q','Q','Q','Q','Q','Q'],
        ['Q','Q','Q','Q','Q','Q','Q','Q','Q','Q'],
        ['Q','Q','Q','Q','Q','Q','Q','Q','Q','Q'],
        ['Q','Q','Q','Q','Q','Q','Q','Q','Q','Q'],
        ['Q','Q','Q','Q','Q','Q','Q','Q','Q','Q'],
        ['Q','Q','Q','Q','Q','Q','Q','Q','Q','Q'],
        ['Q','Q','Q','Q','Q','Q','Q','Q','Q','Q'],
        ['Q','Q','Q','Q','Q','Q','Q','Q','Q','Q']
    ]
}

function fakeHomeZones() {
    return [
        ['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
        ['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
        ['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
        ['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
        ['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
        ['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
        ['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
        ['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
        ['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z'],
        ['Z','Z','Z','Z','Z','Z','Z','Z','Z','Z']
    ]
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
                ...state.enemyZones,
            ]
            updatedZones[coord.row][coord.col] = 'M';
            return {
                enemyZones: updatedZones,
                homeZones: state.homeZones
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