import { combineReducers } from 'redux';
import * as CONST from '../constants/constants';

const currentSection = (state = null, action) => {
  switch (action.type) {
    case CONST.SET_SECTION:
      return action.section;
    default:
      return state;
  }
};

const navMobileStatus = (state = false, action) => {
  switch (action.type) {
    case CONST.TOGGLE_NAV:
      return !action.navMobileStatus;
    default:
      return state;
  }
};

const currentMetric = (state = null, action) => {
  switch (action.type) {
    case CONST.SET_METRIC:
      return action.metric;
    default:
      return state;
  }
};

const currentDateRange = (state = null, action) => {
  switch (action.type) {
    case CONST.SET_DATERANGE:
      return action.dateRange;
    default:
      return state;
  }
};

export default combineReducers({
  currentSection,
  currentMetric,
  currentDateRange,
  navMobileStatus
});
