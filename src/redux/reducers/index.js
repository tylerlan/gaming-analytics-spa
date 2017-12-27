import { combineReducers } from 'redux';
import ui from './ui-reducers';
import data from './data-reducers';

const rootReducer = combineReducers({
  ui,
  data
});

export default rootReducer;
