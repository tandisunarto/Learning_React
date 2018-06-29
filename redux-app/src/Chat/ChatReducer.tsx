function ChatReducer(state: any, action: any) {
   if (action.type === CHAT_ACTION_TYPE.ADD_MESSAGE) {
      return {
         messages: state.messages.concat(action.message)
      }
   } else if (action.type === CHAT_ACTION_TYPE.DELETE_MESSAGE) {

   } else {
      return state;
   }
}

export { ChatReducer };