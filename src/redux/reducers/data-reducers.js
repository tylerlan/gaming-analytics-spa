import { combineReducers } from 'redux';
import * as CONST from '../constants/constants';

const pupd = (state = { dates: [], metrics: {} }, action) => {
  switch (action.type) {
    case CONST.ADD_DATA:
      return action.addData;
    default:
      return state;
  }
};

const aggr = (state = { dates: [], metrics: {} }, action) => {
  switch (action.type) {
    case CONST.ADD_DATA:
      return action.addData;
    default:
      return state;
  }
};

const mfgmix = (state = { dates: [], metrics: {} }, action) => {
  switch (action.type) {
    case CONST.ADD_DATA:
      return action.addData;
    default:
      return state;
  }
};

export default combineReducers({
  pupd,
  aggr,
  mfgmix
});
