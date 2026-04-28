import {combineReducers} from "redux";

import exampleReducer from "./exampleReducer.js";

const AppReducers = combineReducers({

    exampleReducer,
    // .construct Reducers
});

const RootReducers = (state, action) => {
    if (action.type === "RESET") {
        state={
            // any reducers
        }
    }

    return AppReducers(state, action);

}

export default RootReducers;