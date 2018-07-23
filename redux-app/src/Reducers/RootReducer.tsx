import { combineReducers } from "../../node_modules/redux";
import CounterReducer from "./CounterReducer";
import { ChatReducer } from "./ChatReducer";

const rootReducers = combineReducers({
    ctr: CounterReducer,
    chat: ChatReducer
})

export { rootReducers };