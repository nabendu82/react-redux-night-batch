import { combineReducers } from "redux";
import chickenReducer from "./chicken/chickenReducer";
import eggReducer from "./egg/eggReducer";

const rootReducer = combineReducers({
    egg: eggReducer,
    chicken: chickenReducer
});

export default rootReducer;