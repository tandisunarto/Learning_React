import { ACTIONS } from './ChatActionEnum';

const initialState = {
    messages: []
}

const ChatReducer = (state: any = initialState, action: any) => {    
    
    switch (action.type) {
        case ACTIONS.ADD_MESSAGE: {
            return {
                ...state,
                messages: state.messages.concat(action.message)
            }
        }
        case ACTIONS.DELETE_MESSAGE: {
            // state.messages.splice(action.index, 1);
            const updatedMessages = state.messages.filter((el: any,i: number) => {
                i !== action.index;
            });
            return {
                messages: [
                    ...updatedMessages
                    // ...state.messages
                    // ...state.messages.slice(0, action.index),
                    // ...state.messages.slice(action.index + 1, state.messages.length),
                ],
            };
        }
        default: {
            return state;
        }
    }
}

export { ChatReducer };