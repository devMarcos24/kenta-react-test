import { combineReducers } from "redux";

import coffeesReducer from "./modules/coffee/reducer";

const rootReducer = combineReducers({
  coffees: coffeesReducer,
});

export default rootReducer;
