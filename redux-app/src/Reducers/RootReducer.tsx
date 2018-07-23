import { combineReducers } from "../../node_modules/redux";
import CounterReducer from "./CounterReducer";
import { ChatReducer } from "./ChatReducer";

const rootReducers = combineReducers({
    counter: CounterReducer,
    chat: ChatReducer
})

export default rootReducers;