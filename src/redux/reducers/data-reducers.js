import { combineReducers } from 'redux';
import * as CONST from '../constants/constants';

const pupd = (state = { dates: [], metrics: {} }, action) => {
  switch (action.type) {
    case CONST.ADD_PUPD:
      const { dates, metrics } = action.pupdData;

      return {
        dates: [...state.dates, ...dates],
        metrics: { ...state.metrics, ...metrics }
      };

    // NOTE: It is possible to get some duplicate data. Perhaps dates should be made a SET.

    default:
      return state;
  }
};

const aggr = (state = { dates: [], metrics: {} }, action) => {
  switch (action.type) {
    case CONST.ADD_AGGR:
      const { dates, metrics } = action.aggrData;

      return {
        dates: [...state.dates, ...dates],
        metrics: { ...state.metrics, ...metrics }
      };

    // NOTE: It is possible to get some duplicate data. Perhaps dates should be made a SET.

    default:
      return state;
  }
};

const mfgmix = (state = { dateRange: {}, records: [] }, action) => {
  switch (action.type) {
    case CONST.ADD_MFGMIX:
      const { dateRange, records } = action.mfgmixData;

      return {
        dateRange: { ...dateRange },
        records: [...records]
      };

    // NOTE: This is a little inefficient, since a new API call will need to be made every time the date range is altered. A more efficient system would be smart enough to store and replenish from the store based on client requests.

    default:
      return state;
  }
};

export default combineReducers({
  pupd,
  aggr,
  mfgmix
});
