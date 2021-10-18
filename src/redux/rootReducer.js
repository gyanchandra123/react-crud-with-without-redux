import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./ice-cream/iceCreamReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
});
