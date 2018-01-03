import { combineReducers } from 'redux';
import initialState from '../store/initial-state';
import * as CONST from '../constants/constants';

const pupd = (state = initialState.data.pupd, action) => {
  switch (action.type) {
    case CONST.ADD_PUPD:
      const { dates, metrics } = action.pupdData;

      // NOTE: This is wiping out the current data and replacing it with the result of the action
      // NOTE: The Thunk will do the work of understanding what data is duplicate data and
      // 1) Only making API call for the data we do not currently have, and
      // 2) Returning a composite of what we have already plus the new stuff to this reducer

      return {
        dates: [...dates],
        metrics: { ...metrics }
      };

    // NOTE: This procedure of extracting dates and metrics from the action and adding it to the store could be abstracted into a function that could serve at least two of these reducers

    default:
      return state;
  }
};

const aggr = (state = initialState.data.aggr, action) => {
  switch (action.type) {
    case CONST.ADD_AGGR:
      const { dates, metrics } = action.aggrData;

      // NOTE: This is wiping out the current data and replacing it with the result of the action

      return {
        dates: [...dates],
        metrics: { ...metrics }
      };

    default:
      return state;
  }
};

const mfgmix = (state = initialState.data.mfgmix, action) => {
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
