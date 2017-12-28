import * as TYPES from '../constants/constants';

export const onChangeSection = section => (dispatch, getState, { Api }) => {
  dispatch({ type: TYPES.SET_SECTION, section });
};

export const onSelectMetric = metric => (dispatch, getState, { Api }) => {
  dispatch({ type: TYPES.SET_METRIC, metric });
};

export const onSelectDateRange = dateRange => (dispatch, getState, { Api }) => {
  dispatch({ type: TYPES.SET_DATERANGE, dateRange });
};

export function getPerUnitPerDay(dateRange) {
  return async (dispatch, getState, { Api }) => {
    const pupdData = await Api.getPUPD(dateRange);

    dispatch({
      type: TYPES.ADD_PUPD,
      pupdData
    });
  };
}

export function getAggregatePerDay(dateRange) {
  return async (dispatch, getState, { Api }) => {
    const aggrData = await Api.getAGGR(dateRange);

    dispatch({
      type: TYPES.ADD_AGGR,
      aggrData
    });
  };
}

export function getManufactureBreakdown(dateRange) {
  return async (dispatch, getState, { Api }) => {
    const mfgmixData = await Api.getMFGMIX(dateRange);

    dispatch({
      type: TYPES.ADD_MFGMIX,
      mfgmixData
    });
  };
}
