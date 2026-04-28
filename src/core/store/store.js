import { createStore, applyMiddleware } from "redux";
import apiMiddleware from "./middleware/actionInvokingMiddleware.js";
import configs from "./actionsRegistrations/index.js";
import AppReducer from "./reducers/combineReducers.js";


const store = createStore(
  AppReducer,
  applyMiddleware(apiMiddleware(configs)),
);

export default store;