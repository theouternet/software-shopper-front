import { combineReducers } from 'redux';
import reducer from './reducer';

const rootReducer =  combineReducers({
  software: reducer
});


export default rootReducer;