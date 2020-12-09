// In this code I combine all of my reducers

import { combineReducers } from 'redux'


// import all your reducers here
import postReducer from './postReducer';
import loginReducer from './loginReducer';
import userReducer from './userReducer';
import oneUserReducer from "./oneUserReducer";
import restaurantReducer from "./restaurantReducer";
import reviewReducer from "./reviewReducer";

const rootReducer = combineReducers({
  postReducer,
  loginReducer,
  userReducer,
  oneUserReducer,
  restaurantReducer,
  reviewReducer,
  // add all your reducers here
});



export default rootReducer;

