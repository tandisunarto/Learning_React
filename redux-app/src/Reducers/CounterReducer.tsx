import { ACTIONS } from './ActionEnum';

const initialState = {
   counter: 0
}

const reducer = (state: any = initialState, action: any) => {

   switch (action.type) {
      case ACTIONS.INC_COUNTER: {
         return {
            counter: state.counter + action.value
         }
      }
      case ACTIONS.DEC_COUNTER: {
         return {
            counter: state.counter - action.value
         }
      }
      default: {
         return state;
      }
   }
}

export default reducer;