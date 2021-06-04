import { createStore,combineReducers } from "redux";
import { numberReducer } from "./reducers/number.reducer";
import { showDivReducer } from "./reducers/showDiv.reducer";


const combinedReducer = combineReducers({
    num : numberReducer,
    show : showDivReducer
})

const store = createStore(combinedReducer);

export default store