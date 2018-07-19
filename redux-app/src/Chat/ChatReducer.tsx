import { ACTIONS } from './ChatActionEnum';

const initialState = {
    messages: []
}

const ChatReducer = (state: any = initialState, action: any) => {    
    
    switch (action.type) {
        case ACTIONS.ADD_MESSAGE: {
            return {
                messages: state.messages.concat(action.message)
            }
        }
        case ACTIONS.DELETE_MESSAGE: {
            return {
                messages: [
                    ...state.messages.slice(0, action.index),
                    ...state.messages.slice(
                        action.index + 1, state.messages.length
                    ),
                ],
            };
        }
        default: {
            return state;
        }
    }
}

export { ChatReducer };
