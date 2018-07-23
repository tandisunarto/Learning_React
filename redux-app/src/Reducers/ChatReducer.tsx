import { ACTIONS } from '../Chat/ChatActionEnum';

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
            const updatedMessages = state.messages.filter((el: any,i: number) => {
                return i !== action.index;
            });
            return {
                messages: updatedMessages
            };
        }
        default: {
            return state;
        }
    }
}

export { ChatReducer };