import { combineReducers } from 'redux';
import initialState from '../store/initial-state';
import * as CONST from '../constants/constants';

const currentSection = (state = initialState.ui.currentSection, action) => {
  switch (action.type) {
    case CONST.SET_SECTION:
      return action.section;
    default:
      return state;
  }
};

const navMobileStatus = (state = initialState.ui.navMobileStatus, action) => {
  switch (action.type) {
    case CONST.TOGGLE_NAV:
      return !action.navMobileStatus;
    default:
      return state;
  }
};

const currentMetric = (state = initialState.ui.currentMetric, action) => {
  switch (action.type) {
    case CONST.SET_METRIC:
      return action.metric;
    default:
      return state;
  }
};

const currentDateRange = (state = initialState.ui.currentDateRange, action) => {
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
