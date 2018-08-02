import { combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';
import Reducer from './reducer';

export default combineReducers({
  mainReducer: Reducer
});
