import { ChatReducer } from "./ChatReducer";

class ChatStore {

   state: any;

   constructor(reducer: any, initialState: any) {
      this.state = initialState;         
   }

   dispatch(action: CHAT_ACTION_TYPE) {
      this.state = ChatReducer(this.state, action);
   }
}

export { ChatStore };